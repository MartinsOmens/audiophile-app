import Navbar from "../../layouts/NavBar";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import { Footer } from "../../layouts/Footer";
import Customer from "../../layouts/Customer";
import Product from "../../layouts/Product";

export default function SpeakerItem2() {
  return (
    <>
      <Navbar />

      {/* === PRODUCT PAGE CONTAINER === */}
      <section className="bg-white text-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          {/* === GO BACK === */}
          <div className="w-full max-w-[1440px] mx-auto px-6 pt-20 mt-15">
            <Link
              to="/speakers"
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
                src={assets.secondSpeaker}
                alt="ZX7 SPEAKER"
                className="w-[80%] sm:w-[70%] md:w-[60%] h-auto object-contain"
              />
            </div>

            {/* === TEXT CONTENT === */}
            <div className="text-left">
              <p className="text-[#D87D4A] text-sm sm:text-base uppercase tracking-[3px] mb-4">
                New Product
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[1.43px] mb-6 leading-[1.1]">
                ZX7
                <br /> SPEAKER
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-[25px] mb-6 max-w-lg">
                Stream high quality sound wirelessly with minimal to no loss.
                The ZX7 speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </p>
              <p className="text-lg sm:text-xl font-bold mb-6">$3,500</p>
              <div className="flex flex-row items-center gap-2 w-full max-w-md ">
                {/* Quantity Button */}
                <button className="flex-1 bg-[#FAFAFA] hover:bg-[#F1F1F1] text-[#000000] py-3 sm:py-4 uppercase text-sm sm:text-base tracking-wider font-semibold transition rounded">
                  <div className="flex items-center justify-center gap-4">
                    <span className="cursor-pointer select-none">+</span>
                    <span>1</span>
                    <span className="cursor-pointer select-none">-</span>
                  </div>
                </button>

                {/* Add to Cart Button */}
                <button className="flex-1 bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-3 sm:py-4 uppercase text-sm sm:text-base tracking-wider font-semibold transition rounded">
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
                  Reap the advantages of a flat diaphragm tweeter cone. This
                  provides a fast response rate and excellent high frequencies
                  that lower tiered bookshelf speakers cannot provide. The
                  woofers are made from aluminum that produces a unique and
                  clear sound. XLR inputs allow you to connect to a mixer for
                  more advanced usage.
                  <br />
                  <br />
                  The ZX7 speaker is the perfect blend of stylish design and
                  high performance. It houses an encased MDF wooden enclosure
                  which minimises acoustic resonance. Dual connectivity allows
                  pairing through bluetooth or traditional optical and RCA
                  input. Switch input sources and control volume at your finger
                  tips with the included wireless remote. This versatile speaker
                  is equipped to deliver an authentic listening experience.
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
                    Speaker Unit
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base">
                    <span className="text-[#D87D4A] font-semibold mr-3">
                      2x
                    </span>
                    Speaker Cloth Panel
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
                    3.5mm 7.5m Audio Cable
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base">
                    <span className="text-[#D87D4A] font-semibold mr-3">
                      1x
                    </span>
                    10m Optical Cable
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* === PRODUCT GALLERY === */}
          <section className="max-w-[1440px] w-full mx-auto mt-20 md:mt-24 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* LEFT COLUMN (2 stacked images) */}
              <div className="grid grid-rows-2 gap-6 md:gap-8">
                <div className="rounded-xl overflow-hidden h-[200px] sm:h-60 md:h-[280px] lg:h-80">
                  <img
                    src={assets.speaker_item_1a}
                    alt="Gallery 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-[200px] sm:h-60 md:h-[280px] lg:h-80">
                  <img
                    src={assets.speaker_item_2a}
                    alt="Gallery 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN (tall image) */}
              <div className="rounded-xl overflow-hidden h-[450px] sm:h-[480px] md:h-[560px] lg:h-[670px]">
                <img
                  src={assets.speaker_item_3a}
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
                  img: assets.secondSpeaker,
                  name: "ZX7 SPEAKER",
                },
                {
                  img: assets.secondHeadphone,
                  name: "XX99 Mark I",
                },
                {
                  img: assets.thirdHeadphone,
                  name: "XX59",
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
