import React, { useState, useEffect, useRef } from "react";

const Cta = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Email is invalid";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: "", email: "" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-12 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.coroniumsolar.com/assets/images/shapes/form-one-shape-2-2.png')",
          }}
        ></div>
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-green-400/50"></div>
          <div className="w-1/2 bg-white/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[calc(100%-100px)] mx-auto px-6 md:flex md:items-center md:justify-between gap-8">
        <div className="md:w-1/2 text-white md:text-left text-center">
          <p className="text-sm font-semibold uppercase mb-2">Get Free Consultancy</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Free Or Call Us For Consultancy
          </h2>
          <span className="text-4xl md:text-5xl font-extrabold relative inline-block stroke-text hover:fill-text cursor-pointer transition-all duration-300">
            07752 417684
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 mt-8 md:mt-0 bg-white rounded-xl p-6 md:p-8 shadow-lg flex flex-col gap-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">{errors.name}</span>
              )}
            </div>

            <div className="flex-1 flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">{errors.email}</span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold rounded-full py-3 hover:bg-green-600 transition"
          >
            Send Message &rarr;
          </button>
        </form>
      </div>

      <style>
        {`
          .stroke-text {
            color: transparent;
            -webkit-text-stroke: 2px white;
          }
          .stroke-text.hover\\:fill-text:hover {
            color: #fff;
            -webkit-text-stroke: 0px;
          }
          @media(min-width: 768px) {
            section::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, rgba(16,185,129,0.5) 50%, rgba(255,255,255,0.5) 50%);
              pointer-events: none;
              z-index: -20;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Cta;
