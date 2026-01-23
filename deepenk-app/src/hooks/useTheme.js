import { useEffect } from 'react'
import { useThemeStore } from '../store/themeStore'

export const useTheme = () => {
  const { theme, toggleTheme, setTheme } = useThemeStore()
  
  useEffect(() => {
    // Initialize theme on mount
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [])
  
  return { theme, toggleTheme, setTheme }
}
