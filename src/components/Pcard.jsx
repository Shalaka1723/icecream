import React from 'react'
import i from "../assets/images/i.jpeg";

const Pcard = () => {
  return (
    <>
    <div className='border rounded-md m-8 p-5 shadow-lg bg-purple-100 w-fit h-fit '>
      <h1 className='py-3 font-medium text-purple-900'>Current Season Specials</h1>
      <div className='grid grid-rows-2 grid-cols-2 gap-5 '>
        <div>
          <h3 className=' bg-pink-200 w-32 text-sm text-center text-purple-900 opacity-80 absolute'>Mango</h3>
        <img className='w-32' src={i}/>
        </div>
        <div>
          <h3 className=' bg-pink-200 w-32 text-sm text-center text-purple-900 opacity-80 absolute'>Mango</h3>
        <img className='w-32' src={i}/>
        </div>
        <div>
          <h3 className=' bg-pink-200 w-32 text-sm text-center text-purple-900 opacity-80 absolute'>Mango</h3>
        <img className='w-32' src={i}/>
        </div>
        <div>
          <h3 className=' bg-pink-200 w-32 text-sm text-center text-purple-900 opacity-80 absolute'>Mango</h3>
        <img className='w-32' src={i}/>
        </div>




      </div>
    </div>

    </>
  )
}

export default Pcard