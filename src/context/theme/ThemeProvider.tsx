import { type PropsWithChildren, useState } from 'react'

import { type Theme, ThemeContext } from './ThemeContext'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme((scheme) => (scheme === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}
