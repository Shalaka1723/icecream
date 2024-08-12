import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center bg-pink-300 text-white px-7 py-9 '>
        <h1 className=' font-bold'>THE ICECREAM SHOP</h1>
        <ul className='flex space-x-10'>
            <li className=' transition-all hover:border-b-4 border-yellow-200 hover:text-pink-600'>All</li>
            <li className=' transition-all hover:border-b-4 border-yellow-200 hover:text-pink-600'>Seasonal</li>
            <li className=' transition-all hover:border-b-4 border-yellow-200 hover:text-pink-600'>Classics</li>

        </ul>
        <div className='space-x-3'>
        <ShoppingCartIcon/>
        <button className=''>LogIn</button>
        <button className=''>Sign Up</button>
        </div>


    </div>
        <hr className="absolute w-72 left-1/2 transform -translate-x-1/2 top-20 border-1 border-pink-600 " />
    </>
  )
}

export default Navbar