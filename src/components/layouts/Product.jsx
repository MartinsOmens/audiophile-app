import { assets } from "../../assets/assets";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 my-20">
      {/* Responsive grid: 1 col mobile, 3 col tablet & up */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Headphones Section */}
        <div className="bg-[#F1F1F1] rounded-lg p-6 md:p-8 flex flex-col items-center justify-between relative  mt-10">
          <div className="absolute -top-10 sm:-top-12 md:-top-12 w-32 h-32 md:w-40 md:h-40 overflow-visible">
            <img
              src={assets.homeHeadphone}
              alt="Headphones"
              className="w-auto h-32 md:h-40 object-contain"
            />
          </div>
          <div className="mt-28 flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
              HEADPHONES
            </h3>
            <Link
              to="/headphones"
              className="flex items-center gap-2 text-[#000000] font-bold py-2 px-6 rounded transition-colors duration-300 hover:text-[#D87D4A]"
            >
              SHOP <ChevronRight size={16} className="text-[#D87D4A]" />
            </Link>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="bg-[#F1F1F1] rounded-lg p-6 md:p-8 flex flex-col items-center justify-between relative mt-10">
          <div className="absolute -top-10 sm:-top-12 md:-top-12 w-32 h-32 md:w-40 md:h-40 overflow-visible">
            <img
              src={assets.homeSpeaker}
              alt="Speakers"
              className="w-auto h-32 md:h-40 object-contain"
            />
          </div>
          <div className="mt-28 flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
              SPEAKERS
            </h3>
            <Link
              to="/speakers"
              className="flex items-center gap-2 text-[#000000] font-bold py-2 px-6 rounded transition-colors duration-300 hover:text-[#D87D4A]"
            >
              SHOP <ChevronRight size={16} className="text-[#D87D4A]" />
            </Link>
          </div>
        </div>

        {/* Earphones Section */}
        <div className="bg-[#F1F1F1] rounded-lg p-6 md:p-8 flex flex-col items-center justify-between relative mt-10">
          <div className="absolute -top-10 sm:-top-12 md:-top-12 w-32 h-32 md:w-40 md:h-40 overflow-visible">
            <img
              src={assets.homeEarphone}
              alt="Earphones"
              className="w-auto h-32 md:h-40 object-contain"
            />
          </div>
          <div className="mt-28 flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
              EARPHONES
            </h3>
            <Link
              to="/earphones"
              className="flex items-center gap-2 text-[#000000] font-bold py-2 px-6 rounded transition-colors duration-300 hover:text-[#D87D4A]"
            >
              SHOP <ChevronRight size={16} className="text-[#D87D4A]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
