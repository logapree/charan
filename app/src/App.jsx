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
import MentorStartup from './Components/Admin/MentorStartup'
import WorkShopList from './Components/Admin/WorkShopList'
import WorkOnStartup from './Components/Admin/WorkOnStartup'
import StudentApplication from './Components/Admin/StudentApplication'
import StudentList from './Components/Admin/StudentList'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NestPage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/MentorHome' element={<MentorHome />} />
        <Route path='/StartUpHome' element={<StartUpHome />} />
        <Route path='/StudentHome' element={<StudentHome />} />
        <Route path='/EditProfile' element={<EditProfile />} />
        <Route path='/AdminHome' element={<AdminHome />} />
        <Route path='/MentorStartup' element={<MentorStartup />} />
        <Route path='/WorkShopList' element={<WorkShopList />} />
        <Route path='/WorkOnStartup' element={<WorkOnStartup />} />
        <Route path='/StudentApplication' element={<StudentApplication />} />
        <Route path='/StudentList' element={<StudentList />} />
      </Routes>
    </Router>
  )
}

export default App
