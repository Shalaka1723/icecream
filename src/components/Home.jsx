
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Pcard from './Pcard'

import Product from './Product'


function Home() {


  return (
    <>
    <div>
      <Navbar/>
     
      <div  className='grid grid-cols-2 grid-rows-2 '>
      <Pcard/>
      <Pcard/>
      <Pcard/>

  
        

      </div>
    </div>
    </>
  )
}

export default Home
