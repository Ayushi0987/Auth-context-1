import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import PrivateRoutes from './PrivateRoutes'

export default function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path='/Login' element={<div>Login</div>} />
      <Route element={<PrivateRoutes/>}>
          <Route path='/home' element={<div>Home</div>} />
          <Route path='/products' element={<div>Products</div>} />
      </Route>
    </Routes>
  </AuthProvider>
  )
}
