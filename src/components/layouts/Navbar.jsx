// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart, Menu, X } from "lucide-react";
// import { assets } from "../../assets/assets";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white fixed top-0 left-0 w-full z-50">
//       {/* Outer wrapper */}
//       <div className="w-full flex justify-center">
//         <div className="max-w-[1440px] w-full flex flex-col">
//           {/* Main Nav Row */}
//           <div className="flex justify-between items-center px-6 lg:px-20 py-4 md:py-6 relative">
//             <div className="flex items-center gap-4">
//               {/* Mobile menu toggle */}
//               <button
//                 className="md:hidden text-white focus:outline-none"
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 {isOpen ? <X size={26} /> : <Menu size={26} />}
//               </button>

//               {/* Logo */}
//               <Link to="/" onClick={() => setIsOpen(false)}>
//                 <img
//                   src={assets.logo}
//                   alt="Logo"
//                   className="w-28 sm:w-32 md:w-36 object-contain"
//                 />
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <ul className="hidden md:flex gap-8 text-sm tracking-[2px] uppercase">
//               <li>
//                 <Link to="/" className="hover:text-[#D87D4A] transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/headphones"
//                   className="hover:text-[#D87D4A] transition-colors"
//                 >
//                   Headphones
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/speakers"
//                   className="hover:text-[#D87D4A] transition-colors"
//                 >
//                   Speakers
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/earphones"
//                   className="hover:text-[#D87D4A] transition-colors"
//                 >
//                   Earphones
//                 </Link>
//               </li>
//             </ul>

//             {/* Cart Icon */}
//             <button className="relative">
//               <ShoppingCart className="text-white hover:text-[#D87D4A] transition-colors" />
//             </button>

//             {/* --- BORDER LINE --- */}
//             <div className="absolute bottom-0 left-6 right-6 lg:left-20 lg:right-20 border-b border-gray-700"></div>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={`md:hidden bg-[#191919] border-t border-gray-700 transition-all duration-300 overflow-hidden ${
//               isOpen ? "max-h-64 py-6" : "max-h-0 py-0"
//             }`}
//           >
//             <div className="flex flex-col items-center space-y-4 px-6">
//               <Link
//                 to="/"
//                 className="hover:text-[#D87D4A] uppercase tracking-widest"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/headphones"
//                 className="hover:text-[#D87D4A] uppercase tracking-widest"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Headphones
//               </Link>
//               <Link
//                 to="/speakers"
//                 className="hover:text-[#D87D4A] uppercase tracking-widest"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Speakers
//               </Link>
//               <Link
//                 to="/earphones"
//                 className="hover:text-[#D87D4A] uppercase tracking-widest"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Earphones
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { assets } from "../../assets/assets";
import { useCart } from "../../context/CartContext"; // ✅ import cart context

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart(); // ✅ get cart items

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50">
      {/* Outer wrapper */}
      <div className="w-full flex justify-center">
        <div className="max-w-[1440px] w-full flex flex-col">
          {/* Main Nav Row */}
          <div className="flex justify-between items-center px-6 lg:px-20 py-4 md:py-6 relative">
            <div className="flex items-center gap-4">
              {/* Mobile menu toggle */}
              <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>

              {/* Logo */}
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img
                  src={assets.logo}
                  alt="Logo"
                  className="w-28 sm:w-32 md:w-36 object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-8 text-sm tracking-[2px] uppercase">
              <li>
                <Link to="/" className="hover:text-[#D87D4A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/headphones"
                  className="hover:text-[#D87D4A] transition-colors"
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  to="/speakers"
                  className="hover:text-[#D87D4A] transition-colors"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  to="/earphones"
                  className="hover:text-[#D87D4A] transition-colors"
                >
                  Earphones
                </Link>
              </li>
            </ul>

            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-white hover:text-[#D87D4A] transition-colors" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* --- BORDER LINE --- */}
            <div className="absolute bottom-0 left-6 right-6 lg:left-20 lg:right-20 border-b border-gray-700"></div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden bg-[#191919] border-t border-gray-700 transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-64 py-6" : "max-h-0 py-0"
            }`}
          >
            <div className="flex flex-col items-center space-y-4 px-6">
              <Link
                to="/"
                className="hover:text-[#D87D4A] uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/headphones"
                className="hover:text-[#D87D4A] uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Headphones
              </Link>
              <Link
                to="/speakers"
                className="hover:text-[#D87D4A] uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Speakers
              </Link>
              <Link
                to="/earphones"
                className="hover:text-[#D87D4A] uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Earphones
              </Link>
              <Link
                to="/cart"
                className="hover:text-[#D87D4A] uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
