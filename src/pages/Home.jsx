import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import Navbar from "../components/layouts/NavBar";
import Product from "../components/layouts/Product";
import { Footer } from "../components/layouts/Footer";
import Customer from "../components/layouts/Customer";
import ProductShowcase from "../components/layouts/ProductShowcase";

const HeroSection = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* === HERO SECTION === */}
      <section className="relative text-white overflow-hidden flex items-center min-h-[90vh] sm:min-h-screen">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${assets.heroHeadphone})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-16 md:py-20">
          {/* Text */}
          <div className="z-10 max-w-lg text-center lg:text-left px-2 sm:px-0">
            <p className="uppercase tracking-[6px] sm:tracking-[8px] text-gray-400 text-xs sm:text-sm mb-4">
              New Product
            </p>

            <h1 className="font-sans font-bold text-[32px] sm:text-[44px] md:text-[56px] leading-[38px] sm:leading-[50px] md:leading-[60px] tracking-[2px] uppercase">
              XX99 MARK II <br /> Headphones
            </h1>

            <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-[15px] leading-relaxed max-w-md mx-auto lg:mx-0">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <Link to="/headphones">
              <button className="mt-8 bg-[#D87D4A] hover:bg-[#FBAF85] transition text-white px-8 py-4 uppercase text-sm tracking-wider">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* === PRODUCT SECTION === */}
      <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-20 my-12 sm:my-16 md:my-20 lg:my-24">
        <Product />
      </section>

      {/* === PRODUCT SHOWCASE SECTION === */}
      <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-20 my-12 sm:my-16 md:my-20 lg:my-24">
        <ProductShowcase />
      </section>

      {/* === CUSTOMER SECTION === */}
      <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-20 my-12 sm:my-16 md:my-20 lg:my-24">
        <Customer />
      </section>

      {/* === FOOTER === */}
      <Footer />
    </>
  );
};

export default HeroSection;
