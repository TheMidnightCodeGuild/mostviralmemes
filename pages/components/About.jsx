import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="h-screen bg-[#FFFFF0] pt-32 pb-16 relative">
      {/* Large Background Letter */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <h1 className="text-[40rem] font-bold text-[#FE9D2C]">M</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-yellow-900 mb-6">
            About <span className="text-[#FE9D2C]">MOSTVIRALMEMES</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're not your typical marketing agency. We speak the language of the internet and turn memes into marketing gold.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/team.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-yellow-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Born from the realization that traditional marketing just doesn't cut it anymore, 
              MOSTVIRALMEMES emerged as the bridge between viral internet culture and business growth.
            </p>
            <p className="text-gray-700">
              We've mastered the art of turning trending moments into marketing opportunities, 
              helping brands connect with their audience in ways that feel natural, engaging, and most importantly - viral.
            </p>
          </div>
        </div>

   
      </div>
    </section>
  );
};

export default About;
