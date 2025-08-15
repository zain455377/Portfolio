import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Server Monitoring Dashboard',
    description: 'A comprehensive web-based dashboard built with React.js (frontend), Node.js + Express.js (backend), and MySQL (database).The application provides an interactive interface to manage server data, view user lists, and monitor server activity in real-time.',
    liveLink: 'https://yourportfolio.com',
    githubLink: 'https://github.com/zain455377/Server-Monitoring',
  },
  
  // Add more as needed
];

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-[#1e293b] dark:bg-gray-800 text-white" id="projects">
      <h2 className="text-4xl font-bold text-center text-pink-500 mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#334155] dark:bg-gray-700 rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
            </div>
            <div className="mt-auto flex gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;