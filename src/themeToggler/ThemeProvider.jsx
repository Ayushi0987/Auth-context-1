import React, {createContext, useState} from 'react'

const ThemeContext = createContext();

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
       const newTheme = theme === 'light' ? 'dark' : 'light'
       setTheme(newTheme)
    }
  return (
    <>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}

export { ThemeProvider, ThemeContext};
