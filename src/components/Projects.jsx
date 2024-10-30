import React, { useState } from 'react';

// Sample images - Replace these with your actual image paths
import ecommerceImage1 from '../components/assets/ecommerceImage1.png';
import ecommerceImage2 from '../components/assets/ecommerceImage2.png';
import ecommerceImage3 from '../components/assets/ecommerceImage3.png';
import eventImage1 from '../components/assets/eventImage1.png';
import eventImage2 from '../components/assets/eventImage2.png';
import hardwaresImage1 from '../components/assets/sj1.png';
import hardwaresImage2 from '../components/assets/sj2.png';

const Projects = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const projectData = [
    {
      title: 'eCommerce Website',
      description: 'A fully functional eCommerce platform built with React, featuring user authentication, a shopping cart, and secure checkout. The platform is designed to provide an optimal user experience across various devices, ensuring responsiveness and speed. Users can browse through a wide selection of products, add items to their cart, and complete purchases securely. Additionally, the website includes features such as user profiles, order history, and a search function to enhance usability.',
      link: 'https://github.com/abhijai-k/ecommerce-website.git',
      liveLink: 'https://my-ecommerce-websitee.netlify.app',
      images: [ecommerceImage1, ecommerceImage2, ecommerceImage3]
    },
    {
      title: 'Event Management Website',
      description: 'This project, a dynamic event management platform, showcases my freelance work in developing a responsive single-page website using React. The site allows users to easily navigate through customizable event pages and provides key functionalities such as real-time updates and comprehensive analytics to enhance event planning and execution. Its responsive design guarantees optimal performance across all devices.',
      link: 'https://github.com/abhijai-k/event-management-website.git',
      liveLink: 'https://devieventmanagement.site',
      images: [eventImage1, eventImage2]
    },
    {
      title: 'Hardwares Shop Website',
      description: 'A responsive React website designed to showcase a hardware shop\'s offerings. This project emphasizes user-friendly navigation and highlights various product categories, providing visitors with an easy way to explore available tools and materials. The site is optimized for different devices, ensuring a smooth browsing experience.',
      link: 'https://github.com/abhijai-k/sj-hardwares.git', // Update with actual link
      liveLink: 'https://sjhardwares.in', // Update with your live project link
      images: [hardwaresImage1, hardwaresImage2] // Add actual image paths
    },
    {
      title: 'Skin Disease Prediction',
      description: 'An innovative project utilizing Support Vector Machine (SVM) algorithms for the prediction of skin diseases based on image analysis. This application provides users with an interactive interface to upload skin lesion images and receive real-time predictions about potential conditions. It is designed to assist users in identifying skin diseases early, promoting timely medical consultation and treatment.',
      link: 'https://github.com/abhijai-k/Skin-disease-prediction-using-deep-learning.git'
    }
  ];

  const openModal = (images) => {
    setSelectedImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="bg-neutral-950 text-white py-16">
      <h2 className="text-3xl font-bold mb-6 text-lime-600">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div key={index} className="bg-black p-4 rounded-lg shadow-custom">
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Project ${index + 1} - View ${imgIndex + 1}`}
                    className="cursor-pointer"
                    onClick={() => openModal(project.images)}
                  />
                ))}
              </div>
            )}
            <div className="flex space-x-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-lime-600 text-black px-4 py-2 rounded-md hover:bg-lime-300 transition">
                Source Code
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-4 py-2 rounded-md animate-pulse"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for images */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative">
            <button onClick={closeModal} className="absolute top-0 right-0 m-2 text-white">X</button>
            <div className="flex overflow-x-auto">
              {selectedImages.map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt={`View of selected ${imgIndex + 1}`} className="w-full max-w-xs mx-2" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
