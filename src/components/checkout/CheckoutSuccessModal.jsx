// src/components/checkout/CheckoutSuccessModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";

export default function CheckoutSuccessModal({ isOpen, onClose }) {
  const { cartItems, clearCart } = useCart();

  const firstItem = cartItems[0];
  const otherCount = cartItems.length - 1;
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const shipping = cartItems.length > 0 ? 50 : 0;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping + vat;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex justify-center items-center bg-black/40 z-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-lg p-8 max-w-md w-[90%] shadow-xl text-center relative"
          >
            {/* Success Icon */}
            <div className="w-12 h-12 bg-[#D87D4A] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">✓</span>
            </div>

            {/* Text */}
            <h2 className="text-2xl font-bold uppercase mb-2 leading-tight">
              Thank You<br />For Your Order
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              You will receive an email confirmation shortly.
            </p>

            {/* Item Summary */}
            <div className="bg-[#F1F1F1] rounded-lg overflow-hidden mb-6 text-left">
              {firstItem && (
                <div className="p-4 border-b border-gray-300 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src={firstItem.image}
                      alt={firstItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{firstItem.name}</p>
                    <p className="text-gray-500 text-sm">
                      ${firstItem.price.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm">
                    x{firstItem.quantity || 1}
                  </span>
                </div>
              )}
              {otherCount > 0 && (
                <p className="text-center text-gray-500 text-sm py-3">
                  and {otherCount} other item{otherCount > 1 ? "s" : ""}
                </p>
              )}
            </div>

            {/* Grand Total */}
            <div className="bg-black text-white p-4 rounded-lg flex justify-between mb-6">
              <span className="uppercase text-sm text-gray-400">Grand Total</span>
              <span className="font-bold">${grandTotal.toLocaleString()}</span>
            </div>

            {/* Button */}
            <button
              onClick={() => {
                clearCart();
                onClose();
                window.location.href = "/";
              }}
              className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold w-full py-3 rounded-md uppercase text-sm transition"
            >
              Back to Home
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

