import Navbar from "../../layouts/NavBar";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import { Footer } from "../../layouts/Footer";
import Customer from "../../layouts/Customer";
import Product from "../../layouts/Product";
import { useCart } from "../../../context/CartContext";




export default function HeadphoneItem1() {
  const { addToCart } = useCart(); // ✅ access global cart logic

  // Product data
  const product = {
    id: 1,
    name: "XX99 Mark II Headphones",
    price: 2999,
    image: assets.firstHeadphone,
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
              to="/headphones"
              className="text-gray-500 hover:text-[#D87D4A] text-sm font-medium transition-colors duration-300"
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
                XX99 Mark II <br /> Headphones
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-[25px] mb-6 max-w-lg">
                The pinnacle of pristine audio. These headphones redefine your
                premium listening experience by reproducing the balanced depth
                and precision of studio-quality sound.
              </p>
              <p className="text-lg sm:text-xl font-bold mb-6">$2,999</p>

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
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music lover. The XX99 Mark II
                  offers precise sound reproduction, unparalleled comfort, and
                  cutting-edge wireless connectivity for the modern listener.
                  <br />
                  <br />
                  Whether you’re in the studio or relaxing at home, these
                  headphones deliver consistent performance across genres,
                  ensuring every note is heard exactly as intended.
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
                      1x
                    </span>
                    Headphone Unit
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base">
                    <span className="text-[#D87D4A] font-semibold mr-3">
                      2x
                    </span>
                    Replacement Earcups
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
                    3.5mm Audio Cable
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* === PRODUCT GALLERY === */}
          <section className="max-w-[1440px] w-full mx-auto mt-20 md:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* LEFT COLUMN */}
              <div className="grid grid-rows-2 gap-6 md:gap-8">
                <div className="rounded-xl overflow-hidden h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px]">
                  <img
                    src={assets.headphone_item_1a}
                    alt="Gallery 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px]">
                  <img
                    src={assets.headphone_item_2a}
                    alt="Gallery 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="rounded-xl overflow-hidden h-[450px] sm:h-[480px] md:h-[560px] lg:h-[670px]">
                <img
                  src={assets.headphone_item_3a}
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
                { img: assets.secondHeadphone, name: "XX99 Mark I" },
                { img: assets.thirdHeadphone, name: "XX59" },
                { img: assets.firstSpeaker, name: "ZX9 Speaker" },
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
                  <h3 className="text-xl font-bold uppercase mb-6">
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
