import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
  <div className="w-full max-w-[100%] bg-pink-50 min-h-screen flex items-center justify-center py-12 px-4 overflow-hidden">


   <div className="w-full max-w-[1400px] bg-white bg-opacity-60 rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 md:flex md:gap-10 mx-auto">


        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-rose-200 rounded-2xl p-6 space-y-4">
          <h2 className="text-3xl font-semibold text-rose-700">Contact Us</h2>
          <p className="text-rose-600">We’re here to support you throughout your pregnancy journey.</p>
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-rose-300 placeholder-white text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-md bg-rose-300 placeholder-white text-white focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded-md bg-rose-300 placeholder-white text-white focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-rose-300 placeholder-white text-white focus:outline-none"
          ></textarea>
          
          <button className="w-full bg-rose-500 text-white py-3 rounded-md hover:bg-pink-500 transition">
            Send Message
          </button>
        </div>

        {/* Contact Info */}
    <div className="w-full md:w-1/2 mt-6 md:mt-0 bg-white rounded-2xl p-4 sm:p-6 md:p-8 pt-[60px] space-y-6 sm:space-y-8 md:space-y-10 shadow-inner text-base sm:text-lg md:text-xl">
  <div className="flex items-center text-rose-500 space-x-3 sm:space-x-4 md:space-x-5">
    <FaMapMarkerAlt className="text-lg sm:text-xl md:text-2xl" />
    <span>123 Maternity Lane, City, Country</span>
  </div>
  <div className="flex items-center text-rose-500 space-x-3 sm:space-x-4 md:space-x-5">
    <FaEnvelope className="text-lg sm:text-xl md:text-2xl" />
    <span>support@pregnancycare.com</span>
  </div>
  <div className="flex items-center text-rose-500 space-x-3 sm:space-x-4 md:space-x-5">
    <FaPhoneAlt className="text-lg sm:text-xl md:text-2xl" />
    <span>+123 456 7890</span>
  </div>
</div>


      </div>
    </div>
  );
};

export default ContactUs;
