import { useEffect, useState, useRef } from 'react'
import { supabase } from '../lib/supabaseClient'

function timeAgo(dateString) {
  const seconds = Math.floor((new Date() - new Date(dateString)) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export default function CommunityChat() {
  const [messages, setMessages] = useState([])
  const [name, setName] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [nameSet, setNameSet] = useState(false)
  const [content, setContent] = useState('')
  const bottomRef = useRef(null)

  // On mount, check if name already saved
  useEffect(() => {
    const savedName = localStorage.getItem('chat_name')
    if (savedName) {
      setName(savedName)
      setNameSet(true)
    }
  }, [])

  // Fetch messages + subscribe to realtime
  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true })
        .limit(50)
      if (!error) setMessages(data)
    }
    fetchMessages()

    const channel = supabase
      .channel('messages-realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => setMessages((prev) => [...prev, payload.new])
      )
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSetName = (e) => {
    e.preventDefault()
    if (!nameInput.trim()) return
    const trimmed = nameInput.trim()
    localStorage.setItem('chat_name', trimmed)
    setName(trimmed)
    setNameSet(true)
  }

  const handleSend = async (e) => {
    e.preventDefault()
    if (!content.trim()) return
    const { error } = await supabase
      .from('messages')
      .insert({ name, content: content.trim() })
    if (!error) setContent('')
  }

  return (
    /* FIXED: Removed max-w-md completely so it expands to the exact edges of the blue highlighted ChatPage container in image_7c3c1d.png */
    <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-50/30 dark:bg-transparent">
      <div className="absolute inset-0 backdrop-blur-xl bg-white/40 dark:bg-white/5" />

      <div className="relative flex flex-col h-96 p-4">
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 mt-1" />
              <div className="flex flex-col items-start flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{msg.name}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">· {timeAgo(msg.created_at)}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800/80 text-gray-900 dark:text-white text-sm rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%] break-words shadow-sm dark:shadow-none">
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-white/10">
          {!nameSet ? (
            <form onSubmit={handleSetName} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter your name to chat..."
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                autoFocus
                className="flex-1 bg-transparent text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 outline-none"
              />
              <button
                type="submit"
                className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white font-mono"
              >
                set ↵
              </button>
            </form>
          ) : (
            <form onSubmit={handleSend} className="flex flex-col gap-2">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                chatting as <span className="text-gray-900 dark:text-white font-medium">{name}</span>
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem('chat_name')
                    setName('')
                    setNameSet(false)
                  }}
                  className="ml-2 text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 text-xs"
                >
                  (change)
                </button>
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="say something..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="flex-1 bg-transparent text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 outline-none"
                />
                <button
                  type="submit"
                  className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white font-mono"
                >
                  send ↵
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}