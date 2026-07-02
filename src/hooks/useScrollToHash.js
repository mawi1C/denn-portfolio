import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // Small delay ensures the target element exists in the DOM
      // (especially important right after route navigation)
      const timeout = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
      return () => clearTimeout(timeout)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])
}