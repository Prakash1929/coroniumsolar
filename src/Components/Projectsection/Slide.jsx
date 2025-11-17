import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brandImages = [
  "https://www.coroniumsolar.com/assets/images/brand/brand-1-1.png",
  "https://www.coroniumsolar.com/assets/images/brand/brand-1-2.png",
  "https://www.coroniumsolar.com/assets/images/brand/brand-1-3.png",
  "https://www.coroniumsolar.com/assets/images/brand/brand-1-4.png",
  "https://www.coroniumsolar.com/assets/images/brand/brand-1-5.png",
];

const brandImagesHover = [
  "https://www.coroniumsolar.com/assets/images/brand/brand-hover-1-1.png",
  "https://www.coroniumsolar.com/assets/images/brand/brand-hover-1-2.png",
  "https://www.coroniumsolar.com/assets/images/brand/brand-hover-1-3.png",
  "https://www.coroniumsolar.com/assets/images/brand/brand-hover-1-4.png",
  "https://www.coroniumsolar.com/assets/images/brand/brand-hover-1-5.png",
];

const Slide = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 100,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="w-full py-14 px-6 overflow-hidden">
      <Slider {...settings}>
        {brandImages.map((img, index) => (
          <div key={index} className="flex justify-center px-4 py-6">
            <img
              src={hoverIndex === index ? brandImagesHover[index] : img}
              alt="brand logo"
              className="h-24 w-auto opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer drop-shadow-md"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
