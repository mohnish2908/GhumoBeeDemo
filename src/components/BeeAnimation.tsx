import React from 'react';

const BeeAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dotted Path */}
      <svg className="absolute top-1/4 left-0 w-full h-1/2 opacity-20">
        <path
          d="M-50,150 Q200,50 400,100 T800,80 Q1000,60 1200,90"
          stroke="#FFC107"
          strokeWidth="3"
          strokeDasharray="8,12"
          fill="none"
          className="animate-dash"
        />
      </svg>
      
      {/* Flying Bee */}
      <div className="absolute top-1/4 left-0 animate-fly-path">
        <div className="text-2xl transform rotate-12 animate-wiggle">
          🐝
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/3 right-20 opacity-30 animate-float">
        <span className="text-4xl">✈️</span>
      </div>
      
      <div className="absolute bottom-1/3 left-20 opacity-30 animate-float animation-delay-2000">
        <span className="text-3xl">🏠</span>
      </div>
      
      <div className="absolute top-1/2 right-1/3 opacity-30 animate-float animation-delay-4000">
        <span className="text-3xl">🎒</span>
      </div>
    </div>
  );
};

export default BeeAnimation;