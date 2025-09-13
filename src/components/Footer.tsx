import React from 'react';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Connecting travelers and hosts across India through meaningful volunteering experiences. 
              Building a community that celebrates cultural exchange and authentic travel.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={16} />
              <span className="text-sm">Starting in India • Expanding Globally</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#countdown" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Launch Timeline
                </a>
              </li>
              <li>
                <a href="#signup" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Stay Updated
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-4 mb-6">
              <a 
                href="mailto:support@ghumobee.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Mail size={16} />
                <span>support@ghumobee.com</span>
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-teal-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 GhumoBee. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-500 text-sm">Made with</span>
              <span className="text-yellow-400">🐝</span>
              <span className="text-gray-500 text-sm">in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;