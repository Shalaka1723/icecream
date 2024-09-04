import React from 'react'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Singup from './components/Signup'
import New from './components/New'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/new" element={<New/>} />
          <Route path="/Signup" element={<Singup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App