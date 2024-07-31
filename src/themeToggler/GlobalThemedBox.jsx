import React, {useContext} from 'react'
import {LocalThemedBox} from './LocalThemedBox'
import { ThemeContext } from './ThemeProvider'

export default function GlobalThemedBox() {
    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div 
        className={`container bg-${theme === 'light' ? 'light' : 'dark'} txt-${theme === 'light' ? 'light' : 'dark'}`}>
        <p id='theme-text-container'>Lorem ipsum dolor sit amet.</p>
        <button className={`btn btn-${theme === 'light' ? 'light' : 'dark'}`}
        onClick={toggleTheme}>
            Themed Toggle
        </button>
        <LocalThemedBox />
    </div>
  )
}
