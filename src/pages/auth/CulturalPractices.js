import React from 'react';
import { CalendarDays, ShoppingBag } from 'lucide-react'; // optional icons

const essentials = [
  { title: 'SRIMANTHAM/ GODH BHARAYI / VALAKAAPU SAMPRADAYAM', img: process.env.PUBLIC_URL + '/image19.jpg' },
  { title: 'DHUPAN / SMOKE FUMIGATION',                    img: process.env.PUBLIC_URL + '/image19.jpg' },
  { title: 'NAMING CEREMONY',                               img: process.env.PUBLIC_URL + '/image19.jpg' },
  { title: 'POST-NATAL MASSAGE KIT FOR THE BABY AND MOM',    img: process.env.PUBLIC_URL + '/image19.jpg' },
  { title: 'ANNAPRASHAN/ MUKHE BHAAT',                       img: process.env.PUBLIC_URL + '/image19.jpg' },
];

const CulturalPractices = () => (
  <>
    {/* Hero Section with Pink→Blue Gradient */}
    <section className="relative bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100 text-[#5D1F3E] px-6 md:px-10 py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 rounded-full w-64 h-64 opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 bg-blue-200 rounded-full w-96 h-96 opacity-20"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Cultural Baby Prep Practices
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-[#3b1125]">
          Being a South Asian pregnant woman in the U.S. can feel overwhelming — but you shouldn’t have to miss out on the traditions you hold close, and neither should your baby.
          We’ve got you covered for events, customs, rituals, and the traditional tacit knowledge that nourishes both baby and parent. If your culture’s practice is missing, reach out and let’s grow this space together!
        </p>
      </div>
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFE4ff"
            d="M0,96L60,106.7C120,117,240,139,360,149.3C480,160,600,160,720,144C840,128,960,96,1080,85.3C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>

    {/* Essentials Grid */}
    <section className="bg-gradient-to-r from-pink-100 via-pink-50 to-blue-100 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {essentials.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] flex flex-col"
          >
            <img src={item.img} alt={item.title} className="w-full h-60 object-cover" />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl md:text-2xl font-bold text-[#5D1F3E] mb-4 underline decoration-[#5D1F3E] underline-offset-[0.5rem]">
                {item.title.toUpperCase()}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#5D1F3E] px-5 py-2 rounded-md text-[#5D1F3E] font-medium hover:bg-[#5D1F3E] hover:text-white transition">
                  <ShoppingBag size={18} /> Book Now
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#5D1F3E] px-5 py-2 rounded-md text-[#5D1F3E] font-medium hover:bg-[#5D1F3E] hover:text-white transition">
                  <CalendarDays size={18} /> Add to Calendar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default CulturalPractices;
