import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
          <span className="text-xl animate-bounce">🐝</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-800 leading-none">GhumoBee</span>
        <span className="text-xs text-teal-500 font-medium">Travel • Explore • Connect</span>
      </div>
    </div>
  );
};

export default Logo;