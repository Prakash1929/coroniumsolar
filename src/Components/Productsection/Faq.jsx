import React, { useState } from "react";

const faqData = [
  {
    question: "What services does Coronium Solar offer?",
    answer:
      "We provide installation, maintenance, and consultation for solar panels and renewable energy solutions.",
  },
  {
    question: "Where are you located?",
    answer:
      "We operate in Bilaspur, Chhattisgarh, serving residential and commercial clients.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Typically, installation takes 2–5 days depending on the system size and site conditions.",
  },
  {
    question: "Do you offer maintenance services?",
    answer:
      "Yes, we provide regular maintenance packages to ensure optimal system performance.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('https://www.coroniumsolar.com/assets/images/shapes/faqs-shape-1-1.png')",
      }}
    >
      <div className="absolute inset-0 bg-white/95 -z-10"></div>

      <div className="relative z-10 max-w-7xl w-full px-4 md:px-6 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-6">
        
        {/* LEFT SIDE IMAGES */}
        <div className="flex gap-4 w-full md:w-2/5 justify-center md:justify-start">
          <div className="w-1/2 md:w-3/5">
            <img
              src="https://www.coroniumsolar.com/assets/images/resources/faqs-2-1.jpg"
              alt="FAQ"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-1/2 md:w-2/5">
            <img
              src="https://www.coroniumsolar.com/assets/images/resources/faqs-2-2.jpg"
              alt="FAQ small"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-full md:w-3/5">
          <p className="text-green-500 font-semibold text-lg md:text-xl mb-2 text-center md:text-left">
            Some Questions for Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left leading-tight">
            Some FAQ Questions?
          </h2>

          <div className="flex flex-col gap-3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left hover:text-green-600"
                >
                  <span className="mr-2 text-green-500 font-bold">
                    {index + 1}.
                  </span>
                  <span className="flex-1">{item.question}</span>
                  <span className="text-xl font-bold">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-4 overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? "max-h-40 py-2" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FLOATING DECOR SHAPE */}
      <div className="absolute bottom-4 right-4 w-28 h-28 md:w-44 md:h-44 animate-slow-bounce">
        <img
          src="https://www.coroniumsolar.com/assets/images/shapes/faqs-1-1.png"
          alt="decor"
          className="w-full h-full object-contain"
        />
      </div>

      <style>
        {`
        @keyframes slowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-slow-bounce {
          animation: slowBounce 4s ease-in-out infinite;
        }
      `}
      </style>
    </section>
  );
};

export default Faq;
