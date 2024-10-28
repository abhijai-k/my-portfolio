import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Riss Technologies',
      position: 'MERN Stack Developer Intern',
      duration: 'January 2024 - June 2024',
      description: 'Developed and maintained web applications using the MERN stack, collaborated with cross-functional teams to implement features, and ensured responsive design and user-friendly functionality.',
    }
  ];

  return (
    <section id="experience" className="bg-neutral-950 text-white py-16">
      <h2 className="text-3xl font-bold mb-6 text-lime-600 text-center">Experience</h2>
      <div className="max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 bg-black p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-lime-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-black font-bold">🏢</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{exp.position} at {exp.company}</h3>
                <p className="text-gray-400">{exp.duration}</p>
              </div>
            </div>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
