import React from "react";





const tools = [
  {
    name: "Ovulation Calculator",
    icon: "Pregency-evulator.png", // Replace with actual image path
  },
  {
    name: "Due Date Calculator",
    icon: "tool.png",
  },
  {
    name: "Chinese Gender Predictor",
    icon: "tool1.png",
  },
  {
    name: "Baby Names Finder",
    icon: "tool2.png",
  },
  {
    name: "Pregnency Question Live Chat",
    icon: "tool3.png",
  },
  {
    name: "Pregnancy Weight Gain Calculator",
    icon: "tool4.png",
  },
  {
    name: "Baby Growth Tracker",
    icon: "tool5.png",
  },
  {
    name: "Child Height Predictor",
    icon: "tool6.png",
  },
];

const PopularTools = () => {
  return (
    <div className="bg-pink-100  py-10 px-4 pt-30 h-100">
      <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
        Popular tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        {tools.map((tool, index) => (
          <div key={index} className="text-center">
            <img
              src={tool.icon}
              alt={tool.name}
              className="mx-auto w-24 h-24 object-contain mb-3"
            />
            <p className="text-red-600 text-sm md:text-base font-medium">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTools;
