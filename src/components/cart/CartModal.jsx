import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext"; // ✅ fixed import
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartModal() {
  const { isCartOpen, closeCart, cartItems, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* === OVERLAY === */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={closeCart} // close modal when background clicked
          />

          {/* === MODAL BOX === */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex justify-center items-start pt-24 z-50"
          >
            <div
              className="bg-white w-[90%] max-w-sm rounded-xl p-6 shadow-lg relative"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold uppercase tracking-[1px]">
                  Cart ({cartItems.length})
                </h3>
                <button
                  onClick={clearCart}
                  className="text-gray-500 text-sm hover:text-[#D87D4A] transition"
                >
                  Remove all
                </button>
              </div>

              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  Your cart is empty.
                </p>
              ) : (
                cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between mb-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">${item.price}</p>
                      </div>
                    </div>

                    <div className="flex items-center bg-gray-100 rounded-md">
                      <button className="px-2 text-gray-500 hover:text-black">
                        -
                      </button>
                      <span className="px-2 font-medium">1</span>
                      <button className="px-2 text-gray-500 hover:text-black">
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}

              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600 uppercase text-sm tracking-[1px]">
                  Total
                </p>
                <p className="text-lg font-bold">${total}</p>
              </div>
              
              <Link to="/checkout">
                <button className="w-full bg-[#D87D4A] hover:bg-[#fbaf85] text-white py-3 rounded-md font-medium transition">
                  Checkout
                </button>
              </Link>

              <button
                onClick={closeCart}
                className="absolute top-4 right-4 text-gray-400 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
