import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "Projects", href: "#projects" },
    { name: "Ratings", href: "#ratings" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-20 border-b border-green-200 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center h-20">
        <a href="/" className="flex-shrink-0">
          <img
            src="https://www.coroniumsolar.com/assets/images/logo4.png"
            alt="Logo"
            className="h-14 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link,idx) => (
            <a
            
              key={idx}
              href={link.href}
              className="text-gray-700 font-medium text-[16px] relative group transition-all"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-gray-700 hover:text-green-600 transition">
            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1a1a1a]/90 text-white shadow-2xl z-20 transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } font-[Poppins]`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <img
            src="https://www.coroniumsolar.com/assets/images/logo4.png"
            alt="Mobile Logo"
            className="h-12"
          />
          <button onClick={() => setIsOpen(false)}>
            <svg
              className="h-7 w-7 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 pt-4 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-medium tracking-wide text-gray-200 hover:text-green-400 transform transition-all duration-500 ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
