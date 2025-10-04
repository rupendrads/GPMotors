import React from 'react';
import Image from 'next/image';
// import img from "../../public/images/BMWbanner.jpg";

const Hero = ({data}) => {
  return (
    <div className="min-h-screen">
      {/* BMW Banner Section with Responsive Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <Image 
            src={data.image} 
            alt="BMW Comprehensive Care Service"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Gradient Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 z-10"></div>
        </div>

        {/* Content Container - Fully Centered */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                <span className="block">{data.title}</span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 text-opacity-50 font-thin max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
                {data.paragraph}
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Decorative Elements */}
        {/* Desktop Decorations */}
        <div className="absolute top-10 right-10 lg:top-16 lg:right-16 w-20 h-20 lg:w-24 lg:h-24 border-2 border-blue-400/30 rotate-45 hidden md:block animate-pulse"></div>
        <div className="absolute bottom-16 left-10 lg:bottom-24 lg:left-16 w-16 h-16 lg:w-20 lg:h-20 border-2 border-blue-400/20 rotate-12 hidden md:block animate-pulse"></div>

        {/* Mobile/Tablet Decorations */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 border border-blue-400/50 rotate-45 md:hidden animate-pulse"></div>
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-4 h-4 sm:w-6 sm:h-6 border border-blue-400/40 rotate-12 md:hidden animate-pulse"></div>

        {/* Corner accent elements */}
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-l-2 border-t-2 border-blue-400/20"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border-r-2 border-b-2 border-blue-400/20"></div>
      </section>
    </div>
  );
};

export default Hero;