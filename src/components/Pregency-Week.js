import React from "react";
import "./Scroolable.css"; // Make sure to import the CSS if using external file

const pregnancyWeeks = [
  { week: 1, image: '👶' }, { week: 2, image: '🧬' }, { week: 3, image: '🪨' },
  { week: 4, image: '🫘' }, { week: 5, image: '🥒' }, { week: 6, image: '🥔' },
  { week: 7, image: '🍒' }, { week: 8, image: '🍋' }, { week: 9, image: '🍈' },
  { week: 10, image: '🍆' }, { week: 11, image: '🍈' }, { week: 12, image: '🌱' },
  { week: 13, image: '🍋' }, { week: 14, image: '🍎' }, { week: 15, image: '🍐' },
  { week: 16, image: '🫚' }, { week: 17, image: '🫑' }, { week: 18, image: '🍅' },
  { week: 19, image: '🍌' }, { week: 20, image: '🥕' }, { week: 21, image: '🥒' },
  { week: 22, image: '🥭' }, { week: 23, image: '🌽' }, { week: 24, image: '🥔' },
  { week: 25, image: '🧅' }, { week: 26, image: '🥦' }, { week: 27, image: '🍆' },
  { week: 28, image: '🫚' }, { week: 29, image: '🥬' }, { week: 30, image: '🥥' },
  { week: 31, image: '🧄' }, { week: 32, image: '🍍' }, { week: 33, image: '🥭' },
  { week: 34, image: '🥬' }, { week: 35, image: '🥬' }, { week: 36, image: '🥬' },
  { week: 37, image: '🥬' }, { week: 38, image: '🍐' }, { week: 39, image: '🍉' },
  { week: 40, image: '🎃' }, { week: 41, image: '🍼' },
];

for (let i = pregnancyWeeks.length + 1; i <= 41; i++) {
  pregnancyWeeks.push({ week: i, image: "👶" });
}

const PregnancyWeeks = () => {
  return (
    <div className="bg-pink-100 py-10 px-4">
      <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
        My pregnancy week by week
      </h2>
      <div className="overflow-x-auto scrollbar-hide mt-20">
        <div className="flex gap-4 w-max px-2">
          {pregnancyWeeks.map(({ week, image }) => (
            <div
              key={week}
              className="min-w-[140px] h-[100px] rounded-lg bg-white shadow-md border border-red-500 flex flex-col justify-center items-center text-red-700 font-medium"
            >
              <span className="text-xl font-bold">{week}</span>
              <span className="text-sm">weeks pregnant</span>
              <span className="text-2xl mt-1">{image}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PregnancyWeeks;
