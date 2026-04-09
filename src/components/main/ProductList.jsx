import { useState } from 'react'
import { products, categories } from '../../assets/data/products.js'
import ProductCard from './ProductCard'


function ProductList({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className="px-8 py-6">

      {/* Category Filter Tabs */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-colors
              ${selectedCategory === cat
                ? 'bg-pink-400 text-white'
                : 'bg-white text-gray-500 border border-gray-200 hover:border-pink-300'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}  
          />
      </div>

    </div>
  )
}

export default ProductList