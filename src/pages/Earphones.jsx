// import React from "react";
// import Navbar from "../components/layouts/NavBar";
// import Product from "../components/layouts/Product";
// import Customer from "../components/layouts/Customer";
// import { Footer } from "../components/layouts/Footer";
// import { assets } from "../assets/assets";
// import { Link } from "react-router-dom";

// export default function Earphones() {
//   return (
//     <>
//       <Navbar />

//       {/* === HERO SECTION === */}
//       <section className="relative bg-black text-white flex items-center justify-center min-h-[40vh] md:min-h-[50vh]">
//         <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 flex justify-center items-center">
//           <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[8px] uppercase text-center">
//             earphones
//           </h2>
//         </div>
//       </section>

//       {/* === FEATURED EARPHONE 1 === */}
//       <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* === IMAGE === */}
//           <div className="flex justify-center items-center order-1 lg:order-1">
//             <div className="relative bg-[#F1F1F1] rounded-xl flex justify-center items-center p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-md md:max-w-lg lg:max-w-xl">
//               <img
//                 src={assets.firstEarphone}
//                 alt="XX99 Mark II Headphones"
//                 className="w-[55%] sm:w-[50%] md:w-[52%] lg:w-[55%] h-auto object-contain"
//               />
//             </div>
//           </div>

//           {/* === TEXT CONTENT === */}
//           <div className="text-center lg:text-left order-2 lg:order-2">
//             <p className="text-[#D87D4A] text-sm sm:text-base font-semibold tracking-[3px] uppercase mb-3">
//               New Product
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[1.43px] mb-6 leading-[1.2]">
//               YX1 WIRELESS
//               <br /> EARPHONES
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base leading-[25px] max-w-lg mx-auto lg:mx-0 mb-8">
//               Tailor your listening experience with bespoke dynamic drivers from
//               the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
//               sound even in noisy environments with its active noise
//               cancellation feature.
//             </p>
//             <Link to="/product">
//               <button className="bg-[#D87D4A] hover:bg-[#FBAF85] transition text-white px-8 py-4 uppercase text-sm tracking-wider font-semibold">
//                 See Product
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* === PRODUCT SECTION === */}
//       <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-16 my-16 md:my-20 lg:my-24">
//         <Product />
//       </section>

//       {/* === CUSTOMER SECTION === */}
//       <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-16 my-16 md:my-20 lg:my-24">
//         <Customer />
//       </section>

//       {/* === FOOTER === */}
//       <Footer />
//     </>
//   );
// }


import React from "react";
import Navbar from "../components/layouts/NavBar";
import Product from "../components/layouts/Product";
import Customer from "../components/layouts/Customer";
import { Footer } from "../components/layouts/Footer";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function Earphones() {
  return (
    <>
      <Navbar />

      {/* === HERO SECTION === */}
      <section className="relative bg-black text-white flex items-center justify-center min-h-[40vh] md:min-h-[50vh]">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 flex justify-center items-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[8px] uppercase text-center">
            Earphones
          </h2>
        </div>
      </section>

      {/* === FEATURED EARPHONE 1 === */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          
          {/* === IMAGE === */}
          <div className="flex justify-center items-center order-1 lg:order-1">
            <div className="relative bg-[#F1F1F1] rounded-xl flex justify-center items-center p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={assets.firstEarphone}
                alt="YX1 Wireless Earphones"
                className="w-[60%] sm:w-[55%] md:w-[52%] lg:w-[50%] h-auto object-contain"
              />
            </div>
          </div>

          {/* === TEXT CONTENT === */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <p className="text-[#D87D4A] text-sm sm:text-base font-semibold tracking-[3px] uppercase mb-3">
              New Product
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[1.43px] mb-6 leading-tight">
              YX1 Wireless
              <br /> Earphones
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-[25px] max-w-md sm:max-w-lg mx-auto lg:mx-0 mb-8">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <Link to="/product">
              <button className="bg-[#D87D4A] hover:bg-[#FBAF85] transition text-white px-8 py-4 uppercase text-sm tracking-wider font-semibold">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* === PRODUCT SECTION === */}
      <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-16 my-16 md:my-20 lg:my-24">
        <Product />
      </section>

      {/* === CUSTOMER SECTION === */}
      <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-16 my-16 md:my-20 lg:my-24">
        <Customer />
      </section>

      {/* === FOOTER === */}
      <Footer />
    </>
  );
}
