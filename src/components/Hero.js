import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import zainImage from "../assets/zain.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 bg-[#0f172a] text-white scroll-smooth"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 py-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I’m <span className="text-pink-500">Zain</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 typewriter max-w-xs md:max-w-md">
            Full Stack Web Developer
          </h2>
          <p className="text-gray-400 max-w-md">
            I love building fast and responsive web apps using React, TailwindCSS, and more.
          </p>
          <div className="flex gap-4 justify-center md:justify-start ">
            <a
              href="#contact"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl transition font-semibold "
            >
              Hire Me
            </a>
            <a
              href="#contact"
              className="border border-pink-600 text-pink-500 hover:bg-pink-700 hover:text-white px-6 py-3 rounded-xl transition font-semibold"
            >
              Let’s Talk
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 text-2xl transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={zainImage}
            alt="Zain Ul Abedin Khan"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-pink-500 shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;