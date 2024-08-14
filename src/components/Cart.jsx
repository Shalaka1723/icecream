import React, { useState } from 'react'
import i from "../assets/images/i.jpeg"
import { DeleteForever } from '@mui/icons-material';
import { purple } from '@mui/material/colors';


const Cart = () => {



    return (
    <>
    <div className='absolute text-slate-800 shadow-md bg-white w-52 h-52 p-3 right-10 z-50 top-20 '>
        <h1>Cart</h1>
        <div  className='flex justify-between items-center  border border-gray-100 rounded-sm p-1 w-full mx-2 h-10'>
        <img className='h-8 w-auto' src={i}/>  
        <h1 className=' text-xs text-black'>Product Name Qan x1 $21 </h1>  
        <DeleteForever sx={{ color: 'black' }} />
        </div>
    <button className=' bg-pink-600 w-full rounded-lg p-1 text-sm'>Check Out</button>

    </div>
    </>
  )
}

export default Cart