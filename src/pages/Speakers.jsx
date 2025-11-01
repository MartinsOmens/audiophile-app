import React from "react";
import Navbar from "../components/layouts/NavBar";
import Product from "../components/layouts/Product";
import Customer from "../components/layouts/Customer";
import { Footer } from "../components/layouts/Footer";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function Speakers() {
  return (
    <>
      <Navbar />

      {/* === HERO SECTION === */}
      <section className="relative bg-black text-white flex items-center justify-center min-h-[40vh] md:min-h-[50vh]">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 flex justify-center items-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[8px] uppercase text-center">
            SPEAKERS
          </h2>
        </div>
      </section>

      {/* === FEATURED SPEAKER 1 === */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* === IMAGE === */}
          <div className="flex justify-center items-center order-1 lg:order-1">
            <div className="relative bg-[#F1F1F1] rounded-xl flex justify-center items-center p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-md md:max-w-lg lg:max-w-xl">
              <img
                src={assets.firstSpeaker}
                alt="XX99 Mark II Headphones"
                className="w-[55%] sm:w-[50%] md:w-[52%] lg:w-[55%] h-auto object-contain"
              />
            </div>
          </div>

          {/* === TEXT CONTENT === */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <p className="text-[#D87D4A] text-sm sm:text-base font-semibold tracking-[3px] uppercase mb-3">
              New Product
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[1.43px] mb-6 leading-[1.2]">
              ZX9 <br /> Speaker
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-[25px] max-w-lg mx-auto lg:mx-0 mb-8">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound. Experience the difference with ZX9, the
              best-in-class speaker for home entertainment.
            </p>
            <Link to="/product">
              <button className="bg-[#D87D4A] hover:bg-[#FBAF85] transition text-white px-8 py-4 uppercase text-sm tracking-wider font-semibold">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* === FEATURED SPEAKER 2 === */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* === TEXT CONTENT === */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[1.43px] mb-6 leading-[1.2]">
              ZX7 <br /> Speaker
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-[25px] max-w-lg mx-auto lg:mx-0 mb-8">
              Stream high-quality sound wirelessly with minimal loss. The ZX7
              speaker uses high-end audio components to provide an exceptional
              experience for your home setup.
            </p>
            <Link to="/product">
              <button className="bg-[#D87D4A] hover:bg-[#FBAF85] transition text-white px-8 py-4 uppercase text-sm tracking-wider font-semibold">
                See Product
              </button>
            </Link>
          </div>

          {/* === IMAGE === */}
          <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <div className="relative bg-[#F1F1F1] rounded-xl flex justify-center items-center p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-md md:max-w-lg lg:max-w-xl">
              <img
                src={assets.secondSpeaker}
                alt="ZX7 Speaker"
                className="w-[55%] sm:w-[50%] md:w-[52%] lg:w-[55%] h-auto object-contain"
              />
            </div>
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
