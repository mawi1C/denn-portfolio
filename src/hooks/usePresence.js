import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

// Module-level singleton so multiple mounted instances (e.g. mobile +
// desktop sidebar) share one real channel instead of each subscribing
// separately, which Supabase doesn't allow for the same topic name.
let sharedChannel = null
let subscriberCount = 0
let currentViewers = []
const listeners = new Set()

function getSessionId() {
  let sessionId = sessionStorage.getItem('presence_id')
  if (!sessionId) {
    sessionId = Math.random().toString(36).slice(2, 10)
    sessionStorage.setItem('presence_id', sessionId)
  }
  return sessionId
}

function ensureChannel() {
  if (sharedChannel) return sharedChannel

  const sessionId = getSessionId()

  sharedChannel = supabase.channel('portfolio-presence', {
    config: { presence: { key: sessionId } },
  })

  sharedChannel
    .on('presence', { event: 'sync' }, () => {
      const state = sharedChannel.presenceState()
      currentViewers = Object.keys(state)
      listeners.forEach((fn) => fn(currentViewers))
    })
    .subscribe(async (status) => {
      if (status === 'SUBSCRIBED') {
        await sharedChannel.track({ joined_at: new Date().toISOString() })
      }
    })

  return sharedChannel
}

export function usePresence() {
  const [viewers, setViewers] = useState(currentViewers)

  useEffect(() => {
    ensureChannel()
    subscriberCount += 1
    listeners.add(setViewers)

    return () => {
      listeners.delete(setViewers)
      subscriberCount -= 1

      // Only tear down the real channel once every consumer has unmounted
      if (subscriberCount <= 0 && sharedChannel) {
        supabase.removeChannel(sharedChannel)
        sharedChannel = null
        currentViewers = []
      }
    }
  }, [])

  return viewers
}