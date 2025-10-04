import React from 'react';
import Image from 'next/image';
import img from "../../public/images/WhyUsBanner.jpg"

const WhyUsBanner = ({data}) => {
  const features = [
    {
      id: 1,
      text: `Expert ${data.brand} Technicians`
    },
    {
      id: 2,
      text: "Genuine OEM Parts With Warranty"
    },
    {
      id: 3,
      text: "Affordable, Transparent Pricing"
    },
    {
      id: 4,
      text: "Tailored Service Plans"
    },
    {
      id: 5,
      text: "Free Service Quotes"
    }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src={img}
        alt="GP Motors Garage Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Background Image Overlay */}
      {/* <div className="absolute inset-0 bg-black/75 z-10"></div> */}

      {/* Content Container */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
            
            {/* Vertical White Line - Only visible on desktop */}
            <div className="hidden lg:block absolute left-[58.33%] top-0 bottom-0 w-px bg-white/50 transform -translate-x-1/2"></div>
            
            {/* Left Column - Text Content (7 columns) */}
            <div className="lg:col-span-7 text-white lg:pr-8">
              <h1 className="text-5xl font-bold mb-10 leading-tight">
                Why GP Motors Tedd?
              </h1>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mb-8 lg:mb-0">
                At GP Motors Tedd, We Understand That Dents Are More Than Just Cosmetic Flaws. 
                Even Small Dents Can Chip The Paint, Expose Metal To Moisture, And Lead To Rust 
                Over Time. Left Untreated, This Weakens The Bodywork And Can Result In Costly 
                Repairs. Beyond Appearance, Dents Also Reduce Your Car's Resale Value. That's Why 
                Our Expert Team Ensures Your Vehicle Not Only Looks Great But Stays Protected 
                And Well-Maintained For The Long Run.
              </p>
              
              {/* Horizontal White Line - Only visible on mobile/tablet */}
              <div className="lg:hidden w-full h-px bg-white/50 my-12"></div>
            </div>

            {/* Right Column - Features List (5 columns) */}
            <div className="lg:col-span-5 lg:mt-6 space-y-8 lg:pl-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center space-x-5">
                  {/* Yellow Circle Check Icon */}
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg 
                      className="w-4 h-4 text-black font-bold" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                  
                  {/* Feature Text */}
                  <span className="text-white text-xl md:text-xl font-light leading-relaxed">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-15"></div>
    </section>
  );
};

export default WhyUsBanner;
