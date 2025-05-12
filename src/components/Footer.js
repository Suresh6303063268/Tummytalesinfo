import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

export default function Footer() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-pink-100 text-gray-800 px-5 sm:px-10 md:px-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and Intro */}
        <div>
      <div className="flex items-center mb-4 space-x-4">
  <img src="Pregent.png" alt="Logo" className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 md:-ml-10" />
  <span className="text-xl sm:text-2xl font-bold text-blue-800 relative left-[-20px]">
  Tummy<span className="text-blue-600">Tales</span>
</span>



</div>


          <p className="text-base">
            Pregnancy in the U.S. shouldn’t mean cultural confusion! Let’s break it down.
          </p>
        </div>

        {/* Office Info */}
        <div>
          <h2 className="text-lg font-bold text-pink-700 mb-2 border-b-2 border-pink-600 w-fit">
            Office
          </h2>
          <p className="mt-2">ITPL Road</p>
          <p className="mt-2">Whitefield, Bangalore</p>
          <p>Karnataka, PIN 560066, India</p>
          <a href="mailto:surya@gmail.com" className="text-pink-600 underline mt-2 block">
            surya@gmail.com
          </a>
          <p className="mt-1 font-semibold">+91 6303063268</p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-bold text-pink-700 mb-2 border-b-2 border-pink-600 w-fit">
            Links
          </h2>
          <ul className="space-y-2 text-base leading-relaxed">
            <li><Link to="/" className="hover:underline hover:text-pink-700 transition">Home</Link></li>
            <li><Link to="/pregnancy-map" className="hover:underline hover:text-pink-700 transition">Pregnancy Map</Link></li>
            <li><Link to="/mom-network" className="hover:underline hover:text-pink-700 transition">Mom-to-Mom Network</Link></li>
            <li><Link to="/ask-amma" className="hover:underline hover:text-pink-700 transition">Ask Amma</Link></li>
            <li><Link to="/resources" className="hover:underline hover:text-pink-700 transition">Resources</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-bold text-pink-700 mb-2 border-b-2 border-pink-600 w-fit">
            Newsletter
          </h2>
         <div className="flex flex-col md:flex-row items-stretch border rounded-md overflow-hidden mt-4 max-w-xl mx-auto">
  <input
    type="email"
    placeholder="Enter your email"
    className="px-3 py-2 outline-none text-sm w-full md:flex-1"
  />
  <button
    className="bg-pink-600 text-white font-semibold text-sm 
             px-4 py-2 md:px-6 md:py-3 md:text-base rounded 
             md:w-[100px] w-full mt-2 md:mt-0 
             text-left pl-4"
  >
    Subscribe
  </button>
</div>


          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <Link
              to=""
              className="w-12 h-12 bg-[#3b5998] rounded-full flex items-center justify-center text-white text-xl"
            >
              <FaFacebookF />
            </Link>

            <Link
              to="/your-target-page"
              className="w-12 h-12 bg-[#00acee] rounded-full flex items-center justify-center text-white text-xl"
            >
              <FaTwitter />
            </Link>

            <Link
              to="/your-target-page"
              className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white text-xl"
            >
              <FaWhatsapp />
            </Link>

            <Link
              to="/your-target-page"
              className="w-12 h-12 bg-[#E60023] rounded-full flex items-center justify-center text-white text-xl"
            >
              <FaPinterestP />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-10 border-t border-pink-500 pt-4 text-center text-pink-700 text-sm h-5">
        Design By Company© 2025 - All Rights Reserved
      </div>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/916303063268"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-5 bg-green-500 p-3 rounded-full shadow-xl z-50"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      {/* Scroll to Top/Bottom Button */}
      <button
        onClick={() =>
          window.scrollTo({
            top: isScrolledDown ? 0 : document.body.scrollHeight,
            behavior: "smooth",
          })
        }
        className="fixed bottom-5 right-5 bg-pink-600 text-white p-3 rounded-full shadow-lg z-50"
      >
        {isScrolledDown ? (
          <IoMdArrowDropup className="text-2xl" />
        ) : (
          <IoMdArrowDropdown className="text-2xl" />
        )}
      </button>
    </footer>
  );
}
