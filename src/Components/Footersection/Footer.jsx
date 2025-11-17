import React from "react";
import Contact from "./Contact";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Contact />

      <section
        className="w-full text-white"
        style={{ backgroundColor: "#1e201e" }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              About <span className="text-green-300">Coronium Solar</span>
            </h3>

            <p className="text-white text-sm leading-relaxed mb-6">
              Coronium Solar is a Professional consultancy firm engaged in 
              the business of Renewable Power projects. We provide full 
              End-to-End solutions for all Solar Products.
            </p>

            
            <h4 className="text-lg font-semibold text-green-300 mb-2">
           <span className="text-white">Our</span> Address
            </h4>

            <p className="text-white text-sm leading-relaxed">
              Near Tifra Over Bridge, BD Complex Vikas Nagar  
              Tifra, Bilaspur (C.G.)
            </p>

            <p className="text-white text-sm leading-relaxed mt-3">
              Prakash Industrial Estate  
              Near Rajendra Nagar Metro Station  
              Ramakrishna Vihar GT Road, Noida,  
              Sahibabad, Ghaziabad UP 201005
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-300">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
                <FaFacebookF className="text-green-700 text-lg" />
              </a>

              <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
                <FaInstagram className="text-green-700 text-lg" />
              </a>

              <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
                <FaLinkedinIn className="text-green-700 text-lg" />
              </a>

              <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
                <FaYoutube className="text-green-700 text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Coronium Solar. All Rights Reserved.
        </div>
      </section>
    </>
  );
};

export default Footer;
