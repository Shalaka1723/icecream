import React from 'react'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import Home from './components/main/Home'
import Login from './components/common/Login'
import Singup from './components/common/Signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />

          <Route path="/Signup" element={<Singup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App