import React from 'react';
import carImage from "./images/bannercar.png";
import bgLeft from "./images/redbg.jpg";
import bgRight from "./images/blackbg.jpg";
import Image from 'next/image';
import Link from 'next/link';
const CarBanner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto hidden lg:block">
      <div className="relative rounded-lg overflow-hidden shadow-lg h-[200px] md:h-[300px]">
        <div className="absolute inset-0 flex">
          <div className="w-[55%] relative">
            <Image
              src={bgLeft}
              alt="Left Background"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="w-[45%] relative">
            <Image
              src={bgRight}
              alt="Right Background"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative h-full flex items-center justify-between px-8 md:px-12">
          <div className="z-10 max-w-md">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Keep Your <span className='text-yellow-300'>Car Looking</span><br />
              <span className='text-yellow-300'>Great</span> With GP Motors!
            </h2>
            <Link href="/book-appointment">
            <button className="border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-red-600 transition-colors duration-300">
              Make Appointment
            </button>
            </Link>
          </div>

          <div className="absolute left-[75%] lg:left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[450px] md:w-[550px]">
            <Image
              src={carImage}
              alt="Red Sports Car"
              width={550}
              height={300}
              className="w-80 lg:w-100  h-auto object-contain drop-shadow-2xl"
            />
          </div>

          <div className="z-10 text-white">
            <div className="text-5xl md:text-6xl font-bold  mr-20">30%</div>
            <div className="text-xs mr-20"><span className='text-xl md:text-2xl text-yellow-300 font-bold -mt-2'>OFF </span><span className='text-yellow-300'>On All</span> Car</div>
            <div className="text-xs md:text-base font-light mt-1  ms-10">
                Repair <span className='text-yellow-300'>Services</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBanner;
