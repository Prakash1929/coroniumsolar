import React, { useState } from "react";
import { FaPlus, FaMapMarkerAlt, FaBolt, FaSolarPanel } from "react-icons/fa";
import Slide from "./Slide";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (img, project) => {
    setSelectedImage(img);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedProject(null);
  };

  const projects = [
  {
    title: "Residential Solar Installation",
    location: "Raigarh, Chhattisgarh",
    capacity: "5.2 kW",
    images: [
      
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBlbmVyZ3l8ZW58MHx8MHx8fDA%3D",  // home solar wiring
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29sYXIlMjBlbmVyZ3l8ZW58MHx8MHx8fDA%3D",  // residential array
      "https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29sYXIlMjBlbmVyZ3l8ZW58MHx8MHx8fDA%3D",  // solar installer on roof
    ],
  },

  {
    title: "Commercial Solar Rooftop",
    location: "Bilaspur, Chhattisgarh",
    capacity: "12 kW",
    images: [
     
      "https://www.shutterstock.com/shutterstock/photos/2317458019/display_1500/stock-photo-aerial-view-of-blue-photovoltaic-solar-panels-mounted-on-industrial-building-roof-for-producing-2317458019.jpg",  // industrial solar plant
      "https://www.shutterstock.com/shutterstock/photos/2320484483/display_1500/stock-photo-aerial-view-of-solar-power-plant-with-blue-photovoltaic-panels-mounted-on-industrial-building-roof-2320484483.jpg",  // commercial sunlight panels
      "https://www.shutterstock.com/shutterstock/photos/2636371067/display_1500/stock-photo-solar-panels-installed-on-a-factory-rooftop-with-green-nature-trees-and-mountains-in-the-2636371067.jpg",  // aerial solar grid
    ],
  },

  {
    title: "Industrial Solar Setup",
    location: "Korba, Chhattisgarh",
    capacity: "25 kW",
    images: [
      
      "https://www.shutterstock.com/shutterstock/photos/2463952337/display_1500/stock-photo-two-solar-panel-installation-workers-wearing-safety-gear-are-installing-solar-panels-on-a-2463952337.jpg",  // solar farm
      "https://www.shutterstock.com/shutterstock/photos/2405334959/display_1500/stock-photo-side-view-of-two-caucasian-workers-hold-document-pad-and-tablet-check-and-maintenance-the-solar-2405334959.jpg",  // industrial panels
      "https://www.shutterstock.com/shutterstock/photos/2478428815/display_1500/stock-photo-two-warehouse-workers-wearing-hard-hats-and-safety-vests-are-looking-at-a-tablet-while-standing-in-2478428815.jpg",  // sunlight glare solar field
    ],
  },
];


  return (
   <>
     <section className="w-full min-h-screen py-20 px-6 md:px-12" style={{ backgroundColor: "#202220" }}>
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <FaSolarPanel className="text-green-300 text-3xl" />
          <span className="text-green-300 text-lg font-bold uppercase tracking-wide">Projects</span>
        </div>

        <h1 className="text-white text-4xl md:text-6xl font-bold mt-2">
          Our Incredible Projects
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-40 p-5 rounded-2xl shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 max-w-sm mx-auto"
          >
            <div className="grid grid-cols-3 gap-3">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="relative group h-28 rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => openModal(img, project)}
                >
                  <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <FaPlus className="text-white text-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-2">
              <h3 className="text-white text-xl font-semibold">{project.title}</h3>

              <p className="text-gray-300 flex items-center gap-2 text-sm">
                <FaMapMarkerAlt className="text-green-300" />
                {project.location}
              </p>

              <p className="text-gray-300 flex items-center gap-2 text-sm">
                <FaBolt className="text-yellow-300" />
                {project.capacity}
              </p>

              <button className="mt-3 w-full py-2 border border-green-300 text-green-300 rounded-lg font-medium transition-all duration-300 hover:bg-green-300 hover:text-black">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 w-[90%] max-w-sm relative shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-red-600 text-white w-9 h-9 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg hover:bg-red-700"
            >
              &times;
            </button>

            <img src={selectedImage} className="w-full h-48 object-cover rounded-lg" />

            <div className="mt-3 space-y-1">
              <h2 className="text-lg font-bold text-black">{selectedProject?.title}</h2>

              <p className="text-gray-700 flex items-center gap-2 text-sm">
                <FaMapMarkerAlt className="text-green-600" /> {selectedProject?.location}
              </p>

              <p className="text-gray-700 flex items-center gap-2 text-sm">
                <FaBolt className="text-yellow-500" /> {selectedProject?.capacity}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
    <Slide/>
   </>
  );
};

export default Projects;
