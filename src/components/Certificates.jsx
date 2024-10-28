import React, { useState } from 'react';
import meta from './assets/meta.jpg'; // Ensure this path is correct
import udemy from './assets/udemy.jpg'

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  const certificates = [
    {
      title: 'B.Tech in Computer Science Engineering',
      institution: 'Vimal Jyothi Engineering College',
      year: 'Graduated 2023',
      image: null, // No image for this certificate
    },
    {
      title: 'Front-End Developer Certificate',
      institution: 'Meta',
      year: 'Oct 2024',
      image: meta, // Include the image for this certificate
    },
    {
      title: 'MERN Stack Development Certificate',
      institution: 'Udemy',
      year: 'Oct 2024',
      image: udemy, // No image for this certificate
    },
  ];

  // Function to open the modal
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="certificates" className="bg-neutral-950 text-white py-16">
      <h2 className="text-3xl font-bold mb-6 text-lime-600 text-center">Certificates</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-black p-4 rounded-lg shadow-custom">
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-gray-400">{cert.institution}</p>
              <p className="mt-2 text-gray-500">{cert.year}</p>
              {cert.image && (
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="mt-4 rounded-md cursor-pointer max-w-[200px]" // Adjust max width here
                  onClick={() => openModal(cert.image)} // Open modal on click
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative max-w-[80%] max-h-[80%]">
            <img 
              src={selectedImage} 
              alt="Enlarged Certificate" 
              className="max-w-full max-h-full object-contain" // Ensure image fits nicely
            />
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 text-black text-2xl font-bold"
            >
              &times; {/* Close button */}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
