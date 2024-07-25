import React from 'react' 
import { Outlet, Link, NavLink } from 'react-router-dom'
import './tempStyle.css'

export default function BlogLayout() {
  return (
    <>
        <nav>
        
         <ul style={{display: 'flex', gap: '10px', listStyle: 'none'}}>
            <li>
                <NavLink 
                  to="/blogs/1"
                  >Blog 1</NavLink>
           </li>
            <li>
               <NavLink 
                  to="/blogs/2"
                  replace
                  >Blog 2</NavLink>
           </li>
            <li>
               <NavLink 
                  to="/blogs/3"
                  >Blog 3</NavLink>
           </li>
         </ul>
        </nav>
        
    {/* <header className='blogHeader'>
        this is my temp head
    </header>
    
    <header>
        this is my temp footer
    </header> */}
    <Outlet context={{commonInfo: 'I am common'}} />
      
    </>
  )
}
