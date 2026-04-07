import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <>
      <div className='flex relative h-24 justify-between items-center shadow-lg bg-pink-300 text-white px-7 py-9'>
        <h1 className='font-bold'>THE ICECREAM SHOP</h1>
        <ul className='flex space-x-10'>
          <li className='transition-all hover:border-b-4 border-yellow-200 hover:text-pink-600'>All</li>
          <li className='transition-all hover:border-b-4 border-yellow-200 hover:text-pink-600'>Seasonal</li>
          <li className='transition-all hover:border-b-4 border-yellow-200 hover:text-pink-600'>Popsicles</li>
          <li className='transition-all hover:border-b-4 border-yellow-200 hover:text-pink-600'>Classics</li>
        </ul>
        <ul className='flex space-x-3 items-center'>
          <li className='relative'>
            <button>
              <ShoppingCartIcon />
              {/* 👇 Badge showing cart count */}
              {cartCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-yellow-300 text-pink-800 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                  {cartCount}
                </span>
              )}
            </button>
          </li>
          <li><Link to="/Login">LOGIN</Link></li>
          <li><Link to="/Signup">SIGNUP</Link></li>
        </ul>
      </div>
      <hr className="absolute w-72 left-1/2 transform -translate-x-1/2 top-20 border-1 border-pink-600" />
    </>
  )
}

export default Navbar