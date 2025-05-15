import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Nutrition = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

 const nutrientData = [
       { name: 'Protein', value: 25, color: '#F4A7B9' },
    { name: 'Carbohydrates', value: 35, color: '#FDCFA1' },
    { name: 'Fats', value: 30, color: '#A7D8DE' },
    { name: 'Fiber', value: 10, color: '#C8C2FA' },
  ];

  const R = 50;
  const C = 2 * Math.PI * R;
  let cumulative = 0;
  const slices = nutrientData.map((nutrient) => {
    const length = (nutrient.value / 100) * C;
    const slice = {
      ...nutrient,
      dashArray: `${length.toFixed(2)} ${(C - length).toFixed(2)}`,
      dashOffset: (-cumulative).toFixed(2),
    };
    cumulative += length;
    return slice;
  });

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => selectedImage && URL.revokeObjectURL(selectedImage);
  }, [selectedImage]);

  return (
    <div className="bg-gradient-to-b from-rose-50 to-yellow-50 min-h-screen">
      {/* Header */}
      <div className="relative px-4 sm:px-6 md:px-8 py-20 bg-rose-300 overflow-hidden">
        <div className="absolute inset-0 transform -skew-y-3 bg-rose-50 opacity-70"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg p-8 sm:p-12"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-rose-400 to-yellow-400"
          >
            Nutrition Tracker
          </motion.h1>
        </motion.div>
      </div>

      {/* Why Section */}
      <div className="bg-rose-100 px-4 sm:px-6 md:px-8 py-20 text-rose-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <h2
              className="text-5xl uppercase font-extrabold tracking-wide"
              style={{ WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px #BE123C' }}
            >
              Why?
            </h2>
          </div>
          <div className="md:col-span-9 space-y-6 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-rose-700 underline font-serif">
              Tracking Your Nutrients
            </h3>
            <p className="text-lg leading-relaxed">
              Now more than ever, keeping track of your eating habits is a great way to stay on top of your pregnancy health. Your
              nutrition tracker will serve as a simple guide to monitor the amount of protein, fats, and carbohydrates you’re
              putting into your body. Our goal is to help you build the healthiest lifestyle possible — one step at a time.
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-rose-700 underline font-serif">
              It Matters for South Asian Women
            </h3>
            <p className="text-lg leading-relaxed">
              For South Asian women, it’s especially important to be mindful of nutrition. Gestational diabetes is a condition that
              affects how your body processes sugar during pregnancy, which is more common in South Asian populations. Genetics,
              body composition, and traditional dietary patterns high in refined carbohydrates all contribute to this increased risk.
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-rose-700 underline font-serif">
              Healthy and Fun
            </h3>
            <p className="text-lg leading-relaxed">
              You can easily track your daily goals here — just scan the nutrition label from a packet, or scan your meal itself.
              Our AI feature will estimate the calories and nutritional breakdown of each meal and snack you enjoy, helping you make
              informed choices with ease.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Donut Chart Section */}
      <div className="bg-rose-200 py-16 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-800 mb-8 text-center">
          Complete The Circle
        </h2>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-16">
          {/* Animated Donut Chart */}
          <div className="flex flex-col items-center">
            <svg className="w-80 h-80 sm:w-96 sm:h-96 transform -rotate-90" viewBox="0 0 200 200">
              {slices.map((slice, i) => (
                <motion.circle
                  key={i}
                  r={R}
                  cx="100"
                  cy="100"
                  fill="none"
                  stroke={slice.color}
                  strokeWidth="40"
                  strokeDasharray={slice.dashArray}
                  initial={{ strokeDashoffset: C }}
                  animate={{ strokeDashoffset: slice.dashOffset }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className={i === slices.length - 1 ? 'cursor-pointer' : ''}
                  onClick={
                    i === slices.length - 1 ? () => fileInputRef.current.click() : undefined
                  }
                />
              ))}
            </svg>
            <ul className="mt-4 text-rose-900 space-y-2 text-sm text-left">
              {nutrientData.map(({ name, color }, i) => (
                <li key={i} className="flex items-center">
                  <span
                    className="w-4 h-4 mr-2 block rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  {name}: <strong>{nutrientData[i].value}%</strong>
                </li>
              ))}
            </ul>
            <motion.button
              onClick={() => fileInputRef.current.click()}
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-6 py-2 bg-rose-600 text-white font-semibold rounded-lg shadow hover:bg-yellow-200 transition"
            >
              Upload Meal Photo
            </motion.button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onFileChange}
            />
          </div>

          {/* Upload Preview */}
          <div className="flex flex-col items-center">
            <AnimatePresence>
              {selectedImage ? (
                <motion.img
                  key="img"
                  src={selectedImage}
                  alt="Uploaded meal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-64 h-40 object-cover rounded-lg shadow-md mb-4"
                />
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-64 h-40 bg-white rounded-lg shadow-inner mb-4 flex items-center justify-center"
                >
                  <span className="text-rose-300">No photo yet</span>
                </motion.div>
              )}
            </AnimatePresence>
            <p className="text-rose-900 text-center max-w-xs">
              {selectedImage
                ? 'Here’s what you uploaded!'
                : 'Click “Upload Meal Photo” or the last slice in the donut to add your meal photo.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
