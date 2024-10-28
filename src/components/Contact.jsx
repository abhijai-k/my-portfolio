import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section id="contact" className="bg-neutral-950 text-white py-16">
      <h2 className="text-3xl font-bold mb-6 text-lime-600 text-center">Contact Me</h2>
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/abhijaik" // Corrected to include https://
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-600 hover:text-lime-300"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/abhijai-k" // Replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-600 hover:text-lime-300"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.instagram.com/abhijai___" // Replace with your Instagram profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-600 hover:text-lime-300"
          >
            <FaInstagram size={40} />
          </a>
        </div>
        <p className="mb-4">Email: <span className="text-lg font-bold">abhijai2001@gmail.com</span> </p>{/* Replace with your email */}
        <p className="mb-4">Phone: <span className="text-lg font-bold">+91 9207926132</span> </p> {/* Replace with your phone number */}
        <p className="mt-4">Location: Kannur, Kerala, India</p>
      </div>
    </section>
  );
};

export default ContactMe;
