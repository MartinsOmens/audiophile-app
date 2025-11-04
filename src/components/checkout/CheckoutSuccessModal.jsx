import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useCart } from "../../context/CartContext";

export default function CheckoutSuccessModal({
  isOpen,
  onClose,
  customerInfo,
}) {
  const { cartItems, clearCart } = useCart();

  const user = customerInfo || { name: "Customer" };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const shipping = cartItems.length > 0 ? 50 : 0;
  const vat = Math.round(subtotal * 0.2);
  const grandTotal = subtotal + shipping + vat;

  useEffect(() => {
    if (!isOpen || cartItems.length === 0) return;
    console.log("✅ Order Details:", {
      user,
      cartItems,
      subtotal,
      shipping,
      vat,
      grandTotal,
    });
  }, [isOpen, cartItems]);

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
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 max-w-md w-[90%] shadow-2xl text-center relative"
          >
            {/* ✅ Success Checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="w-14 h-14 bg-[#D87D4A] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-white text-3xl font-bold">✓</span>
            </motion.div>

            {/* ✅ Title */}
            <motion.h2
              className="text-2xl font-bold uppercase mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank You, {user.name}!
            </motion.h2>

            <p className="text-gray-500 text-sm mb-6">
              Your order has been successfully placed. You’ll receive a
              confirmation email shortly.
            </p>

            {/* ✅ All Cart Items */}
            <motion.div
              className="bg-[#F1F1F1] rounded-lg overflow-hidden mb-6 text-left max-h-60 overflow-y-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border-b border-gray-300 flex items-center gap-4"
                >
                  <div className="w-14 h-14 bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-gray-500 text-sm">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-gray-500 text-sm text-right">
                    ×{item.quantity || 1}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* ✅ Grand Total */}
            <motion.div
              className="bg-black text-white p-4 rounded-lg flex justify-between mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="uppercase text-sm text-gray-400">
                Grand Total
              </span>
              <span className="font-bold">${grandTotal.toLocaleString()}</span>
            </motion.div>

            {/* ✅ Back button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                onClose();
                clearCart(); // ✅ clear only after closing modal
                window.location.href = "/";
              }}
              className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold w-full py-3 rounded-md uppercase text-sm transition"
            >
              Back to Home
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
