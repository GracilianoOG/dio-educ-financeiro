import { type PropsWithChildren, useEffect, useState } from 'react'

import { type Theme, ThemeContext } from './ThemeContext'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((scheme) => (scheme === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}
