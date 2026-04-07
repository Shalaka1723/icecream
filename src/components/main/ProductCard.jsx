function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      {/* Details */}
      <div className="p-4">
        <span className="text-xs text-pink-400 uppercase tracking-wide font-semibold">
          {product.category}
        </span>
        <h3 className="text-gray-800 font-bold text-lg mt-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{product.description}</p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-purple-700 font-bold text-lg">₹{product.price}</span>

          {/* 👇 This button calls onAddToCart — passed from parent */}
          <button
            onClick={() => onAddToCart(product)}
            className="bg-pink-400 hover:bg-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard