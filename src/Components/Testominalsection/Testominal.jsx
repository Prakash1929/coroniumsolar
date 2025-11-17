import React from "react";
import { BsSunFill } from "react-icons/bs";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const Testominal = () => {
  const testimonials = [
    {
      img: "https://www.coroniumsolar.com/assets/images/resources/testimonial1.jpg",
      name: "Mr. G Srivas",
      review: `It is very happy to say that, 
      Coronium is a non conventional energy company engaged in SOLAR POWERED ENERGY Establishment.
      I am a 100% satisfied customer for their services for four years.
      I wish this company to grow more heights to reach up in the sky.`,
      stars: 5,
    },
    {
      img: "https://www.coroniumsolar.com/assets/images/resources/testimonial2.jpg",
      name: "Mr. Anil Singh",
      review: `"Very professional and reliable services."`,
      stars: 5,
    },
  ];

  return (
    <section
    id="testimonial"
      className="relative w-full py-24 flex flex-col items-center text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-600/40 to-transparent"></div>

      {/* Title */}
      <div className="relative z-10 text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-3">
          <BsSunFill className="text-white text-2xl" />
          <span className="text-white text-lg tracking-wide uppercase font-semibold">
            Our Testimonial
          </span>
        </div>

        <h2 className="text-5xl font-extrabold drop-shadow-xl">
          People’s Talk About Us
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl px-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="
              relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl
              border border-white/20 
              transition-all duration-500 
              hover:scale-105 
              hover:border-white/0
            "
          >
            {/* Animated border frame */}
            <div
              className="
                absolute inset-0 rounded-2xl border border-white/30 
                pointer-events-none 
                transition-all duration-500 
                opacity-100 hover:opacity-0
              "
            ></div>

            {/* Quote Icon */}
            <FaQuoteRight className="absolute top-4 right-4 text-white/40 text-3xl" />

            {/* Person Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.img}
                alt="testimonial"
                className="w-16 h-16 rounded-full object-cover border-2 border-white/70 shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{t.name}</h3>

                <div className="flex text-yellow-300">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* Review */}
            <p className="text-gray-200 leading-relaxed text-sm">{t.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testominal;
