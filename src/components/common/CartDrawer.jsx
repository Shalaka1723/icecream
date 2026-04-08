// src/components/common/CartDrawer.jsx

function CartDrawer({ cart, isOpen, onClose }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="font-bold text-lg text-pink-500">Your Cart</h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="p-4 flex flex-col gap-4 overflow-y-auto">
        {/* TODO: if cart is empty, show a message */}
        {/* TODO: map over cart items and show name, quantity, price */}
        {/* TODO: show a total at the bottom */}
      </div>

    </div>
  )
}

export default CartDrawer