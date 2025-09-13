import React from "react";
import { Users, MapPin, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About GhumoBee 🐝
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With GhumoBee instead of just visiting a place, our travelers become part of it,
            contributing their skills, creativity, and energy in exchange for
            stay, meals, and cultural immersion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Host Section */}
          <div className="group">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-2">
                  <span>For Hosts</span>
                  <span className="text-3xl">👨‍🌾</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Farm owners, homestays, and hotels can connect with skilled
                  volunteers who bring fresh perspectives and helping hands to
                  your community.
                </p>
                <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>Local Impact</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart size={16} />
                    <span>Cultural Exchange</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Section */}
          <div className="group">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MapPin size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-2">
                  <span>For Volunteers</span>
                  <span className="text-3xl">🎒</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Travelers, students, and creators can explore India
                  authentically while contributing their skills and making
                  meaningful connections.
                </p>
                <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>Authentic Travel</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart size={16} />
                    <span>Skill Sharing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats or Features */}
        {/* <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-yellow-500">500+</div>
              <div className="text-sm text-gray-600">Potential Hosts</div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="text-3xl font-bold text-teal-500">28</div>
              <div className="text-sm text-gray-600">Indian States</div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <div className="text-3xl font-bold text-yellow-500">1000+</div>
              <div className="text-sm text-gray-600">Early Users</div>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-3xl font-bold text-teal-500">∞</div>
              <div className="text-sm text-gray-600">Possibilities</div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;
