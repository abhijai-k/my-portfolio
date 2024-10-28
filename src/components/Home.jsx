import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Make sure to install react-icons

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = ["Frontend Developer", "React Enthusiast", "Web Developer"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [messages.length]);

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const handleProfileClick = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const handleKnowMoreClick = () => {
    window.scrollBy({ top: window.innerHeight * 2, behavior: 'smooth' });
  };

  return (
    <section 
      className="h-screen flex flex-col items-start justify-between text-white p-8" 
      style={{ 
        backgroundImage: 'url("https://example.com/your-background-image.jpg")', // Replace with your image URL
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <div className="flex flex-col items-start">
        <h1 className="text-5xl font-bold mb-4">Hi, I am <span className="text-lime-600">Abhijai K</span></h1>
        <h2 className="text-2xl text-gray-400 animate-fade">{messages[currentIndex]}</h2>
      </div>
      <div className="flex flex-col items-start mb-8">
        <button 
          onClick={handleProfileClick}
          className="bg-black border border-lime-600 text-white px-4 py-2 rounded-md mb-2 hover:bg-gray-800 hover:border-lime-300 transition">
          Show Profile
        </button>
        <button 
          onClick={handleKnowMoreClick}
          className="bg-lime-600 text-black px-4 py-2 rounded-md hover:bg-lime-300 transition">
          Know More
        </button>
      </div>
      <div className="flex justify-center mb-8">
        <button 
          onClick={handleScrollDown} 
          className="p-2 bg-transparent border-none focus:outline-none">
          <FaArrowDown className="text-lime-600 text-3xl animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Home;
