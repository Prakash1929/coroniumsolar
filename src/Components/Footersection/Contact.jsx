import React from "react";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 text-white border-t border-white/20"
      style={{ backgroundColor: "#1e201e" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-12">

        {/* Left – Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <img
            src="https://www.coroniumsolar.com/assets/images/logo4.png"
            alt="Coronium Logo"
            className="w-36 sm:w-44 md:w-48 h-auto object-contain opacity-95 hover:opacity-100 transition-all"
          />
        </div>

        {/* Right – Contact Items */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 w-full md:w-auto justify-center">

          {/* Email */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <MdEmail className="text-green-700 text-lg" />
            </div>
            <a
              href="mailto:coroniumsolar@gmail.com"
              className="text-xs text-gray-200 group-hover:text-green-300 transition-all tracking-wide break-all"
            >
              coroniumsolar@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <BsTelephoneFill className="text-green-700 text-lg" />
            </div>
            <a
              href="tel:+919876543210"
              className="text-xs text-gray-200 group-hover:text-green-300 transition-all tracking-wide"
            >
              +91 98765 43210
            </a>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <IoTime className="text-green-700 text-lg" />
            </div>
            <p className="text-xs text-gray-200 group-hover:text-green-300 transition-all tracking-wide text-center sm:text-left">
              Mon–Sat: 10:00 AM – 6:00 PM
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Border + More Bottom Space */}
      <div className="mt-16 border-b border-white/40"></div>

    
    </section>
  );
};

export default Contact;
