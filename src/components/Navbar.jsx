import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black text-white transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Hamburger Button with thinner lines */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden focus:outline-none"
        >
          <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } absolute top-16 left-0 w-full md:relative md:top-0 md:w-auto md:flex space-x-4 bg-black md:bg-transparent md:flex-row flex-col items-center`}
        >
          <button onClick={() => scrollToSection('home')} className="py-2 hover:text-gray-400">Home</button>
          <button onClick={() => scrollToSection('about')} className="py-2 hover:text-gray-400">About</button>
          <button onClick={() => scrollToSection('projects')} className="py-2 hover:text-gray-400">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="py-2 hover:text-gray-400">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
