import React, { useState } from 'react';

const questions = [
  {
    id: 'question1',
    question: "I have been able to laugh and see the funny side of things.",
    options: ["As much as I always could",
"Not quite so much now",

"Definitely not so much now",

"Not at all"],
  },
  {
    id: 'question2',
    question: "I have looked forward with enjoyment to things",
    options: ["As much as I ever did",

"Rather less than I used to",

"Definitely less than I used to",

"Hardly at all"],
  },
  {
    id: 'question3',
    question: "I have blamed myself unnecessarily when things go wrong?",
    options: ["Yes, most of the time",

"Yes, some of the time",

"Not very often",

"No, never"],
  },
  {
    id: 'question4',
    question: " I have felt anxious or worried for no good reason",
    options: ["Yes very often",
"Yes, sometimes",

"Hardly ever",

"No not at all"],
  },
  {
    id: 'question5',
    question: " I have felt scared or panicky for no very good reason",
    options: ["Yes, quite a lot", "Yes, sometimes", "No, not much", "No, not at all"],
  },
  {
    id: 'question6',
    question: "I have felt overwhelmed or unable to cope",
    options: ["Yes, most of the time",

"Yes, sometimes",

"Rarely",

"No, not at all"],
  },
  {
    id: 'question7',
    question: " I have been so unhappy that I’ve had difficulty sleeping",
    options: ["Yes, most of the time", "Yes, sometimes", "Not very often", "No, not at all"],
  },
  {
    id: 'question8',
    question: "I have felt sad or miserabley",
    options: ["Yes, most of the time", "Yes, quite often", "Not very often","No, not at all"],
  },
  {
    id: 'question9',
    question: "I have been so unhappy that I have been crying",
    options: ["Yes, most of the time", "Yes, quite often", "Only occasionally", "No, never"],
  },
  {
    id: 'question10',
    question: "I have thought of harming myself",
    options: ["Yes, quite often", "Sometimes", "Hardly ever", "Never"],
  },
  {
    id: 'question11',
    question: "Do you feel that you have enough support from family or friends?",
    options: ["Yes, I do", "Not really", "Sometimes"],
  },
  {
    id: 'question12',
    question: "Are you currently experiencing financial or housing stress?",
    options: ["Yes, I am", "No, I am not", "Sometimes, I get worried"],
  },
  {
    id: 'question13',
    question: " Do you feel safe in your home and relationships?",
    options: ["Yes, I do", "No, I do not", "Sometimes"],
  },
  {
    id: 'question14',
    question: "Do you have a history of anxiety, depression, or trauma?",
    options: ["Yes, I do", "No, I do not", "I am not sure"],
  },
  {
    id: 'question15',
    question: "Would you like to speak to someone about how you’re feeling?",
    options: ["Yes, I would like to", "No, not right now", "I am not sure Submit"],
  }, 
];

const MentalHealth = () => {
  const [answers, setAnswers] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Survey Answers:", answers);
  };
 const showAlert = () => {
    alert("Response saved");
  };

  return (
    <div>
      <div className="min-h-screen bg-[#ffe4ec] text-gray-800 flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl items-center">
          <div className="text-center md:text-left">
            <h1
              className="text-5xl sm:text-6xl font-extrabold leading-tight"
              style={{
                color: '#d6336c',
                WebkitTextStroke: '1.5px #d6336c',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Fredoka', sans-serif",
              }}
            >
              Mental Health
              <br /> Questionnaire
            </h1>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              While many mothers are worried about their baby during pregnancy,
              they tend to forget about self-care. We do mental health surveys to
              check in on how the mother is coping emotionally. Pregnancy brings
              big physical, hormonal, and life changes, which can increase the
              risk of mental health issues like anxiety, depression, or stress.
            </p>
            <p>
              These tools are a simple but powerful way to pause and ask, <em>"How are you really doing?"</em> They help healthcare providers understand how a
              mother is coping emotionally and catch early signs of mental health
              struggles that might otherwise be missed.
            </p>
            <p>
              By routinely checking in on mental health during pregnancy, we can
              offer support, connect mothers with helpful resources, and remind
              them that taking care of themselves is a vital part of taking care
              of their growing baby.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f7bbd637] px-8 py-20 w-full">
        <div className="bg-[#f8d9e6] p-8 border-4 border-dashed border-[#ff8fb1] rounded-xl space-y-10 max-w-6xl mx-auto">
          <div>
            <h2
              className="text-2xl font-extrabold text-center mb-4"
              style={{
                color: '#ffffff',
                WebkitTextStroke: '1px #e11d48',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Fredoka', sans-serif",
              }}
            >
              Why does it matter:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base text-pink-700">
              <li><strong>Early detection</strong>: We want to catch any problems before it gets worse</li>
              <li><strong>Better support</strong>: If someone is struggling, they can get counseling, therapy, or further help</li>
              <li><strong>Healthier outcomes</strong>: When the mother is happy, the baby’s development is better</li>
            </ul>
          </div>

          <div>
            <h2
              className="text-2xl font-extrabold text-center text-rose-600 mb-4"
              style={{
                color: '#e11d48',
                WebkitTextStroke: '1px #e11d48',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Fredoka', sans-serif",
              }}
            >
              What is used to measure:
            </h2>
            <p className="text-base text-pink-900">
              The <strong>Edinburgh Postnatal Depression Scale (EPDS)</strong> screens for depression, anxiety, stress, and emotional well-being. This will include a comprehensive list of questions. Your score will determine if there is any need for further evaluation or lifestyle changes.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-5 mt-10">
          <div className="bg-[#f6d3e2] p-8 border-4 border-dashed border-[#ff8fb1] h-56 rounded-xl space-y-10 max-w-6xl mx-auto">
            <h2
              className="text-2xl font-extrabold text-center mb-4"
              style={{
                color: '#ffffff',
                WebkitTextStroke: '1px #e11d48',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Fredoka', sans-serif",
              }}
            >
              Mood and Emotions:
            </h2>
            <p className="text-pink-900 text-xl">
            Please answer the following questions based on the past 7 days. We understand that you may have had previous mental health issues, but we are mainly focused on your emotions for the past week.
            </p>
          </div>
          <div className="bg-[#f6d5e3] p-8 border-4 border-dashed border-[#ff8fb1] h-56 rounded-xl space-y-10 max-w-6xl mx-auto">
            <h2
              className="text-2xl font-extrabold text-center mb-4"
              style={{
                color: '#ffffff',
                WebkitTextStroke: '1px #e11d48',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Fredoka', sans-serif",
              }}
            >
              Lifestyle and Support
            </h2>
            <p className="text-pink-900 text-xl">
              Please answer the questions based on how your pregnancy is going thus far. These next five questions are for our own information on how external factors are playing in on your mental health.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-10 justify-center text-pink-900 mt-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-row gap-8">
              <div className="w-1/2">
                {questions.slice(0, 10).map((q) => (
                  <div key={q.id} className="question mb-6">
                    <label className="block text-lg font-semibold mb-2">{q.question}</label>
                    <div className="options space-y-2">
                      {q.options.map((opt, idx) => (
                        <label key={idx} className="flex items-center">
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={answers[q.id] === opt}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-1/2">
                {questions.slice(10).map((q) => (
                  <div key={q.id} className="question mb-6">
                    <label className="block text-lg font-semibold mb-2">{q.question}</label>
                    <div className="options space-y-2">
                      {q.options.map((opt, idx) => (
                        <label key={idx} className="flex items-center">
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={answers[q.id] === opt}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              onClick={showAlert}
              className="bg-[#ff8fb1] text-pink-900 px-4 py-2 rounded-xl font-bold text-lg mx-auto block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;