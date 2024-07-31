import React, {useContext, useEffect, useState} from 'react'
import { ThemeContext } from './ThemeProvider'

export function LocalThemedBox() {
    const {theme} = useContext(ThemeContext);
    const [localTheme, setLocalTheme] = useState(theme);
    useEffect(()=>{
        setLocalTheme(theme)
    },[theme])
  return (
    <div 
        style={{width: '200px', height: '200px', border: '2px solid green'}}
        className={`bg-${localTheme === 'light' ? 'light' : 'dark'} txt-${localTheme === 'light' ? 'light' : 'dark'}`}
    >
        Hiiiiiiiii
        
        <button 
            onClick={()=>setLocalTheme(localTheme === 'light' ? 'dark' : 'light')}
            className={`btn btn-${localTheme === 'light' ? 'light' : 'dark'}`}
        >
            Toggle local theme to {localTheme === 'light' ? 'dark' : 'light'}
        </button>
    </div>
  )
}
