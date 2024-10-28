import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';

function App() {
  return (
      <div className="bg-black text-white">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience/>
        <Certificates/>
        <Contact />
      </div>
  );
}

export default App;
