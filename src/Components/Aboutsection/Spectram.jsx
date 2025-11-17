import React from "react";
import { GiSolarPower } from "react-icons/gi";
import { FaTrafficLight } from "react-icons/fa";
import { PiSolarPanelFill } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";

const icons = [
  { icon: <GiSolarPower />, cap: "Best in Service" },
  { icon: <FaTrafficLight />, cap: "Product Range" },
  { icon: <PiSolarPanelFill />, cap: "Our Commitment" },
  { icon: <BiSupport />, cap: "Better Support" },
];

const Spectram = () => (
  <section className="relative">
    <div
      className="h-80 w-full"
      style={{
        backgroundImage:
          "url('https://www.coroniumsolar.com/assets/images/shapes/solar-item-bg-1-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div className="absolute top-0 left-0 h-80 w-full bg-[#60ab44] opacity-80"></div>

    <div className="absolute top-0 left-0 w-full h-80 flex flex-col items-start justify-center px-6 md:px-16">
      <h1 className="text-3xl md:text-6xl text-white font-bold font-[Poppins] capitalize leading-tight animate-fadeIn">
        We Cover The Whole Spectrum
      </h1>

      <div className="flex flex-wrap justify-center items-center mt-10 gap-8 md:gap-12 w-full">
        {icons.map((ele, index) => (
          <div
            key={index}
            className="flex items-center animate-fadeIn"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-white text-5xl md:text-8xl transition-transform duration-300 ease-in-out hover:scale-[1.1]">
                {ele.icon}
              </div>

              <div className="text-white text-base md:text-2xl mt-2">
                {ele.cap}
              </div>
            </div>
            {index !== icons.length - 1 && (
              <div className="hidden md:block h-24 w-[2px] bg-white mx-6"></div>
            )}
          </div>
        ))}
      </div>
    </div>

    <style>
      {`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}
    </style>
  </section>
);

export default Spectram;
