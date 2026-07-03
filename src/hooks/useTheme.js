import { useEffect, useState } from 'react'
// 1. Import both favicon assets directly (Adjust relative paths if necessary)
import faviconDark from '../assets/favicon.png'
import faviconWhite from '../assets/favicon-white.png'

function getSystemTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function useTheme() {
  const [mode, setMode] = useState(() => localStorage.getItem('theme_mode') || 'system')
  const [resolvedTheme, setResolvedTheme] = useState(() =>
    mode === 'system' ? getSystemTheme() : mode
  )

  useEffect(() => {
    const applied = mode === 'system' ? getSystemTheme() : mode
    setResolvedTheme(applied)

    const root = document.documentElement
    if (applied === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // 2. FIX: Dynamically swap the asset path on theme change
    const faviconElement = document.getElementById('dynamic-favicon')
    if (faviconElement) {
      faviconElement.href = applied === 'dark' ? faviconWhite : faviconDark
    }

    localStorage.setItem('theme_mode', mode)
  }, [mode])

  // If in system mode, keep listening for OS-level changes
  useEffect(() => {
    if (mode !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      const applied = e.matches ? 'dark' : 'light'
      setResolvedTheme(applied)
      document.documentElement.classList.toggle('dark', applied === 'dark')

      // 3. FIX: Keep system setting updates in sync
      const faviconElement = document.getElementById('dynamic-favicon')
      if (faviconElement) {
        faviconElement.href = applied === 'dark' ? faviconWhite : faviconDark
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [mode])

  return { mode, setMode, resolvedTheme }
}