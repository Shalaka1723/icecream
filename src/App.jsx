import React from 'react'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Singup from './components/Signup'

import Exp from './components/Exp'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />

          <Route path="/Signup" element={<Singup/>} />
          <Route path="/Exp" element={<Exp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App