import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import PrivateRoutes from './PrivateRoutes'
import Login from './Login'
import Home from './Home'

export default function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path='/Login' element={<Login />} />
      <Route element={<PrivateRoutes/>}>
          <Route path='/home' element={<Home/>} />
          <Route path='/products' element={<div>Products</div>} />
      </Route>
    </Routes>
  </AuthProvider>
  )
}
