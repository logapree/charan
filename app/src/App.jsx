import { useState } from 'react'
import './App.css'
import NestPage from './Pages/NestPage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AdminHome from './Components/Admin/AdminHome'

function App() {

  return (
    <>
      <Route path='/' element={<NestPage />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/AdminHome' element={<AdminHome />} />

    </>
  )
}

export default App
