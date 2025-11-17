import React from 'react';
import { GiSolarPower } from "react-icons/gi";
import OnSlider from './Slider';
import Cta from './Cta';
import Faq from './Faq';

const Product = () => {
  return (
    <>
    <section id='products' className='w-full bg-[#202220] py-12 sm:py-16 md:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center md:text-left mb-12'>
          <h3 className='flex items-center justify-center md:justify-start text-lg sm:text-xl text-[#55943f] uppercase gap-2 mb-4'>
            <GiSolarPower className='text-3xl sm:text-4xl' />
            Our Best Rated Products
          </h3>
          <h2 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            What We Offer
          </h2>
        </div>
        <div className="w-full">
          <OnSlider />
        </div>
      </div>
     <div className='mt-20 p-10 mb-0 '>
      <Cta/>
     </div>
     <div>
      
     </div>
    </section>
    <Faq/>
    </>
  );
}

export default Product;
