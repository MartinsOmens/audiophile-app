import { useCart } from "../../context/CartContext";
import { Link, Links } from "react-router-dom";
import Navbar from "../layouts/NavBar";
import { Footer } from "../layouts/Footer";

export default function CartPage() {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      <Navbar />

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20">
        {/* === Back Link === */}
        <Link
          to="/"
          className="text-gray-500 hover:text-[#D87D4A] text-sm font-medium transition-colors duration-300"
        >
          Go Back
        </Link>

        {/* === Page Title === */}
        <h2 className="text-2xl md:text-3xl font-bold uppercase mt-6 mb-10 tracking-[1px]">
          Shopping Cart
        </h2>

        {/* === Empty Cart === */}
        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 text-lg">Your cart is empty.</p>
            <Link
              to="/"
              className="inline-block mt-6 bg-[#D87D4A] text-white px-6 py-3 rounded-md hover:bg-[#fbaf85] transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* === Cart Items List === */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-50 rounded-xl p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-semibold">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center bg-gray-200 rounded-md self-end sm:self-auto">
                    <button className="px-3 text-gray-600 hover:text-black">
                      -
                    </button>
                    <span className="px-3 font-medium">
                      {item.quantity || 1}
                    </span>
                    <button className="px-3 text-gray-600 hover:text-black">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* === Summary === */}
            <div className="bg-white p-6 rounded-xl shadow-md h-fit">
              <h3 className="text-lg font-bold uppercase mb-6 tracking-[1px]">
                Summary
              </h3>

              <div className="flex justify-between mb-4">
                <span className="text-gray-600 uppercase text-sm">Total</span>
                <span className="text-lg font-semibold">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link to="/checkout">
                <button className="w-full bg-[#D87D4A] hover:bg-[#fbaf85] text-white py-3 rounded-md font-medium transition">
                  Checkout
                </button>
              </Link>

              <button
                onClick={clearCart}
                className="w-full mt-4 text-gray-500 hover:text-red-500 transition text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
