import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PregencyTool from "../components/Pregency-Tool.js";
import PregencyWeek from "../components/Pregency-Week.js";
import ContactUs from "./auth/Contact.js";

const HomePage = () => {
  const navigate = useNavigate();


  const plans = [
  {
    title: "Silver",
    price: "$4.99",
    features: [
      "Mom-to-Mom Network",
      "Keep a Journal",
      "Daily Food Recommendations",
      "AI-generated responses"
    ],
     // Replace with the correct image path
  },
  {
    title: "Gold",
    price: "$8.99",
    features: [
      "Silver Package Deal",
      "Discounts on Specialists",
      "Communicate with OB/GYN’s",
      "Curated TUMMY Box"
    ],
   // Replace with the correct image path
  },
];


  const testimonials = [
  {
    icon: "❤️",
    title: "Rely",
    text: "I tried to talk to my doctor about feeling overwhelmed, but postpartum depression isn’t something I can go to my family for. I don’t know where to turn for help.",
  },
  {
    icon: "🤝",
    title: "Understand",
    text: "My doctor told me to eat more protein and dairy, but I am vegetarian and they do not seem to understand my dilemma - my doctor in India didn’t mention any problems when I was there.",
  },
  {
    icon: "🍃",
    title: "Trust",
    text: "Back home, we rely on traditional remedies for morning sickness, but my doctor dismissed them and only suggested medications. I didn’t know what I could trust.",
  },
];


  useEffect(() => {
    console.log("HomePage mounted");
  }, [navigate]);

  return (
    <div className="w-full">
      {/* Hero Section */}
     <div className="h-screen w-full flex flex-col justify-center items-start px-8 sm:px-16 bg-cover bg-center relative overflow-hidden mt-[-15px]">
  {/* Background Image */}
<img
  src="\pre30.jpg"
  alt="Everest Singalila Trek"
  className="absolute inset-0 w-full h-[250px] sm:h-[300px] md:h-[550px] lg:h-auto object-cover filter brightness-150 md:object-cover"
/>



  {/* Overlay for text readability */}
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>

  {/* Welcome Text */}
 <div class="relative z-10 text-left text-white max-w-full sm:max-w-[50%] pl-8 sm:pl-10 md:mt-[-450px] lg:mt-[-20px] md:ml-[-50px] mt-[-400px] text-xl ml-[-40px]">
    <h1
      className=" text-2xl sm:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      Welcome to <br />
      <span className="text-red-500">TummyTales</span>
    </h1>
    <p
      className="text-lg sm:text-2xl italic font-semibold drop-shadow-md"
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      Your Pregnancy Journey Starts Here
    </p>
  </div>

  {/* Information Box */}
  <div className="">
 <div class="absolute right-5 sm:right-20 top-1/3 bg-[#bb6528] text-white p-4 sm:p-6 w-[90%]  sm:w-[35%] shadow-lg text-lg rounded-[30px] h-[435px]  sm:h-[100px] md:h-[430px]  md:w-[650px] lg:h-[400px] lg:w-[450px] mt-[30px]     lg:mt-[-50px] md:mt-[220px] lg:ml-[50px] !md:ml-[150px] md:liner">
    <p className="text-[14.1px]    md:text-[20px] lg:text-[18px]  md:leading-[2.10] lg:leading-[1.7] lg:font-serif " >
      Pregnancy is a beautiful journey that should be cherished. For South
      Asians in the United States, medical care and cultural practices often feel poles apart – we bridge that gap for you. By blending South Asian heritage with Western medicine, we create a seamless and supportive experience.
    </p>
    <p className="mt-4 text-[14.1px]    md:text-[20px] lg:text-[18px]  md:leading-[2.12] lg:leading-[1.7] lg:font-serif" >
      We offer guidance that blends both worlds, ensuring that no sort of dialogue gets lost. You can expect a touch of familiarity within each step of your special chapter. All you have to do is focus on growing your family.
    </p>
  </div>
  </div>

  {/* Curved Bottom Effect */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg viewBox="0 0 1440 320" className="w-full">
      <path
        fill="rgb(166,123,91)"
        d="M0,288L80,266.7C160,245,320,203,480,208C640,213,800,267,960,282.7C1120,299,1280,277,1360,266.7L1440,256V320H0Z"
      ></path>
    </svg>
  </div>
</div>

<PregencyWeek/>

<PregencyTool/>
      {/* Hear From Moms Section */}
     <div className="bg-white py-12 px-4 md:px-10">
  <h2 className="text-2xl font-bold text-pink-600 text-center mb-10">Hear From Moms</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 h-full-screen">
    {testimonials.map(({ icon, title, text }, index) => (
      <div
        key={index}
        className="relative bg-pink-50 rounded-2xl shadow-xl overflow-hidden border border-pink-300"
      >
        {/* Pink side stripe */}
        <div className="absolute top-0 left-0 h-full w-2 bg-pink-400 md:w-4"></div>

        <div className="p-6 pt-8 text-center relative z-10">
          <h3 className="text-pink-600 font-bold text-lg mb-2 flex items-center justify-center gap-2">
            <span className="text-2xl">{icon}</span>
            {title}
          </h3>
          <p className="text-gray-700 text-sm leading-[1.8] mt-5">{text}</p>
        </div>

        {/* Responsive triangle */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[300px] border-l-transparent border-b-[30px] border-b-pink-200      md:border-l-[360px] md:border-b-[30px] lg:border-l-[440px] lg:border-b-[30px]"></div>
      </div>
    ))}
  </div>
</div>







      {/* TummyTales Info Section - With Double Wave Effect */}
    <div className="relative bg-pink-100 py-16 px-4 md:px-10 text-center">
  <p className="text-gray-700 text-base leading-[2.8] text-justify font-sans text-[17px]">
    Moving to a new country itself presents countless challenges, yet the unique experiences of pregnant women navigating this transition often go unnoticed. Pregnancy is a time when advice—solicited or not—flows from every direction. However, when that advice is conflicting, shaped by both cultural traditions and unfamiliar medical practices, it can leave one feeling confused, isolated, and uncertain about the right path to take. Growing up in a different cultural environment means embracing a distinct set of norms, and adjusting to a new healthcare system and way of life takes time. TummyTales was born from our own experiences of seeking guidance and support while finding our footing in a new country. We understand the importance of feeling heard and having a space to ask questions without fear or hesitation.
  </p>
</div>




 {/* Top Curve - Darker Edge */}
        {/* <div className="absolute top-0 left-0 w-full">
          <svg className="w-full h-24 md:h-32 lg:h-40" viewBox="0 0 1440 320V320">
            <path
              fill="#3e3e20"
              d="M0,96L60,106.7C120,117,240,139,360,149.3C480,160,600,160,720,149.3C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160V0H0Z"
            ></path>
          </svg>
        </div> */}
        {/* Text Content 
        <div className="relative z-10 max-w-4xl mx-auto text-[#f9f9e8]">
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Moving to a new country itself presents countless challenges, yet the unique experiences of pregnant women navigating this transition often go unnoticed.
          </p>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Pregnancy is a time when advice—solicited or not—flows from every direction. However, when that advice is conflicting, shaped by both cultural traditions and unfamiliar medical practices, it can leave one feeling confused, isolated, and uncertain about the right path to take.
          </p>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Growing up in a different cultural environment means embracing a distinct set of norms, and adjusting to a new healthcare system and way of life takes time.
          </p>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            TummyTales was born from our own experiences of seeking guidance and support while finding our footing in a new country. We understand the importance of feeling heard and having a space to ask questions without fear or hesitation.
          </p>
        </div>

        {/* Bottom Curve - Lighter Edge */}
        {/* <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-24 md:h-32 lg:h-40" viewBox="0 0 1440 320">
            <path
              fill="#e0e0a0"
              d="M0,256L80,245.3C160,235,320,213,480,202.7C640,192,800,192,960,202.7C1120,213,1280,235,1360,245.3L1440,256V320H0Z"
            ></path>
          </svg>
        </div> */}
     
{/* Prizes Section */}

<div className="flex flex-wrap justify-center gap-10 px-15 py-10 bg-gradient-to-br from-pink-200 to-blue-100 mt-0 gap-x-10">
  {/* Silver Package */}
 <div className="flex flex-col md:flex-row items-center bg-white rounded-xl p-6 shadow-xl max-w-[800px] h-auto text-left hover:-translate-y-2 transition-transform duration-300 mx-auto space-y-6 md:space-y-0 md:space-x-6">
  <img src="image2.jpg" alt="Silver Package" className="w-full md:w-[300px] h-[250px] object-cover rounded-lg" />
  <div className="flex flex-col items-start text-left w-full md:w-[250px]">
    <h1 className="text-xl font-semibold text-pink-400 mb-2">Silver</h1>
    <h4 className="text-base font-semibold text-gray-700 mb-4">
      Get access to 40 weeks of:
    </h4>
    <ul className="space-y-1 text-sm text-gray-800 list-disc list-inside">
      <li>Mom-to-Mom Network</li>
      <li>Keep a Journal</li>
      <li>Daily Food Recommendations</li>
      <li>AI-generated responses</li>
    </ul>
    <button className="mt-6 px-6 py-2 bg-pink-400 text-white rounded-full text-sm font-semibold hover:bg-pink-500 transition-colors">
      $4.99
    </button>
  </div>
</div>


  {/* Gold Package */}
 <div className="flex flex-col md:flex-row items-center bg-white rounded-xl p-6 shadow-xl max-w-[800px] text-left hover:-translate-y-2 transition-transform duration-300 mx-auto space-y-6 md:space-y-0 md:space-x-6">
  <img src="image1.jpg" alt="Gold Package" className="w-full md:w-[350px] h-[250px] object-cover rounded-lg" />
  <div className="flex flex-col w-full md:w-[250px]">
    <h1 className="text-xl font-semibold text-pink-400 mb-2 text-center md:text-left">Gold</h1>
    <h4 className="text-base font-semibold text-gray-600 mb-3 text-center md:text-left">
      Get access to 40 weeks of:
    </h4>
    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
      <li>Silver Package Deal</li>
      <li>Discounts on Specialists</li>
      <li>Communicate with OB/GYN’s</li>
      <li>Curated TUMMY Box</li>
    </ul>
    <button className="mt-4 px-6 py-2 bg-pink-400 text-white rounded-full text-base hover:bg-pink-500 transition-colors self-center md:self-start">
      $8.99
    </button>
  </div>
</div>



</div>
 

<ContactUs/>


<div
  className="relative w-full h-[400px] sm:h-[350px] md:h-[400px] flex items-center justify-center bg-cover bg-center filter brightness-275"
  style={{ backgroundImage: 'url("/baby-development.jpg")' }}
>
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  <div className="relative text-center text-white px-4">
    <h2 className="text-2xl sm:text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
    <p className="mb-4 text-sm sm:text-base  mt-2">
      Sign up with your email address to receive news and updates.
    </p>
  <div className="flex flex-row sm:flex-row justify-center items-center mt-10">
  <input
    type="email"
    placeholder="Email Address"
    className="w-44 sm:w-80 px-4 py-2 rounded-l-md text-black outline-none mb-3 sm:mb-0"
  />
 <button className="w-full sm:w-auto px-6 py-2 bg-transparent border border-white text-white rounded-md sm:rounded-r-md hover:bg-white hover:text-black transition text-center mt-[-10px] sm:mt-0">
  Sign Up
</button>


</div>


  </div>
</div>

    
    </div>
  );
};

export default HomePage;