import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'eCommerce Website',
      description: 'A fully functional eCommerce platform built with React, featuring user authentication, a shopping cart, and secure checkout. The platform is designed to provide an optimal user experience across various devices, ensuring responsiveness and speed. Users can browse through a wide selection of products, add items to their cart, and complete purchases securely. Additionally, the website includes features such as user profiles, order history, and a search function to enhance usability. It is fully integrated with payment gateways, allowing for seamless transactions.',
      link: 'https://github.com/abhijai-k/ecommerce-website.git' // Replace with your GitHub link
    },
    {
      title: 'Event Management Website',
      description: 'A dynamic event management platform developed using React, designed to streamline the creation and management of various events. The website features a user-friendly dashboard, customizable event pages, and a seamless registration process, ensuring a smooth experience for both organizers and attendees. Key functionalities include real-time updates and comprehensive analytics to enhance event planning and execution.',
      link: 'https://github.com/abhijai-k/event-management-website.git' // Replace with your GitHub link
    },
    {
      title: 'Skin Disease Prediction',
      description: 'An innovative project utilizing Support Vector Machine (SVM) algorithms for the prediction of skin diseases based on image analysis. This application provides users with an interactive interface to upload skin lesion images and receive real-time predictions about potential conditions. It is designed to assist users in identifying skin diseases early, promoting timely medical consultation and treatment.',
      link: 'https://github.com/abhijai-k/Skin-disease-prediction-using-deep-learning.git' // Replace with your GitHub link
    }
  ];

  return (
    <section id="projects" className="bg-neutral-950 text-white py-16">
      <h2 className="text-3xl font-bold mb-6 text-lime-600">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div key={index} className="bg-black p-4 rounded-lg shadow-custom">
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-lime-600 text-black px-4 py-2 rounded-md hover:bg-lime-300 transition">
              More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
