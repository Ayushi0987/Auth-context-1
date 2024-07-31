import React from 'react'
import ThemeProvider from './ThemeProvider'
// import ThemeToggleButton from './ThemeToggleButton'
import './style.css';
import GlobalThemedBox from './GlobalThemedBox'

export default function App() {
  return (
    <div id='main'>
        <ThemeProvider>
            <GlobalThemedBox />
            {/* <ThemeToggleButton /> */}
        </ThemeProvider>
    </div>
  )
}
