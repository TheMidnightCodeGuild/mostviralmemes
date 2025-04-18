import React from "react";
import Link from "next/link";
import Image from "next/image";
import SplashCursor from "@/lib/SplashCursor";
const Landing = () => {
  return (
    <section className="h-[100vh] overflow-hidden">
      <SplashCursor />
      <div className=" h-full w-full flex items-center relative py-16 md:py-0 bg-[#FE9D2C]">
        {/* Background Image */}
        <Image
          src="/images/bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#fffff0] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#fffff0] opacity-30 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#fffff0] opacity-20 animate-ping"></div>
        
        {/* Hero Section */}
        <div className="lg:max-w-[1300px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 mb-8 md:mb-2 mx-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-normal text-black mb-2 masiku-font ">
                VIRAL <span className="text-[#fffff0] masiku-font [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,4px_4px_0_rgba(0,0,0,0.2)]">MEMES</span>
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-normal text-black mb-2 masiku-font ">
                ENGAGING
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-normal text-black mb-2 masiku-font ">
                CONTENT
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-normal text-black mb-3 md:mb-6 masiku-font ">
                FOR <span className="text-[#fffff0] masiku-font [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,4px_4px_0_rgba(0,0,0,0.2)]">GROWTH</span>
              </h1>
              <p className="text-base sm:text-lg text-black mb-6 max-w-md backdrop-blur-xl bg-white/10 italic rounded-lg">
                Leverage the power of internet culture to skyrocket your brand's engagement and reach.
              </p>
              
          
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="w-full h-56 sm:h-64 md:h-72 lg:h-96 xl:h-[500px] relative">
                <div className="absolute -inset-1"></div>
                <Image
                  src="/images/landing.png"
                  alt="Meme Marketing Team"
                  fill
                  className="rounded-lg object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
