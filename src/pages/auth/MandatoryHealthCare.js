import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MandatoryHealthCare = () => {
  const essentials = [
    { title: "Sleep Essentials", img: "./sleep.jpeg" },
    { title: "Diapering Essentials", img: "./diaper.jpeg" },
    { title: "Feeding Essentials", img: "./feeding.jpeg" },
    { title: "Bath & Skincare", img: "./skincare.jpeg" },
    { title: "Clothing Essentials", img: "./clothing.jpeg" },
    { title: "Travel Essentials", img: "./travel.jpeg" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-pink-50 to-blue-100 text-gray-800 px-8 py-24">
        {/* Decorative circles */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 rounded-full w-64 h-64 opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 bg-blue-200 rounded-full w-96 h-96 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Mandatory Baby Prep Practices
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed space-y-4">
              <strong className="block text-xl">“Baby prep, the must-do list.”</strong>
              Here’s everything required for prepping for your baby in the U.S.—from healthcare essentials to products you’ll need, with links to help you get started.
              Curious about cultural baby prep? Head over to our dedicated page for that.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-100 via-pink-50 to-pink-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Explore the Essentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {essentials.map((item, index) => (
              <motion.div
                key={index}
                className="group relative text-center bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center transition-transform transform hover:scale-105"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full h-60 mb-6 overflow-hidden rounded-2xl bg-gray-100 group-hover:opacity-80 transition-opacity">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-semibold text-gray-800 underline decoration-pink-300 underline-offset-8 mb-6">
                  {item.title.toUpperCase()}
                </h4>
                <div className="flex space-x-4 mt-auto">
                  <button className="bg-gradient-to-r from-pink-300 to-blue-200 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-none transition-shadow">
                    Book now
                  </button>
                  <button className="border-2 border-pink-300 text-pink-300 px-6 py-3 rounded-full font-medium hover:bg-pink-300 hover:text-white transition-colors">
                    Add to Calendar
                  </button>
                </div>
                {/* Hover overlay icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MandatoryHealthCare;
