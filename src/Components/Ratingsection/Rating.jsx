import React from "react";
import { BsSunFill } from "react-icons/bs";

const Rating = () => {
  const ratingImages = [
    "https://www.coroniumsolar.com/assets/images/ratings/1.jpg",
    "https://www.coroniumsolar.com/assets/images/ratings/2.jpg",
    "https://www.coroniumsolar.com/assets/images/ratings/3.jpg",
    "https://www.coroniumsolar.com/assets/images/ratings/4.jpg",
    "https://www.coroniumsolar.com/assets/images/ratings/5.jpg",
    "https://www.coroniumsolar.com/assets/images/ratings/6.jpg",
    "https://www.coroniumsolar.com/assets/images/ratings/7.jpg",
  ];

  return (
    <>
        <section id="ratings"
      className="w-full py-20 text-center"
      style={{
        backgroundImage: "linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)",
      }}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <BsSunFill className="text-green-700 text-3xl" />
        <span className="text-green-800 text-xl font-semibold tracking-wide uppercase">
          Our Ratings & Affiliations
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-14">
        Ratings and Affiliations
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 px-6 max-w-7xl mx-auto">
        {ratingImages.map((img, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={img}
              alt="rating"
              className="w-36 h-36 sm:w-40 sm:h-40 object-contain bg-white p-5 rounded-2xl 
              shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Rating;
