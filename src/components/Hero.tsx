import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import BeeAnimation from './BeeAnimation';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-teal-50 flex items-center justify-center relative overflow-hidden">
      <BeeAnimation />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Travel, Explore,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-teal-500 block">
                Connect 🌍
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up animation-delay-300">
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A global community where travelers meet hosts through meaningful volunteering experiences.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="https://ghumobee-new-qlo0.bolt.host/" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 min-w-[200px]">
                <Play size={20} className="group-hover:translate-x-1 transition-transform" />
                <span>Preview Website</span>
              </a>
              
              <a href="https://forms.gle/wwwd2E2psDSvX3dJ8" target="_blank" rel="noopener noreferrer" className="group bg-white hover:bg-teal-50 text-teal-600 border-2 border-teal-500 hover:border-teal-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 min-w-[200px]">
                <span>Become a Host</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-900">
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                <span>Coming Soon</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <span>🇮🇳</span>
                <span>Starting in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;