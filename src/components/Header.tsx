import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
            About
          </a>
          <a href="#countdown" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
            Launch
          </a>
          <a href="#signup" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
            Stay Updated
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;