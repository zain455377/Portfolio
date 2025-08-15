import React from 'react';
import { FaDownload } from 'react-icons/fa';

const ResumeButton = () => {
  return (
    <div className="text-center bg-[#1e293b] dark:bg-gray-800 py-6">
      <a
        href={`${process.env.PUBLIC_URL}/Zain-UL-Abedin-Khan.pdf`}
        download
        className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-md"
      >
        <FaDownload />
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;