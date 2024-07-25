import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'

import './style.css'
import Home from './Home'
import About from './About'
import Products from './Products'
import SingleProduct from './SingleProduct'
import Favourite from './Favourite'

export default function App() {
return (
    <div>
        <nav>
            <ul>
                <li>
                <Link to={'/'}> Home </Link>
                </li>
                
                <li>
                <Link to={'/about'}> About </Link>
                </li>

                <li>
                <Link to={'/products'}> Products </Link>
                </li>
                
                <li>
                <Link to={'/favourites'}> Favourites </Link>
                </li>
            </ul>    
        </nav> 
        <hr />

        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/about'} element={<About/>} />
          <Route path={'/products'}>
              <Route index element={<Products/>}/>
              <Route path={':id'} element={<SingleProduct/>} />
          </Route>
          <Route path={'/favourites'} element={<Favourite/>} />
      </Routes>

    </div>
  )
}
