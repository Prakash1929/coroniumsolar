import React, { useState, useEffect } from "react";

const TextHero = [
  {
    heading: "Harness of the power of the sun",
    para: "Join the renewable energy revolution with Coronium Solar. We provide cutting-edge solar energy solutions tailored to your needs, helping you save money and the planet.",
  },
  {
    heading: "Your Trusted Solar Partner",
    para: "Coronium Solar is dedicated to delivering exceptional solar system services in Bilaspur, Chhattisgarh. From installation to maintenance, we're here to power your future sustainably.",
  },
  {
    heading: "Innovative Solar Solutions",
    para: "Experience reliable and sustainable energy with Coronium Solar. Our top-quality solar panel installations in Bilaspur, Chhattisgarh, ensure you get the most out of every sunny day.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState("animate-slideInRight");

  const nextSlide = (i) => {
    setAnimation("animate-slideOutRight");
    setTimeout(() => {
      setIndex(i);
      setAnimation("animate-slideInRight");
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("animate-slideOutRight");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % TextHero.length);
        setAnimation("animate-slideInRight");
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home"
      className="relative h-screen flex items-center text-white px-6 md:px-10 overflow-hidden"
      style={{ background: "linear-gradient(60deg, #242625 30%, #909190 100%)" }}
    >
      <h1
        className="absolute bottom-[-20%] left-10 text-[calc(3.75rem+32px)] sm:text-[calc(4rem+32px)] md:text-[calc(4.5rem+32px)] lg:text-[calc(5rem+32px)] font-extrabold tracking-wider text-transparent opacity-20 whitespace-nowrap pointer-events-none select-none vertical-text animate-riseUp"
        style={{ WebkitTextStroke: "2px #9ca3af" }}
      >
        CORONIUM
      </h1>

      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-0">
        <img
          src="https://www.coroniumsolar.com/assets/images/shapes/hero-shape-1-1.png"
          alt="hero-shape"
          className="w-[150px] sm:w-[220px] md:w-[300px] lg:w-[350px] opacity-40"
        />
      </div>

      <div className={`max-w-xl md:max-w-2xl relative z-10 ${animation}`}>
        <h2 className="text-xs sm:text-sm tracking-[0.3em] uppercase font-[Poppins] typing">
          FUTURE OF SOLAR ENERGY
          <span className="typing-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-3 capitalize font-[Poppins]">
          {TextHero[index].heading}
        </h1>
        <p className="mt-4 text-base sm:text-lg opacity-90 font-[Poppins]">
          {TextHero[index].para}
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="px-6 py-3 rounded-md font-semibold bg-green-300 text-black border border-green-300 transition-all duration-300 hover:bg-transparent hover:text-green-300 hover:border-green-300">
            Our Products
          </button>
          <button className="px-6 py-3 rounded-md font-semibold bg-transparent border border-green-300 text-white transition-all duration-300 hover:bg-green-300 hover:text-black hover:border-green-300">
            Get a Quote
          </button>
        </div>
      </div>

      <div className="absolute right-6 bottom-6 flex gap-3 md:right-10 md:bottom-10">
        {TextHero.map((_, i) => (
          <button
            key={i}
            onClick={() => nextSlide(i)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 transition-all duration-300 ${
              index === i ? "bg-green-500 border-green-500" : "border-green-500"
            }`}
          ></button>
        ))}
      </div>

      <style>
        {`
          .vertical-text { writing-mode: vertical-rl; text-orientation: upright; }
          @keyframes riseUp { 0%{transform:translateY(100%);opacity:0;} 100%{transform:translateY(0);opacity:0.2;} }
          .animate-riseUp { animation: riseUp 2s ease-out forwards; }

          .typing { display:inline-block; white-space:nowrap; overflow:hidden; animation: typing 3s steps(24) infinite alternate; }
          .typing-dots span { color:#22c55e; animation:blink 1s infinite; margin-left:2px; }
          .typing-dots span:nth-child(2){animation-delay:0.2s;} .typing-dots span:nth-child(3){animation-delay:0.4s;}
          @keyframes typing {0%{width:0;}100%{width:100%;}} @keyframes blink{0%,50%,100%{opacity:0;}25%,75%{opacity:1;}}

          @keyframes slideInRight {0%{transform:translateX(100%);opacity:0;}100%{transform:translateX(0);opacity:1;}}
          @keyframes slideOutRight {0%{transform:translateX(0);opacity:1;}100%{transform:translateX(100%);opacity:0;}}
          .animate-slideInRight{animation:slideInRight 0.8s ease-out forwards;}
          .animate-slideOutRight{animation:slideOutRight 0.8s ease-out forwards;}
        `}
      </style>
    </section>
  );
};

export default Hero;
