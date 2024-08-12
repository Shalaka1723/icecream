import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import {signupApi} from '../api/api'                      
export default function Singup() {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

let handleSubmit=()=>{
  signupApi(email,password),
  console.log('clicked')
} 


  return (
    <>
      <div className="flex justify-center items-center h-screen bg-blue-400">
        <div className=" w-96 p-6 bg-white rounded-lg">
          <h1 className="font-semibold text-center text-3xl">Sign Up</h1>
          <hr className="mt-3" />
          <div className="mt-3 items-start">
            <label htmlFor="Username" className=" flex justify-self-start text-base mb-2  ">Username</label>
            <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}} id="Username" className="rounded-lg border w-full text-base px-2 py-2 focus:border-gray-600" placeholder='Enter Your Name...'/>
          </div>
          <div className="mt-3">
            <label htmlFor="Password" className="flex justify-self-start text-base mb-2">Password</label>
            <input type="Password" value={password} onChange={(event)=>{setPassword(event.target.value)}} id="Password" className="rounded-lg border w-full text-base px-2 py-2 focus:border-gray-600" placeholder='Enter Your Password'/>
          </div>
          <div className="mt-5">
            <button type="submit" onClick={()=>{handleSubmit()}} className=" border-2 border-pink-600 bg-pink-600 text-white py-1 w-full rounded-lg">Sign Up</button>
            <hr className="mt-3" />
          </div>
          <div className='flex justify-between mt-1 text-center text-blue-800 '>
              <p>Already have an account? </p>
              <Link to={"/LogIn"} className='pl-1 '>LOGIN </Link>
          </div>
          <div className='flex justify-center gap-3 mt-2'>
          <GoogleIcon  sx={{ color: pink[600] }} />
          <FacebookIcon  sx={{ color: pink[600] }}/>
          <LinkedInIcon  sx={{ color: pink[600] }}/>
          </div>

        </div>
      </div>
    </>
  )
}
