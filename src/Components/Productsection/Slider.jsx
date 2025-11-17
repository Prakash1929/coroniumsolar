import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { title: "Solar PCU & Inverters", image: "https://www.coroniumsolar.com/assets/images/service/p1.jpg" },
  { title: "Solar LED Lantern", image: "https://www.coroniumsolar.com/assets/images/service/p2.jpg" },
  { title: "Solar Home Lights 10W to 150W", image: "https://www.coroniumsolar.com/assets/images/service/p3.jpg" },
  { title: "Solar Water Heater", image: "https://www.coroniumsolar.com/assets/images/service/p4.jpg" },
  { title: "Solar Street Lights & High Masts", image: "https://www.coroniumsolar.com/assets/images/service/p5.jpg" },
  { title: "Solar Pump", image: "https://www.coroniumsolar.com/assets/images/service/p6.jpg" },
  { title: "Solar Photovoltaic Power Plant", image: "https://www.coroniumsolar.com/assets/images/service/p7.jpg" },
  { title: "1 KW Solar System", image: "https://www.coroniumsolar.com/assets/images/service/p8.jpg" },
  { title: "Solar Touchless Automatic Temperature Sensor & Sanitizer Dispenser", image: "https://www.coroniumsolar.com/assets/images/service/p4.jpg.png" },
];

const OnSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="relative max-w-7xl mx-auto px-2 sm:px-4 py-8 md:py-12">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="px-2 sm:px-3">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-105">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-3xl"></div>
              <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-green-600 bg-opacity-90 text-center rounded-b-3xl">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold drop-shadow-lg">
                  {slide.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="z-50">
        {/* Desktop Arrows */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="hidden md:flex w-12 h-12 rounded-full bg-green-600 shadow-lg items-center justify-center text-white font-bold hover:bg-green-700 transition-colors absolute"
          style={{ bottom: '465px', right: '88px' }}
        >
          &#60;
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="hidden md:flex w-12 h-12 rounded-full bg-green-600 shadow-lg items-center justify-center text-white font-bold hover:bg-green-700 transition-colors absolute"
          style={{ bottom: '465px', right: '25px' }}
        >
          &#62;
        </button>

        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="w-10 h-10 rounded-full bg-green-600 shadow-lg flex items-center justify-center text-white font-bold hover:bg-green-700 transition-colors"
          >
            &#60;
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="w-10 h-10 rounded-full bg-green-600 shadow-lg flex items-center justify-center text-white font-bold hover:bg-green-700 transition-colors"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnSlider;
