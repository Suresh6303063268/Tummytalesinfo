import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ThaliPage = () => {
    const [openSection, setOpenSection] = useState(null);
    const navigate = useNavigate();

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    // Foods to Avoid data
    const foodsToAvoid = [
        {
            title: "Foods That May Induce Contractions",
            items: [
                "Ajwain (Carom Seeds) & Fenugreek (Methi) Seeds: Used post-delivery for lactation but should be limited in early pregnancy as they may stimulate contractions.",
                "Excessive Spicy Foods: Overly spicy dishes can cause acidity, heartburn, and discomfort.",
            ],
        },
        {
            title: "Unpasteurized Dairy & Soft Cheeses",
            items: [
                "Unpasteurized milk & soft cheeses (Paneer, Brie, Feta, Blue Cheese): May contain harmful bacteria like listeria, which can lead to infections. Always opt for pasteurized dairy products.",
            ],
        },
        {
            title: "Caffeinated & Sugary Drinks",
            items: [
                "Tea & Coffee: High caffeine intake (over 200mg per day) may increase the risk of miscarriage. Limit to one small cup per day.",
                "Soft Drinks & Sugary Juices: Contain artificial sweeteners and high sugar content, which can lead to gestational diabetes.",
            ],
        },
        {
            title: "Foods That May Cause Digestive Issues",
            items: [
                "Raw Sprouts: May carry bacteria like E.coli and should be cooked before consumption.",
                "Too much Ghee or Fried Foods: While small amounts of ghee are beneficial, excessive intake can lead to weight gain and indigestion.",
                "Heavy Lentils (Chana Dal, Urad Dal, Rajma): Can cause bloating; should be consumed in moderation.",
                "Raw & Undercooked Seafood, Eggs, and Meat: Do not eat sushi made with raw fish (cooked sushi is safe).",
            ],
        },
        {
            title: "Processed & Preservative-Laden Foods",
            items: [
                "Pickles & Excess Salt: High sodium levels can cause water retention and increased blood pressure.",
                "Packaged & Instant Foods: Often contain preservatives, MSG, and unhealthy trans fats.",
            ],
        },
    ];

    return (
        <div className="bg-[#fefefe] min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 my-6 sm:my-8 md:my-10">
                    <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#c85858] mb-4">
                            Thali Tales
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black mb-6">
                            How you treat your diet changes everything during
                            your pregnancy! South Asian diets are naturally rich
                            in essential nutrients, but we should be aware
                            regarding the quality and quantity of food. While
                            many of these practices are rooted in Ayurvedic and
                            traditional medicine, it is important to balance
                            them with modern nutritional science to ensure a
                            healthy pregnancy.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4">
                        <img
                            src="/thali.png"
                            alt="Thali"
                            className="w-32 sm:w-44 md:w-56 lg:w-72 h-auto rounded-full shadow-lg"
                        />
                    </div>
                </div>

                {/* Nutrient Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10">
                    {[
                        {
                            title: "Folate and Fiber",
                            img: "/float.jpg",
                            points: [
                                "<strong>Whole Grains:</strong> Brown rice, whole wheat roti, jowar, and bajra provide fiber and essential B-vitamins.",
                                "<strong>Beets & Citrus Fruits:</strong> Rich in folate and vitamin C.",
                                "<strong>Figs & Dates:</strong> Aid digestion and boost iron levels.",
                            ],
                            desc: "These folate-rich and fiber-packed foods support digestion, healthy weight gain, and nutrient absorption.",
                        },
                        {
                            title: "Protein",
                            img: "/protein.jpg",
                            points: [
                                "<strong>Lentils (Dal):</strong> Prevent constipation and anemia.",
                                "<strong>Chickpeas & Kidney Beans:</strong> Support muscle and tissue development.",
                            ],
                            desc: "Including plant-based proteins ensures fetal development, maternal health, and muscle strength.",
                        },
                        {
                            title: "Calcium and Iron",
                            img: "/iron.jpg",
                            points: [
                                "<strong>Leafy Greens:</strong> Loaded with iron and folic acid.",
                                "<strong>Dairy Products:</strong> Great sources of calcium and probiotics.",
                                "<strong>Sesame & Almonds:</strong> Provide iron, calcium, and healthy fats.",
                            ],
                            desc: "Iron and calcium-rich foods strengthen bones, prevent anemia, and support overall maternal and fetal health.",
                        },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="relative bg-[#1e1b32] text-white rounded-[16px] p-4 sm:p-6 md:p-8 shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
                        >
                            {/* Decorative Left Strip */}
                            <div className="absolute top-0 left-0 h-full w-2 bg-[#0096db] rounded-l-[16px]" />

                            {/* Bottom Angled Strip */}
                            <div className="absolute bottom-0 left-0 w-full h-3 bg-[#7ca1c0] skew-x-[-45deg] origin-bottom-left" />

                            <div className="relative z-10">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-48 sm:h-56 object-cover mb-4 rounded-lg"
                                />
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#d6336c] mb-4 text-center">
                                    {card.title}
                                </h3>
                                <ul
                                    className="list-disc list-inside text-sm sm:text-base leading-relaxed mb-4 space-y-2"
                                    dangerouslySetInnerHTML={{
                                        __html: card.points
                                            .map((p) => `<li>${p}</li>`)
                                            .join(""),
                                    }}
                                />
                                <p className="text-sm sm:text-base text-center">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Daily Meal Plan */}
                <div className="relative bg-[#1e1b32] text-white rounded-[16px] p-4 sm:p-6 md:p-8 max-w-md mx-auto mb-12 shadow-lg transform transition hover:-translate-y-2 hover:scale-[1.02] overflow-hidden text-center">
                    <div className="absolute top-0 left-0 h-full w-2 bg-[#0096db] rounded-l-[16px]" />
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-[#7ca1c0] skew-x-[-45deg] origin-bottom-left" />

                    <div className="relative z-10">
                        <img
                            src="/food.jpg"
                            alt="Daily Meal Plan"
                            className="w-3/4 sm:w-2/3 md:w-3/5 mx-auto mb-4 rounded-[10px] filter brightness-110"
                        />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#d6336c] mb-4">
                            Daily Meal Plan
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed mb-6">
                            <strong>
                                Kitchen to Table: Nourish, Savor, Thrive!
                            </strong>
                            <br />
                            Discover delicious, fresh recipes tailored to your
                            dietary needs and nutritional goals. Enjoy meals
                            that satisfy your cravings while keeping you
                            healthy—one thoughtfully curated dish at a time.
                        </p>
                        <button
                            className="inline-block bg-[#47b9ed] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-md border border-black hover:bg-[#bfc07d] text-sm sm:text-base"
                            onClick={() => navigate("/daily-meal-plan")}
                        >
                            Join here!{" "}
                            <FaArrowRight className="inline-block ml-2" />
                        </button>
                    </div>
                </div>

                {/* Nutritional Values */}
                <div className="mb-10 px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 text-center">
                        Nutritional Values
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                key: "protein",
                                label: "Protein",
                                servings: "3-4 servings",
                                items: [
                                    "3 oz cooked lean meat",
                                    "3 oz poultry",
                                    "3 oz fish",
                                    "1 egg",
                                    "½ cup beans",
                                    "¼ cup nuts",
                                ],
                            },
                            {
                                key: "carbs",
                                label: "Carbohydrates",
                                servings: "6-8 servings",
                                items: [
                                    "½ cup cooked rice/pasta",
                                    "1 slice whole grain bread",
                                    "½ cup oats",
                                ],
                            },
                            {
                                key: "fats",
                                label: "Fats",
                                servings: "4-5 servings",
                                items: [
                                    "1 tbsp olive oil",
                                    "¼ avocado",
                                    "10 almonds",
                                    "1 tbsp chia seeds",
                                ],
                            },
                            {
                                key: "dairy",
                                label: "Dairy",
                                servings: "3-4 servings",
                                items: ["1 cup milk/yogurt", "1.5 oz cheese"],
                            },
                        ].map(({ key, label, servings, items }) => (
                            <div
                                key={key}
                                className="bg-[#f8c8dc] hover:bg-[#add8f5] p-3 sm:p-4 md:p-5 rounded-xl shadow-md transform transition hover:-translate-y-1 cursor-pointer"
                                onClick={() => toggleSection(key)}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-lg sm:text-xl font-medium text-[#1e1b32]">
                                        {label} ({servings})
                                    </span>
                                    <span className="text-xl">
                                        {openSection === key ? "-" : "+"}
                                    </span>
                                </div>
                                {openSection === key && (
                                    <div className="mt-3 bg-[#fde4ef] hover:bg-[#c2e2f8] p-3 sm:p-4 md:p-5 rounded-md shadow-md text-left">
                                        <p className="font-bold text-lg">
                                            1 serving =
                                        </p>
                                        <ul className="list-disc ml-6 text-base space-y-2 mt-2">
                                            {items.map((it, i) => (
                                                <li key={i}>{it}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Foods to Avoid */}
                <div className="bg-[#fefefe] p-4 sm:p-6 md:p-8 rounded-[16px] shadow-lg">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center">
                        Foods To Avoid
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {foodsToAvoid.map((food, index) => (
                            <div
                                key={index}
                                className="relative bg-[#1e1b32] hover:bg-[#33303d] text-white rounded-[16px] p-4 sm:p-6 shadow-lg transform transition hover:-translate-y-2 hover:scale-[1.02]"
                            >
                                <div className="absolute top-0 left-0 h-full w-2 bg-[#0096db] rounded-l-[16px]" />
                                <div
                                    className="
    absolute bottom-0 left-0
    w-full h-3
    bg-[#7ca1c0]
    transform -skew-x-12
    origin-bottom-left
    origin-bottom-right
    rounded-bl-2xl
    z-0
  "
                                />
                                <div className="relative z-10">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#ed3d89] text-center">
                                        {food.title}
                                    </h3>
                                    <ul className="list-disc list-inside text-sm sm:text-base space-y-2 leading-relaxed">
                                        {food.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scrolling Footer */}
                <div className="overflow-hidden mt-8">
                    <p className="whitespace-nowrap animate-scrollLeft text-xl">
                        Meet Your Instructions...
                    </p>
                </div>
            </div>

            {/* Scroll animation */}
            <style>
                {`
          @keyframes scrollLeft {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scrollLeft {
            animation: scrollLeft 10s linear infinite;
          }
        `}
            </style>
        </div>
    );
};

export default ThaliPage;
