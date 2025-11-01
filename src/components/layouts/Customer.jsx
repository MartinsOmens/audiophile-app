import { assets } from "../../assets/assets";

export default function Customer() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Image (top on mobile/tablet) */}
        <div className="flex justify-center lg:order-2">
          <div className="relative w-full lg:max-w-xl">
            <img
              src={assets.homeUser}
              alt="Person listening to high-end headphones"
              className="w-full h-auto object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left lg:order-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-6">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            Located at the heart of New York City, Audiophile is the premier store
            for high-end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available for
            you to browse and experience a wide range of our products. Stop by our
            store to meet some of the fantastic people who make Audiophile the
            best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
    
  );
}
