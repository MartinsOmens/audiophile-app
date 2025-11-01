import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#101010] text-white pt-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
        {/* Accent line aligned with logo */}
        <div className="absolute top-0 left-4 sm:left-6 lg:left-8 h-1 w-20 bg-[#D87D4A]" />

        {/* Top Section: Logo + Nav */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="inline-block">
                <img
                  src={assets.logo}
                  alt="Audiophile Logo"
                  className="w-32 sm:w-36 md:w-40 object-contain"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:block">
              <ul className="flex gap-6 lg:gap-8 text-sm font-bold tracking-[2px] uppercase">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#D87D4A] transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/headphones"
                    className="hover:text-[#D87D4A] transition-colors duration-200"
                  >
                    Headphones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/speakers"
                    className="hover:text-[#D87D4A] transition-colors duration-200"
                  >
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/earphones"
                    className="hover:text-[#D87D4A] transition-colors duration-200"
                  >
                    Earphones
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Middle Section: Description + Social Icons */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 md:gap-10">
          {/* Description */}
          <div className="flex-1 max-w-2xl">
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Audiophile is an all-in-one stop to fulfill your audio needs. We're a
              small team of music lovers and sound specialists who are devoted to
              helping you get the most out of personal audio. Come and visit our demo
              facility — we’re open 7 days a week.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-[#D87D4A] transition-colors duration-200"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-[#D87D4A] transition-colors duration-200"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-[#D87D4A] transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8">
          <p className="text-white/60 text-sm text-center md:text-left">
            Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
