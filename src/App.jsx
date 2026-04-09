import React, { useState } from 'react'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import Home from './components/main/Home'
import Login from './components/common/Login'
import Signup from './components/common/Signup'

const App = () => {
  // 👇 Cart lives here — the top of the tree
  const [cart, setCart] = useState([])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App