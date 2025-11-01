import Navbar from "../../layouts/NavBar";

export default function HeadphoneItem1() {
  return (
    <>
      <Navbar />

      {/* === PRODUCT HEADER SECTION === */}
      <section className="bg-white text-black flex items-center min-h-[50vh]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-6 flex flex-col justify-center">
          {/* === BACK LINK === */}
          <a
            href="#"
            className="text-gray-500 hover:text-[#D87D4A] text-sm font-medium transition-colors duration-300 mb-8"
          >
            ← Go Back
          </a>

          {/* === PLACEHOLDER FOR PRODUCT DETAILS === */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase mb-4">
              XX99 Mark II Headphones
            </h1>
            <p className="text-gray-600 text-base leading-[25px] max-w-2xl">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music lover. The XX99 Mark II sets a new
              standard in wireless listening.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
