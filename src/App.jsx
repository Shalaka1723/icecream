import React, { useState } from 'react'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import Home from './components/main/Home'
import Login from './components/common/Login'
import Signup from './components/common/Signup'

const App = () => {
  // 👇 Cart lives here — the top of the tree
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        // If already in cart, increase quantity
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      // Otherwise add new item with quantity 1
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home cart={cart} onAddToCart={handleAddToCart} />} />
          <Route path="/home" element={<Home cart={cart} onAddToCart={handleAddToCart} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App