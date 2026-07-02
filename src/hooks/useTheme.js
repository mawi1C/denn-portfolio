import { useEffect, useState } from 'react'

function getSystemTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function useTheme() {
  // mode = what the user picked: 'light' | 'dark' | 'system'
  const [mode, setMode] = useState(() => localStorage.getItem('theme_mode') || 'system')
  // resolvedTheme = the actual applied theme: 'light' | 'dark'
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
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [mode])

  return { mode, setMode, resolvedTheme }
}