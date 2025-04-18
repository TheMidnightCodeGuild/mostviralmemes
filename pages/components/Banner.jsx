'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <section className='bg-[#FFDA22]'>
    <div className="w-full bg-gradient-to-r from-black via-yellow-900 to-black py-4 shadow-lg transform -rotate-3 overflow-y-auto ">
      <Marquee speed={40} gradient={true} gradientColor={[0, 0, 0]} gradientWidth={50}>
        <span className="text-[#fffff0] bg- text-2xl mx-8 font-bold tracking-wider hover:scale-110 transition-transform duration-200 flex items-center">
          <span className="text-3xl mr-3 animate-bounce">🚀</span> 
          VIRAL CONTENT
        </span>
        <span className="text-[#fffff0] text-2xl mx-8 font-bold tracking-wider hover:scale-110 transition-transform duration-200 flex items-center">
          <span className="text-3xl mr-3 animate-pulse">💡</span>
          CREATIVE STRATEGY
        </span>
        <span className="text-[#fffff0] text-2xl mx-8 font-bold tracking-wider hover:scale-110 transition-transform duration-200 flex items-center">
          <span className="text-3xl mr-3 animate-bounce">📈</span>
          GROWTH HACKING
        </span>
        <span className="text-[#fffff0] text-2xl mx-8 font-bold tracking-wider hover:scale-110 transition-transform duration-200 flex items-center">
          <span className="text-3xl mr-3 animate-pulse">🎯</span>
          TARGETED REACH
        </span>
      </Marquee>
    </div>
    </section>
  );
};

export default Banner;
