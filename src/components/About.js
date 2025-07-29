import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-[#1e293b] text-white dark:bg-gray-800 dark:text-white"
    >
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-pink-400">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi! I’m a Full Stack Web Developer with a passion for building modern, responsive web applications. I work with React, HTML, CSS, JavaScript, TailwindCSS, Node.js, Express, SQL, and MongoDB to create seamless user experiences and efficient backends. 🚀
        </p>
      </div>
    </section>
  );
};

export default About;