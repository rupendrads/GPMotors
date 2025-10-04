import React from 'react';
import Image from 'next/image';
import img1 from "../../public/images/oilChange.png"
import img2 from "../../public/images/poorAcceleration.png"
import img3 from "../../public/images/Rattling.png"
import img4 from "../../public/images/TransmissionService.png"

const WhyTrustUs = ({data}) => {
  const services = [
    {
      id: 1,
      title: "OIL CHANGE &",
      subtitle: "TOP UP",
      icon: img1,
      bgColor: "bg-gray-100"
    },
    {
      id: 2,
      title: "POOR",
      subtitle: "ACCELERATION", 
      icon: img2,
      bgColor: "bg-gray-100"
    },
    {
      id: 3,
      title: "RATTLING",
      subtitle: "NOISES",
      icon: img3,
      bgColor: "bg-gray-100"
    },
    {
      id: 4,
      title: "TRANSMISSION",
      subtitle: "SERVICE",
      icon: img4,
      bgColor: "bg-gray-100"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 gap-8">
          {/* Title */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Quality Parts You <br/>
              <span className="text-red-500">Can Trust</span>
            </h2>
          </div>

          {/* Description */}
          <div className="lg:w-1/2 lg:pl-8 text-center lg:text-right">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
             {data.paragraph}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              {/* Service Icon */}
              <div className="flex justify-center mb-4">
                <Image src={service.icon} alt='icon' className='w-60 h-60 object-contain'/>
              </div>

              {/* Service Title */}
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-sm md:text-base">
                  {service.title}
                </h3>
                <p className="font-bold text-red-500 text-sm md:text-base">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

{/* Call to Action Banner - Responsive Design */}

{/* Mobile/Tablet Version - Centered Design */}
<div className="bg-red-500 rounded-lg p-8 text-center lg:hidden">
  <div className="max-w-2xl mx-auto">
    <h3 className="text-white font-bold text-2xl md:text-3xl mb-4 leading-tight">
      Need Expert Advice on Your Car Service?
    </h3>
    <p className="text-white/90 text-base md:text-lg mb-6 leading-relaxed">
      Our friendly team is here to help. Call now for instant assistance and expert recommendations.
    </p>
    
    {/* Phone Number */}
    <div className="mb-6">
      <a 
        href="tel:+442012345678" 
        className="text-white font-bold text-3xl md:text-4xl hover:text-white/90 transition-colors duration-300 block"
      >
        +44 (0) 20 1234 5678
      </a>
      <p className="text-white/80 text-sm mt-2">
        Available 7 days a week
      </p>
    </div>
    
    {/* CTA Button */}
    <button className="bg-white text-red-500 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 text-lg">
      Request a Call
    </button>
  </div>
</div>

{/* Desktop Version - Original Horizontal Design */}
<div className="bg-red-500 rounded-lg px-6 py-4 hidden lg:flex items-center justify-between gap-4">
  <div className="text-left">
    <h3 className="text-white font-bold text-lg text-center md:text-xl mb-1">
      Need Expert Advice on Your Car Service?
    </h3>
    <p className="text-white/90 text-sm">
      Our friendly team is on hand to guide you through any mechanical issues you're experiencing.
    </p>
  </div>

  <div className="flex flex-row items-center gap-4">
    <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300">
      Request a Call
    </button>
    <a 
      href="tel:+442012345678" 
      className="text-white font-bold text-lg md:text-xl hover:text-white/90 transition-colors duration-300"
    >
      +44 (0) 20 1234 5678 <br/>
      <span className='text-white/80 text-xs font-light text-center'>Available 7 days a week</span>
    </a>
  </div>
</div>

      </div>
    </section>
  );
};

export default WhyTrustUs;
