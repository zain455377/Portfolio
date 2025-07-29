import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone
} from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <footer className="bg-[#1e293b] dark:bg-gray-800 text-gray-100 dark:text-gray-200 py-12 px-6">
      {/* Contact Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-10">
        {/* Location */}
        <div>
          <FaMapMarkerAlt className="mx-auto text-pink-600 text-3xl mb-2" />
          <h3 className="text-lg font-semibold text-pink-600 uppercase">Where to find me</h3>
          <p className="mt-2 text-gray-300">New Mumtazabad, Multan<br />60600</p>
        </div>

        {/* Email */}
        <div>
          <FaEnvelope className="mx-auto text-pink-600 text-3xl mb-2" />
          <h3 className="text-lg font-semibold text-pink-600 uppercase">Email me at</h3>
          <p className="mt-2 text-gray-300">zainjamil455@gmail.com</p>
        </div>

        {/* Call */}
        <div>
          <FaPhone className="mx-auto text-pink-600 text-3xl mb-2" />
          <h3 className="text-lg font-semibold text-pink-600 uppercase">Call me at</h3>
          <p className="mt-2 text-gray-300">
            Phone: +92 (<span className="text-pink-600">3136481745</span>)
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://github.com/zain455377"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-600 transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/zain-ul-abedin-khan-6773b4247"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-600 transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/zainkhanam455"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-600 transition text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:zainjamil455@gmail.com"
          className="text-gray-400 hover:text-pink-600 transition text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-sm text-gray-400">
        © Copyright {new Date().getFullYear()} | Designed by{' '}
        <span className="font-semibold text-white">Zain Ul Abedin Khan</span>
      </p>
    </footer>
  );
};

export default SocialLinks;