import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

export default function ProductShowcase() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-16 lg:space-y-24">
      {/* === ZX9 SPEAKER - HERO === */}

      <div className="relative bg-[#D87D4A] rounded-2xl overflow-hidden flex items-end mb-10">
        {/* Decorative Circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -translate-y-6 sm:-translate-y-8 md:-translate-y-10">
          <div className="w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px] lg:w-[600px] lg:h-[600px] rounded-full border-[2px] border-white/20"></div>
          <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border-[2px] border-white/30"></div>
          <div className="absolute w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] rounded-full border-[2px] border-white/40"></div>
        </div>

        {/* Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20 p-6 sm:p-10 md:p-12 w-full">
          {/* Image */}
          <div className="flex justify-center lg:justify-end items-end relative z-10">
            <div className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[75%] max-w-[420px]">
              <img
                src={assets.homeBigSpeaker}
                alt="ZX9 Speaker"
                className="w-full h-auto object-contain translate-y-3 sm:translate-y-6 lg:translate-y-10"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start lg:mb-20 sm:mt-10 px-2 sm:px-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-4 sm:mb-6">
              ZX9 <br /> Speaker
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-xs sm:max-w-md mx-auto lg:mx-0 leading-relaxed">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/product">
              <button className="mt-6 sm:mt-8 bg-[#000000] hover:bg-[#4C4C4C] transition text-white px-6 sm:px-8 py-3 sm:py-4 uppercase text-sm tracking-wider">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* === ZX7 SPEAKER === */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center rounded-2xl overflow-hidden 
             px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-24 
             bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.homeBigSpeakerB})`,
        }}
      >
        {/* Text */}
        <div className="order-1 lg:order-2 flex justify-start text-left text-black">
          <div className="max-w-md">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider">
              ZX7 Speaker
            </h3>
            <Link to="/product">
              <button
                className="mt-6 sm:mt-8 border border-black hover:bg-black hover:text-white 
                           transition px-6 sm:px-8 py-3 sm:py-4 uppercase text-sm tracking-wider"
              >
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* === YX1 EARPHONES === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
         
          <img
            src={assets.homeBigEarphone}
            alt="YX1 Earphones"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="bg-gray-100 rounded-2xl p-8 sm:p-20 flex flex-col justify-center ">
          <h3 className="text-3xl font-bold uppercase tracking-wider">
            YX1 Earphones
          </h3>

          <Link to="/product">
            <button className="mt-8 border border-black hover:bg-black hover:text-white transition px-8 py-4 uppercase text-sm tracking-wider">
              See Product
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
