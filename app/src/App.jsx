import { useState } from 'react'
import './App.css'
import NestPage from './Pages/NestPage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AdminHome from './Components/Admin/AdminHome'
import MentorHome from './Components/Mentor/MentorHome'
import StartUpHome from './Components/Startup/StartUpHome'
import StudentHome from './Components/Student/StudentHome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EditProfile from './Components/Common/EditProfile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NestPage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/AdminHome' element={<AdminHome />} />
        <Route path='/MentorHome' element={<MentorHome />} />
        <Route path='/StartUpHome' element={<StartUpHome />} />
        <Route path='/StudentHome' element={<StudentHome />} />
        <Route path='/EditProfile' element={<EditProfile />} />
      </Routes>
    </Router>
  )
}

export default App
