import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaPinterestP } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";

export default function Footer() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolledDown(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-pink-100 to-blue-100 text-gray-800 px-5 sm:px-10 md:px-12 py-16">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-1/3 w-48 h-48 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-15"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and Intro */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4 space-x-4">
            <img src="Pregent.png" alt="Logo" className="h-20 w-20 sm:h-24 sm:w-24" />
            <span className="text-2xl font-bold text-blue-800">
              Tummy<span className="text-blue-600">Tales</span>
            </span>
          </div>
          <p className="text-base">
            Pregnancy in the U.S. shouldn’t mean cultural confusion! Let’s break it down.
          </p>
        </motion.div>

        {/* Office Info */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-lg font-bold text-pink-700 mb-2 border-b-2 border-pink-600 w-fit">
            Office
          </h2>
          <div className="space-y-2 mt-2">
            <p>ITPL Road</p>
            <p>Whitefield, Bangalore</p>
            <p>Karnataka, PIN 560066, India</p>
            <a href="mailto:surya@gmail.com" className="text-pink-600 underline block">
              surya@gmail.com
            </a>
            <p className="font-semibold">+91 6303063268</p>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-lg font-bold text-pink-700 mb-2 border-b-2 border-pink-600 w-fit">
            Links
          </h2>
          <ul className="space-y-2 text-base leading-relaxed mt-2">
            {['/', '/pregnancy-map', '/mom-network', '/ask-amma', '/resources'].map((path, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="hover:underline hover:text-pink-700 transition"
                >
                  {['Home','Pregnancy Map','Mom-to-Mom Network','Ask Amma','Resources'][i]}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter & Social */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-lg font-bold text-pink-700 mb-2 border-b-2 border-pink-600 w-fit">
            Newsletter
          </h2>
          <div className="flex flex-col md:flex-row items-stretch border rounded-md overflow-hidden mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 outline-none text-sm w-full md:flex-1"
            />
            <button className="bg-pink-600 text-white font-semibold text-sm px-4 py-2 md:px-6 md:py-3 rounded md:w-32 w-full mt-2 md:mt-0 hover:bg-pink-700 transition">
              Subscribe
            </button>
          </div>

          <div className="flex gap-4 mt-8">
            {[
              { icon: <FaFacebookF />, bg: 'bg-[#3b5998]' },
              { icon: <FaTwitter />, bg: 'bg-[#00acee]' },
              { icon: <FaWhatsapp />, bg: 'bg-[#25D366]' },
              { icon: <FaPinterestP />, bg: 'bg-[#E60023]' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                className={`${social.bg} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-10 border-t border-pink-600 pt-4 text-center text-pink-700 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Design By Company© 2025 — All Rights Reserved
      </motion.div>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/916303063268"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-5 bg-green-500 p-3 rounded-full shadow-xl z-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>

      {/* Scroll Button */}
      <button
        onClick={() =>
          window.scrollTo({
            top: isScrolledDown ? 0 : document.body.scrollHeight,
            behavior: "smooth",
          })
        }
        className="fixed bottom-5 right-5 bg-pink-600 text-white p-3 rounded-full shadow-lg z-50 hover:rotate-180 transition-transform"
      >
        {isScrolledDown ? <IoMdArrowDropup className="text-2xl" /> : <IoMdArrowDropdown className="text-2xl" />}
      </button>
    </footer>
  );
}