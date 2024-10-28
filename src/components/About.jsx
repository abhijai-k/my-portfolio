import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-neutral-950 text-white py-16">
      <div className="max-w-4xl mx-auto p-6 bg-black rounded-lg shadow-custom"> {/* Ensure this is correct */}
        <h2 className="text-3xl text-lime-600 font-bold mb-4">About Me</h2>
        <p className="mb-4">
          I am a passionate frontend developer who loves creating stunning websites and applications. With a keen eye for design and a strong understanding of user experience, I strive to build interfaces that are not only visually appealing but also easy to use.
        </p>
        <p className="mb-4">
          My journey in web development began with a fascination for technology and design. Over the years, I have honed my skills in various frontend technologies such as <span className="text-lime-600">HTML, CSS, JavaScript, and React.</span> I enjoy staying up-to-date with the latest trends and best practices in the industry.
        </p>
      </div>
    </section>
  );
};

export default About;
