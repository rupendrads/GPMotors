import React from 'react';
import Image from 'next/image';

const WhyUs = ({data}) => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="bg-[#F2F6F7] max-w-7xl px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 mx-auto rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-10 items-center gap-8 lg:gap-2">
          
          {/* Logo Section - Centered on mobile/tablet */}
          <div className='lg:col-span-3 flex justify-center lg:justify-start'>
            <Image 
              src={data.image} 
              alt="BMW logo" 
              width={200}
              height={200}
              className='w-32 md:w-40 lg:w-50 max-w-full h-auto'
            />
          </div>

          {/* Content Section - Centered on mobile/tablet */}
          <div className="space-y-6 lg:col-span-7 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              {data.title} <br/>
              {data.subtitle}
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {data.paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
