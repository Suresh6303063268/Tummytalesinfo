import React, { useState } from 'react';
import { CiClock2, CiShare2 } from 'react-icons/ci';

const OurCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState('First Trimester');

  const coursesData = {
    "Essential Your Testings": [
      { title: "Blood Tests", image: "blood.jpg", description: "The second trimester, typically considered the most comfortable phase of pregnancy, still comes with its own set of physical and emotional symptoms as the body adapts to the growing baby. Many women experience relief from early pregnancy symptoms like nausea and extreme fatigue." },
      { title: "Urine Tests", image: "/urene.jpg", description: "The second trimester of pregnancy, spanning from week 13 to week 26, is often considered the most comfortable period for many pregnant women. During this time, fetal development accelerates, and many important milestones occur. The fetus begins to grow rapidly in size and weight." },
      { title: "Dating and Viability Ultrasound", image: "/dating.jpg", description: "The first trimester ultrasound typically takes place during your initial appointment and is performed transvaginally. While the transvaginal probe may appear large, the procedure is painless. During the scan, you will see a magnified image of your baby, often in a C-like formation within the sac." },
      { title: "Genetic Screening (NIPT and Carrier)", image: "/scrum.jpg", description: "Genetic screening tests are optional but recommended to assess the risk of genetic disorders your child may be predisposed to. This non-invasive procedure requires only a blood or saliva sample. These tests provide valuable insights, allowing you to prepare for potential outcomes." },
      { title: "Nuchal Translucency (NT) Scan", image: "/datting1.jpg", description: "The ultrasound technician performs a specialized ultrasound that measures the fluid-filled space at the back of the baby's neck. An increased NT measurement can indicate a higher risk of chromosomal abnormalities or congenital heart defects, such as Down Syndrome." },
      { title: "Maternal Serum Screening(MSS)", image: "/scrum1.jpg", description: "Getting your blood work done is one of the first steps of your pregnancy. This will give the doctor several details that will be used in your future. You will be asked for additional blood samples later as well, but this will first assess overall health and any underlying conditions you may have." },
      { title: "Symptoms That May Occur", image: "/symtos.jpg", description: "The second trimester, typically considered the most comfortable phase of pregnancy, still comes with its own set of physical and emotional symptoms as the body adapts to the growing baby. Many women experience relief from early pregnancy symptoms like nausea and extreme fatigue." },
      { title: "Fetal Development", image: "/fetal.jpg", description: "The second trimester of pregnancy, spanning from week 13 to week 26, is often considered the most comfortable period for many pregnant women. During this time, fetal development accelerates, and many important milestones occur. The fetus begins to grow rapidly in size and weight." },
      { title: "Nutrition Tips", image: "/nutriation.jpg", description: "During the second trimester of pregnancy, a woman’s nutritional needs increase to support the rapid growth and development of the fetus, as well as the changes occurring in her own body. This period typically requires an additional 300–350 calories per day, which should come from nutrient-rich foods." },
      { title: "Baby’s Development", image: "/baby-dev.jpg", description: "During the third trimester, your baby undergoes rapid growth and important developmental changes. The brain continues to mature quickly, and the lungs develop to prepare for breathing after birth. Fat accumulates under the skin, giving the baby a fuller, rounder appearance." },
      { title: "Key To-Do List", image: "/list.jpg", description: "Attend regular prenatal check-ups (usually every 2 weeks, then weekly after week 36) Monitor baby’s movements daily and report any significant decrease to your doctor Finalize your birth plan – include preferences for pain relief, delivery positions, and emergency procedures." },
      { title: "Warning Signs – Call Your Doctor If", image: "/warn.jpg", description: "During the third trimester, it’s important to watch for warning signs that may indicate complications. Call your doctor if you experience vaginal bleeding, leaking fluid, severe abdominal pain, strong contractions before 37 weeks, sudden swelling, severe headaches, vision changes, high fever." },
    ],
    "First Trimester": [
        { title: "Blood Tests", image: "blood.jpg", description: "The second trimester, typically considered the most comfortable phase of pregnancy, still comes with its own set of physical and emotional symptoms as the body adapts to the growing baby. Many women experience relief from early pregnancy symptoms like nausea and extreme fatigue." },
       { title: "Urine Tests", image: "/urene.jpg", description: "The second trimester of pregnancy, spanning from week 13 to week 26, is often considered the most comfortable period for many pregnant women. During this time, fetal development accelerates, and many important milestones occur. The fetus begins to grow rapidly in size and weight." },
      { title: "Dating and Viability Ultrasound", image: "/dating.jpg", description: "The first trimester ultrasound typically takes place during your initial appointment and is performed transvaginally. While the transvaginal probe may appear large, the procedure is painless. During the scan, you will see a magnified image of your baby, often in a C-like formation within the sac." },
      { title: "Genetic Screening (NIPT and Carrier)", image: "/scrum.jpg", description: "Genetic screening tests are optional but recommended to assess the risk of genetic disorders your child may be predisposed to. This non-invasive procedure requires only a blood or saliva sample. These tests provide valuable insights, allowing you to prepare for potential outcomes." },
      { title: "Nuchal Translucency (NT) Scan", image: "/datting1.jpg", description: "The ultrasound technician performs a specialized ultrasound that measures the fluid-filled space at the back of the baby's neck. An increased NT measurement can indicate a higher risk of chromosomal abnormalities or congenital heart defects, such as Down Syndrome." },
      { title: "Maternal Serum Screening(MSS)", image: "/scrum1.jpg", description: "Getting your blood work done is one of the first steps of your pregnancy. This will give the doctor several details that will be used in your future. You will be asked for additional blood samples later as well, but this will first assess overall health and any underlying conditions you may have." },
    ],
    "Second Trimester": [
     { title: "Symptoms That May Occur", image: "/symtos.jpg", description: "The second trimester, typically considered the most comfortable phase of pregnancy, still comes with its own set of physical and emotional symptoms as the body adapts to the growing baby. Many women experience relief from early pregnancy symptoms like nausea and extreme fatigue." },
      { title: "Fetal Development", image: "/fetal.jpg", description: "The second trimester of pregnancy, spanning from week 13 to week 26, is often considered the most comfortable period for many pregnant women. During this time, fetal development accelerates, and many important milestones occur. The fetus begins to grow rapidly in size and weight." },
      { title: "Nutrition Tips", image: "/nutriation.jpg", description: "During the second trimester of pregnancy, a woman’s nutritional needs increase to support the rapid growth and development of the fetus, as well as the changes occurring in her own body. This period typically requires an additional 300–350 calories per day, which should come from nutrient-rich foods." },
    ],
    "Third Trimester": [
      { title: "Baby’s Development", image: "/baby-dev.jpg", description: "During the third trimester, your baby undergoes rapid growth and important developmental changes. The brain continues to mature quickly, and the lungs develop to prepare for breathing after birth. Fat accumulates under the skin, giving the baby a fuller, rounder appearance." },
      { title: "Key To-Do List", image: "/list.jpg", description: "Attend regular prenatal check-ups (usually every 2 weeks, then weekly after week 36) Monitor baby’s movements daily and report any significant decrease to your doctor Finalize your birth plan – include preferences for pain relief, delivery positions, and emergency procedures." },
      { title: "Warning Signs – Call Your Doctor If", image: "/warn.jpg", description: "During the third trimester, it’s important to watch for warning signs that may indicate complications. Call your doctor if you experience vaginal bleeding, leaking fluid, severe abdominal pain, strong contractions before 37 weeks, sudden swelling, severe headaches, vision changes, high fever." },
    ],
  };

  const renderCourses = () => {
    const courses = coursesData[selectedCategory] || [];
    return courses.map((course, index) => (
      <div key={index} className="bg-red-200 rounded-lg shadow-lg p-4 m-2 flex flex-col items-center w-[400px] lg:w-[400px]">
        <img
          src={course.image || '/fallback-image.png'}
          alt={course.title}
          className="h-40 w-40 object-cover rounded-lg   lg:w-[400px] lg:h-[250px] "
        />
        <div className='bg-red-400'>
        <h2 className="text-lg font-bold text-center mt-4 text-white text-[20px] lg:text-[20px]">{course.title}</h2>
        <div className="flex items-center space-x-2 mt-2">
          <CiClock2 className="text-gray-500" />
          <p className="text-sm  leading-[2] m-2 p-3 text-white text-[20px] lg:text-[17px]">{course.description}</p>
        </div>
        <div className="mt-4 flex space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 m-8">Start Tracking</button>
          <button className="bg-red-300 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-400 m-8">
            <CiShare2 className="mr-2" />
            SHARE
          </button>
        </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center text-red-500 mb-6">Essential Your Testings</h1>
      <div className="flex justify-center space-x-8 mb-6">
        {Object.keys(coursesData).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-lg font-medium rounded-lg ${selectedCategory === category ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {renderCourses()}
      </div>
    </div>
  );
};

export default OurCourses;
