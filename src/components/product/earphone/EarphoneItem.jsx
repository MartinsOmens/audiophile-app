import Navbar from "../../layouts/Navbar";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import { Footer } from "../../layouts/Footer";
import Customer from "../../layouts/Customer";
import Product from "../../layouts/Product";
import { useCart } from "../../../context/CartContext";

export default function EarphoneItem() {
  const { addToCart } = useCart();

  // Product data
  const product = {
    id: 6,
    name: "YX1 WIRELESS EARPHONES",
    price: 4500,
    image: assets.homeEarphone,
  };

  return (
    <>
      <Navbar />

      {/* === PRODUCT PAGE CONTAINER === */}
      <section className="bg-white text-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          {/* === GO BACK === */}
          <div className="w-full max-w-[1440px] mx-auto px-6 pt-20 mt-15">
            <Link
              to="/earphones"
              className="text-gray-500 hover:text-gray-700 text-lg font-medium transition-colors duration-300"
            >
              Go Back
            </Link>
          </div>

          {/* === PRODUCT DETAILS === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10 items-center">
            {/* === IMAGE === */}
            <div className="bg-[#F1F1F1] rounded-xl flex justify-center items-center p-6 sm:p-8 md:p-10">
              <img
                src={product.image}
                alt={product.name}
                className="w-[80%] sm:w-[70%] md:w-[60%] h-auto object-contain"
              />
            </div>

            {/* === TEXT CONTENT === */}
            <div className="text-left">
              <p className="text-[#D87D4A] text-sm sm:text-base uppercase tracking-[3px] mb-4">
                New Product
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[1.43px] mb-6 leading-[1.1]">
                YX1 WIRELESS
                <br /> EARPHONES
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-[25px] mb-6 max-w-lg">
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>
              <p className="text-lg sm:text-xl font-bold mb-6">$4,500</p>
              {/* === ADD TO CART BUTTON === */}
              <div className="flex flex-row items-center gap-2 w-full max-w-md">
                <button
                  onClick={() => addToCart(product)} // ✅ Global cart function
                  className="flex-1 bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-3 sm:py-4 uppercase text-sm sm:text-base tracking-wider font-semibold rounded transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* === FEATURES + IN THE BOX === */}
          <section className="max-w-[1440px] mx-auto w-full mt-24 md:mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-20">
              {/* === FEATURES === */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-6 tracking-[1.5px]">
                  Features
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-[25px] max-w-2xl">
                  Experience unrivalled stereo sound thanks to innovative
                  acoustic technology. With improved ergonomics designed for
                  full day wearing, these revolutionary earphones have been
                  finely crafted to provide you with the perfect fit, delivering
                  complete comfort all day long while enjoying exceptional noise
                  isolation and truly immersive sound.
                  <br />
                  <br />
                  The YX1 Wireless Earphones features customizable controls for
                  volume, music, calls, and voice assistants built into both
                  earbuds. The new 7-hour battery life can be extended up to 28
                  hours with the charging case, giving you uninterrupted play
                  time. Exquisite craftsmanship with a splash resistant design
                  now available in an all new white and grey color scheme as
                  well as the popular classic black.
                </p>
              </div>

              {/* === IN THE BOX === */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-6 tracking-[1.5px]">
                  In the Box
                </h2>
                <ul className="space-y-3">
                  <li className="text-gray-600 text-sm sm:text-base">
                    <span className="text-[#D87D4A] font-semibold mr-3">
                      2x
                    </span>
                    Earphone Unit
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base">
                    <span className="text-[#D87D4A] font-semibold mr-3">
                      6x
                    </span>
                    Multi-size Earplugs
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base">
                    <span className="text-[#D87D4A] font-semibold mr-3">
                      1x
                    </span>
                    User Manual
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base">
                    <span className="text-[#D87D4A] font-semibold mr-3">
                      1x
                    </span>
                    USB-C Charging Cable
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base">
                    <span className="text-[#D87D4A] font-semibold mr-3">
                      1x
                    </span>
                    Travel Pouch
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* === PRODUCT GALLERY === */}
          <section className="max-w-[1440px] w-full mx-auto mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* LEFT COLUMN (2 stacked images) */}
              <div className="grid grid-rows-2 gap-4 md:gap-6">
                <div className="rounded-xl overflow-hidden h-[150px] sm:h-40 md:h-60 lg:h-64">
                  <img
                    src={assets.earphone_item_1}
                    alt="Gallery 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-[150px] sm:h-40 md:h-60 lg:h-64">
                  <img
                    src={assets.earphone_item_2}
                    alt="Gallery 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN (tall image) */}
              <div className="rounded-xl overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] lg:h-[540px]">
                <img
                  src={assets.earphone_item_3}
                  alt="Gallery 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* === YOU MAY ALSO LIKE === */}
          <section className="max-w-[1440px] mx-auto w-full text-center mt-28">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-12">
              You May Also Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                // map over an array for DRY structure
                {
                  img: assets.secondHeadphone,
                  name: "XX99 Mark I",
                },
                {
                  img: assets.thirdHeadphone,
                  name: "XX59",
                },
                {
                  img: assets.homeBigSpeaker,
                  name: "ZX9 SPEAKER",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-6 rounded-xl min-h-[380px] sm:min-h-[400px] lg:min-h-[420px]"
                >
                  <div className="bg-[#F1F1F1] rounded-xl p-8 flex justify-center items-center mb-8 w-full aspect-square">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-[60%] h-auto object-contain"
                    />
                  </div>
                  <h3
                    className="text-xl font-bold uppercase mb-6"
                    style={{ letterSpacing: "1.71px" }}
                  >
                    {product.name}
                  </h3>
                  <Link
                    to="/product"
                    className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-8 py-3 uppercase text-sm tracking-wider font-semibold transition"
                  >
                    See Product
                  </Link>
                </div>
              ))}
            </div>
          </section>
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
