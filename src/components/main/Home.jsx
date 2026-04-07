import Navbar from '../common/Navbar'
import ProductList from './ProductList'

function Home({ cart, onAddToCart }) {
  return (
    <>
    <div className="min-h-screen bg-pink-50">
      <Navbar cartCount={cart.length} />
      <ProductList onAddToCart={onAddToCart} />
    </div>
    </>
  )
}

export default Home
