import React from 'react';

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#1e293b] dark:bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-pink-500">Portfolio</h1>

        <nav>
          <ul className="flex space-x-6">
            {links.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-base font-medium hover:text-pink-500 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;