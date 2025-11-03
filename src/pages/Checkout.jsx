import React, { useState } from "react";
import Navbar from "../components/layouts/NavBar";
import { Footer } from "../components/layouts/Footer";
import { useCart } from "../context/CartContext";
import CheckoutSuccessModal from "../components/checkout/CheckoutSuccessModal"; // ✅ import modal

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("e-Money");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false); // ✅ modal state
  const { cartItems } = useCart();

  // ✅ Calculate totals
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const shipping = cartItems.length > 0 ? 50 : 0;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping + vat;

  return (
    <>
      <Navbar />
      <div className="bg-[#F1F1F1] min-h-screen py-10 px-4">
        <div className="max-w-[1200px] mx-auto">
          <button
            onClick={() => window.history.back()}
            className="text-gray-500 text-sm mb-6 hover:text-[#D87D4A] transition"
          >
            Go Back
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* === LEFT FORM SECTION === */}
            <div className="bg-white rounded-lg p-8 lg:col-span-2 shadow-sm">
              <h2 className="text-2xl font-bold uppercase mb-8">Checkout</h2>

              {/* === BILLING DETAILS === */}
              <section className="mb-8">
                <h3 className="text-[#D87D4A] text-sm tracking-[1.5px] font-bold uppercase mb-4">
                  Billing Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Alexei Ward"
                      className="w-full border rounded-md px-4 py-3 text-sm focus:outline-[#D87D4A]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="alexei@mail.com"
                      className="w-full border rounded-md px-4 py-3 text-sm focus:outline-[#D87D4A]"
                    />
                  </div>
                  <div className="md:col-span-2 md:max-w-[50%]">
                    <label className="block text-sm font-semibold mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+1 202-555-0136"
                      className="w-full border rounded-md px-4 py-3 text-sm focus:outline-[#D87D4A]"
                    />
                  </div>
                </div>
              </section>

              {/* === SHIPPING INFO === */}
              <section className="mb-8">
                <h3 className="text-[#D87D4A] text-sm tracking-[1.5px] font-bold uppercase mb-4">
                  Shipping Info
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="1137 Williams Avenue"
                      className="w-full border rounded-md px-4 py-3 text-sm focus:outline-[#D87D4A]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      placeholder="10001"
                      className="w-full border rounded-md px-4 py-3 text-sm focus:outline-[#D87D4A]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="New York"
                      className="w-full border rounded-md px-4 py-3 text-sm focus:outline-[#D87D4A]"
                    />
                  </div>
                  <div className="md:col-span-2 md:max-w-[50%]">
                    <label className="block text-sm font-semibold mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="United States"
                      className="w-full border rounded-md px-4 py-3 text-sm focus:outline-[#D87D4A]"
                    />
                  </div>
                </div>
              </section>

              {/* === PAYMENT DETAILS === */}
              <section>
                <h3 className="text-[#D87D4A] text-sm tracking-[1.5px] font-bold uppercase mb-4">
                  Payment Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <p className="font-semibold text-sm">Payment Method</p>

                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 border rounded-md px-4 py-3 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "e-Money"}
                        onChange={() => setPaymentMethod("e-Money")}
                        className="accent-[#D87D4A]"
                      />
                      e-Money
                    </label>

                    <label className="flex items-center gap-3 border rounded-md px-4 py-3 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "Cash on Delivery"}
                        onChange={() => setPaymentMethod("Cash on Delivery")}
                        className="accent-[#D87D4A]"
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                {paymentMethod === "e-Money" && (
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        e-Money Number
                      </label>
                      <input
                        type="text"
                        placeholder="238521993"
                        className="w-full border rounded-md px-4 py-3 text-sm focus:outline-[#D87D4A]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        e-Money PIN
                      </label>
                      <input
                        type="password"
                        placeholder="6891"
                        className="w-full border rounded-md px-4 py-3 text-sm focus:outline-[#D87D4A]"
                      />
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* === SUMMARY CARD === */}
            <div className="bg-white rounded-lg p-8 shadow-sm h-fit">
              <h3 className="text-lg font-bold uppercase mb-6">Summary</h3>

              <div className="flex flex-col gap-4 mb-6">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  cartItems.map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-gray-500 text-sm">
                            ${item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">
                        x{item.quantity || 1}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <>
                  <div className="flex justify-between text-sm mb-2">
                    <p className="text-gray-500 uppercase">Total</p>
                    <p className="font-bold">${total.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <p className="text-gray-500 uppercase">Shipping</p>
                    <p className="font-bold">${shipping}</p>
                  </div>
                  <div className="flex justify-between text-sm mb-6">
                    <p className="text-gray-500 uppercase">VAT (Included)</p>
                    <p className="font-bold">${vat.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between text-sm mb-8">
                    <p className="text-gray-500 uppercase">Grand Total</p>
                    <p className="font-bold text-[#D87D4A]">
                      ${grandTotal.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccessOpen(true)} // ✅ open modal
                    className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold w-full py-4 rounded-md uppercase text-sm transition"
                  >
                    Continue & Pay
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Success Modal */}
      <CheckoutSuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      />

      <Footer />
    </>
  );
}



