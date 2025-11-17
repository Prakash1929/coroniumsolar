import React from "react";
import Spectram from "./Spectram";


const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-stretch ">

        {/* Left Side */}
        <div className="md:w-1/2 relative flex items-center justify-center border border-gray-200 overflow-hidden">

          {/* Background Hero Shape */}
          <div
            className="absolute inset-0 z-10 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage:
                "url('https://www.coroniumsolar.com/assets/images/shapes/hero-shape-1-1.png')",
            }}
          ></div>

          {/* Floating Shape */}
          <div className="absolute z-20 bottom-0 left-0 w-full flex justify-start">
            <img
              src="https://www.coroniumsolar.com/assets/images/shapes/about-1-1.png"
              alt="Floating Shape"
              className="w-40 md:w-60 opacity-80 animate-bounce-slow"
            />
          </div>

          {/* 15+ Years Badge */}
          <div
            className="absolute top-[135px] left-[344px] w-[250px] h-[100px] cursor-pointer group"
          >
            {/* Polygon Background */}
            <div className="absolute top-0 left-0 h-[25px] w-[10%] bg-green-600 clip-polygon transition-all duration-500 hover:w-full mb-10 mt-10"></div>

            {/* Text */}
            <h3
              className="absolute text-[54px] font-bold text-green-600 transition-colors duration-500 group-hover:text-black "
              style={{ top: "-79px", right: "163px" }}
            >
              15<sub>+</sub>
            </h3>
            <p
              className="absolute text-base font-normal text-black transition-colors duration-500 group-hover:text-black "
              style={{ top: "-16px", right: "133px" }}
            >
              Years of Experience
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 border border-gray-200 p-8 flex flex-col items-start bg-white">
          <div className="flex items-center gap-2 mb-2">
            <img src="/imgs/solar.png" alt="Solar Icon" className="w-6 h-6" />
            <span className="text-green-600 font-bold uppercase">ABOUT US</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold font-[Poppins] mb-4 animate-fade-up">
            We Are the Premiere Choice
          </h2>

          <p className="text-green-600 font-[Poppins] leading-relaxed text-justify">
            Coronium Solar is a professional consultancy firm engaged in business of Renewable Power projects. We provide full end-to-end solutions for all solar products, backed by technocrat personalities.
          </p>

          <p className="text-gray-600 font-[Poppins] leading-relaxed text-justify mt-6 mb-8">
            Founded by professional technocrats from Engineering, Energy, Management, and Marketing, Coronium Solar combines strengths and experience of over 10 years to provide affordable, innovative, and high-quality renewable energy solutions in Chhattisgarh.
          </p>

          <p className="text-gray-600 font-[Poppins] leading-relaxed text-justify mb-12">
            We support clients from inception through land acquisition, design, detailing, integration, and commissioning as a turnkey solution. Based in Bilaspur, we work on multiple projects in Chhattisgarh, dedicating ourselves to leading the renewable energy sector.
          </p>
        </div>
      </div>

      <style>
        {`
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-bounce-slow {
            animation: bounceSlow 2.5s infinite ease-in-out;
          }

          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 0.8s ease-out forwards;
          }

          .clip-polygon {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        `}
      </style>
      
    </section>
  );
};

export default About;
