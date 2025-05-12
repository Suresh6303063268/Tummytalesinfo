import React from "react";
import './Pregency-tools.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const tools = [
  {
    name: "Ovulation Calculator",
    icon: "🔄",
  },
  {
    name: "Due Date Calculator",
    icon: "📅",
  },
  {
    name: "Chinese Gender Predictor",
    icon: "⚥",
  },
  {
    name: "Baby Names Finder",
    icon: "👶",
  },
  {
    name: "Pregnancy question? Live chat",
    icon: "💬",
  },
  {
    name: "Pregnancy Weight Gain Calculator",
    icon: "⚖️",
  },
  {
    name: "Baby growth tracker",
    icon: "📈",
  },
  {
    name: "Child Height Predictor",
    icon: "📏",
  },
];

export default function PopularTools() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold my-6">Popular Tools</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-4">
        {tools.map((tool, index) => (
          <Card
            key={index}
            className="bg-gray-800 hover:bg-gray-700 text-center rounded-2xl p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition-all"
          >
            <div className="text-4xl mb-4">{tool.icon}</div>
            <CardContent>
              <h2 className="text-lg font-medium">{tool.name}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
