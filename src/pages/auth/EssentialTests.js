import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

import OurTests from './Our-Tests';

const EssentialTests = () => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  

  useEffect(() => {
    const path = document.querySelector("#curvedPath");
    if (!path) {
      console.warn("Element #curvedPath not found in the DOM.");
      return;
    }
  
    const text = textRef.current;
    if (!text) return;
  
    let pathLength = path.getTotalLength();
  
    const animateText = () => {
      let scrollPosition = (window.scrollY % pathLength) / pathLength;
      let point = path.getPointAtLength(scrollPosition * pathLength);
      text.setAttribute("x", point.x);
      text.setAttribute("y", point.y);
      requestAnimationFrame(animateText);
    };
  
    animateText();
  }, []);


   
  const topics = [
    {
      title: "Developing a Business Plan",
      image: "/Image11.jpeg", // Replace with actual image path
      description: "Describe your lesson with a short summary.",
    },
    {
      title: "Setting up Your Online Presence",
      image: "/Image12.jpeg", // Replace with actual image path
      description: "Describe your lesson with a short summary.",
    },
    {
      title: "Effective Communication",
      image: "/Image13.jpeg", // Replace with actual image path
      description: "Describe your lesson with a short summary.",
    },
  ];

  

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "Question 1",
        answer:
          "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
      },
      {
        question: "Question 2",
        answer:
          "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
      },
      {
        question: "Question 3",
        answer:
          "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
      },
    ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-900 px-6 py-10 mt-[-15px]">
  <section className="bg-pink-50 px-6 py-12 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-12 lg:ml-[-100px] mt-[-50px]   lg:mt-[30px]">

      {/* Text Content */}
      <div className="max-w-xl  lg:text-left ml-[-10px] lg:ml-[-100px] text-justify">
        <h2 className="text-2xl font-bold text-red-500 mb-6 text-[18.1px]    md:text-[20px] lg:text-[20px]">
          Essential Testing Tales
        </h2>
        <p className="text-gray-800 mb-4 leading-[2]   md:leading-[2.35] lg:leading-[2.5] text-[14.1px]    md:text-[20px] lg:text-[18px]" >
          Follow along to learn about the various tests available to you, their
          purposes, and how they may differ from what you're familiar with.
          We’ll guide you through each test, helping you understand its
          significance and what to expect. Ask your doctor about these tests and
          get their recommendation as well!
        </p>
        <button className="mt-6 bg-red-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow-lg shadow-orange-300 transition duration-300">
          Join The Network
        </button>
      </div>

      {/* Image */}
     <div className="flex-shrink-0 h-[300px] w-[300px] md:w-[400px] lg:h-[300px]">
        <img
          src="Pregent8.jpg" // Replace with actual path
          alt="Pregnant woman"
        className="rounded-[10px] w-full object-cover md:w-[600px] md:max-w-[600px] lg:h-[400px] lg:w-[800px] lg:max-w-[600px] mt-[20px] lg:mt-[-40px] md:ml-[-100px]  lg:ml-[0px]"

        />
      </div>
    </section>

{/*First semesters */}

  <OurTests/>





      
    <div className="bg-[#B9BE80] py-12 px-6">
      <h2 className="text-center text-3xl font-bold text-white mb-6">
        What you&apos;ll learn
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="text-center bg-[#A3A86A] w-[350px] rounded-lg p-4 shadow-md"
          >
            <div className="w-[320px] h-[220px] rounded-xl overflow-hidden shadow-lg mx-auto">
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex items-center justify-between text-lg font-semibold text-white mt-3"
            >
              <span>{topic.title}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-white" />
              ) : (
                <FaChevronDown className="text-white" />
              )}
            </button>
            {openIndex === index && (
              <p className="text-white mt-3">{topic.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="min-h-screen flex items-center justify-center bg-[#b3b57a] p-6">
      <div className="max-w-2xl w-full">
        <h2 className="text-center text-3xl font-bold text-white relative">
          Course{" "}
          <span className="relative px-2 bg-[#b3b57a] text-white">
            <span className="absolute inset-0 border-2 border-white rounded-full -z-10"></span>
            FAQ
          </span>
        </h2>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-white">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center py-4 text-white font-bold text-lg"
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="text-white pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default EssentialTests;