import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import Navbar from "../components/layouts/Navbar";
import Product from "../components/layouts/Product";
import { Footer } from "../components/layouts/Footer";
import Customer from "../components/layouts/Customer";
import ProductShowcase from "../components/layouts/ProductShowcase";

const HeroSection = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <section className="relative text-white overflow-hidden flex items-center min-h-[90vh] sm:min-h-screen">
        {/* === BACKGROUND IMAGES === */}
        {/* Mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:hidden w-full h-full"
          style={{
            backgroundImage: `url(${assets.heroMobile})`,
          }}
        />

        {/* Tablet */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden sm:block md:hidden w-full h-full"
          style={{
            backgroundImage: `url(${assets.heroTablet})`,
          }}
        />

        {/* Desktop */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block w-full h-full"
          style={{
            backgroundImage: `url(${assets.hero})`,
          }}
        />

        {/* === OVERLAY (for better contrast) === */}
        <div className="absolute inset-0 bg-black/40" />

        {/* === CONTENT === */}
        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 sm:px-10 lg:px-0 flex justify-start">
          <div className="max-w-md text-left lg:ml-[8%]">
            <p className="uppercase tracking-[10px] text-gray-400 mb-4">
              New Product
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              XX99 Mark II
              <br />
              Headphones
            </h1>

            <p className="text-gray-300 mb-8 max-w-sm leading-relaxed">
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
