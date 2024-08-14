import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Checkbox, IconButton } from '@mui/material';
import { pink, purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';                 
export default function Singup() {



  return (
    <>
      <div className='bg-pink-200 flex justify-center items-center h-screen' >
        <div className='w-96 p-6 bg-white rounded-lg h-100 shadow-md '>
        <div className=' text-lg text-pink-500 font-medium text-center my-2'>
          THE ICECREAM SHOP
        </div>
        <hr/>
        <div className=' drop-shadow-md text-xl text-center text-[#ae6ac2] font-medium  mb-4 '>
          SIGN UP
        </div>
        <div className='mt-3'>
            <label htmlFor="Email" className='block mb-1 ' > Email </label>
            <input type="email" id="email" className='rounded border-2 w-full px-2 py-1 focus:border-gray-600' />
        </div>

        <div className='mt-3'>
            <label htmlFor="Password" className='block mb-1 ' > Password </label>
            <input type="password" id="password" className='rounded border-2 w-full px-2 py-1 focus:border-gray-600' />
        </div>


        <div className='mt-5'>
          
            <Link to={"/"} className='drop-shadow-lg p-2 bg-[#780187] text-white font-semibold w-full rounded-xl border-pink-700'>
                SIGN UP
            </Link>
        </div>
        <div className='flex justify-between mt-8 text-sm text-gray-400'>
 
        <div className=''>
             Already have an account? 
             <Link to={"/Login"} className='pl-1 underline'> 
            LOGIN
            </Link>
        </div>
        </div>
        <hr className='mt-2 mb-4 border-1'></hr>

        <div className=' flex justify-center gap-3 '>
          <GoogleIcon  sx={{color: '#ae6ac2'}}/>
          <FacebookIcon sx={{color: '#ae6ac2'}}/>
          <LinkedInIcon sx={{color: '#ae6ac2'}}/>
        </div>
        </div>
    </div>

    </>
  )
}
