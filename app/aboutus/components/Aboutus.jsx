import React from 'react';
import car1 from "./images/car1.jpg"
import car2 from "./images/car2.jpg"
import logo from "./images/logo.png"
import Image from 'next/image';
const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              About Us
            </p>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Our Reputation Drives <br />
              Your Confidence
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At GP Motors, We Believe Your Vehicle Deserves Precision, Care, And 
                Craftsmanship. For Years, We've Been Delivering Expert Automotive 
                Services — From Diagnostics To Full Rebuilds — With A Commitment To 
                Quality And Customer Satisfaction.
              </p>

              <p>
                We're Not Just Mechanics; We're Problem-Solvers Who Take Pride In 
                Every Repair. Whether It's A Quick Tune-Up, A Complex Engine Job, Or 
                Performance Enhancement, Our Technicians Ensure Your Car Runs Like New.
              </p>

              <p>
                Our Workshop Is Equipped With Modern Tools, Certified Professionals, 
                And A Transparent Approach — So You Know Exactly What Your Vehicle 
                Needs And Why. At GP Motors, We Aim To Make Your Driving Experience 
                Smoother, Safer, And Stress-Free.
              </p>
            </div>
          </div>

          {/* Right Section - Images with Logo Overlay */}
          <div className="relative">
            {/* Experience Badge */}
{/* <div className="absolute top-8 left-8 z-10">
              <div className="bg-white rounded-lg shadow-lg px-6 py-4">
                <p className="text-5xl font-bold text-red-600">20+</p>
                <p className="text-sm text-gray-600 font-medium">Year Of Experience</p>
              </div>
            </div> */}
            {/* Images Grid */}
           <div className="relative grid grid-cols-2 gap-4">
  {/* Left Image */}
  <div className="col-span-1 row-span-2 flex flex-col">
    <div className='text-red-600 px-14 py-16'>
      <div className='text-[80px] leading-[70px] font-bold'>20+</div>
      <div className='text-base font-medium'>Year Of Experience</div>
    </div>
    <div className="relative flex-1 overflow-hidden rounded-2xl">
      <Image
        src={car1}
        alt="Car in motion"
        className="w-full h-50 object-cover"
        style={{
          clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)'
        }}
      />
    </div>
  </div>

  {/* Right Image */}
  <div className="col-span-1 row-span-2">
    <Image
      src={car2}
      alt="Red truck"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>

  {/* Logo Overlay - Centered between images */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
    {/* <div className="bg-gray-800 rounded-full p-6 shadow-2xl border-4 border-white"> */}
      <div className="w-20 h-20 flex items-center justify-center">
        <Image
          src={logo}
          alt="GP Motors Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  {/* </div> */}
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
