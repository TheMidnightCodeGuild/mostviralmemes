'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-black to-gray-900 py-6 rotate-3">
      <Marquee speed={40} gradient={false}>
        <span className="text-yellow-400 text-2xl mx-8 font-bold tracking-wider hover:text-white transition-colors duration-300">
          🚀 VIRAL CONTENT
        </span>
        <span className="text-yellow-400 text-2xl mx-8 font-bold tracking-wider hover:text-white transition-colors duration-300">
          💡 CREATIVE STRATEGY  
        </span>
        <span className="text-yellow-400 text-2xl mx-8 font-bold tracking-wider hover:text-white transition-colors duration-300">
          📈 GROWTH HACKING
        </span>
        <span className="text-yellow-400 text-2xl mx-8 font-bold tracking-wider hover:text-white transition-colors duration-300">
          🎯 TARGETED REACH
        </span>
      </Marquee>
    </section>
  );
};

export default Banner;
