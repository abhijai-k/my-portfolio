import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from 'react-icons/fa'; // Import necessary icons
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'; // Import icons for Tailwind CSS, MongoDB, and Express.js

const skillsData = [
  {
    title: 'HTML',
    icon: <FaHtml5 className="text-4xl" />,
  },
  {
    title: 'CSS',
    icon: <FaCss3Alt className="text-4xl" />,
  },
  {
    title: 'JavaScript',
    icon: <FaJsSquare className="text-4xl" />,
  },
  {
    title: 'React',
    icon: <FaReact className="text-4xl" />,
  },
  {
    title: 'Node.js',
    icon: <FaNodeJs className="text-4xl" />,
  },
  {
    title: 'MongoDB',
    icon: <SiMongodb className="text-4xl" />,
  },
  {
    title: 'Express.js',
    icon: <SiExpress className="text-4xl" />,
  },
  {
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-4xl" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-neutral-900 text-white py-16">
      <h2 className="text-3xl font-bold mb-6 text-white">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-black p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center text-lime-600">
              {skill.icon}
              <h3 className="text-xl font-bold mt-2 text-white">{skill.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
