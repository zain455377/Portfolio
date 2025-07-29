import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const educationData = [
  {
    degree: "Bachelor's Degree",
    duration: "October 2021 - May 2025",
    institution: "Nawaz Sharif University of Agriculture",
    description:
      "Currently doing Internship as a Full Stack Web Developer at ustaff360."
  },
  {
    degree: "Intermediate",
    duration: "2018 - 2020",
    institution: "Nishat College of Science",
    description:
      "Completed my Intermediate through Multan Board at Nishat College of Science – Multan."
  },
  {
    degree: "Matriculation",
    duration: "2016 - 2018",
    institution: "Garrison Grammar High School",
    description:
      "Completed my Matriculation with Science from Garrison Grammar High School."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 bg-[#1e293b] text-white dark:bg-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-pink-500 font-semibold tracking-wide uppercase">Resume</h3>
          <h2 className="text-3xl font-bold">More of my Credentials</h2>
          <p className="text-pink-500 text-xl font-semibold mt-2">Education</p>
        </div>

        <div className="relative border-l-4 border-pink-500 ml-4 space-y-10">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-10">
              {/* Timeline Icon */}
              <div className="absolute -left-5 top-1">
                <span className="flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full shadow-lg">
                  <FaBriefcase />
                </span>
              </div>

              {/* Content */}
              <div className="bg-[#334155] dark:bg-gray-700 p-6 rounded-lg shadow transition">
                <div className="flex justify-between items-start flex-col md:flex-row md:items-center mb-1">
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <span className="text-sm text-gray-300 dark:text-gray-400">{item.duration}</span>
                </div>
                <h4 className="font-bold text-pink-400">{item.institution}</h4>
                <p className="mt-1 text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;