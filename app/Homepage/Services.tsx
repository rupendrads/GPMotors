import React from 'react'
import Image from 'next/image';
import Img1 from "../../public/images/homeCarImg.png"
import service1 from "../../public/images/service1.svg"
import service2 from "../../public/images/service2.svg"
import service3 from "../../public/images/service3.svg"
import service4 from "../../public/images/service4.svg"
import service5 from "../../public/images/service5.svg"
import service6 from "../../public/images/service6.svg"
const Services = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 flex justify-center items-center">
          <p className="text-gray-600 text-right mb-8 leading-relaxed">
            Expert Automotive Services With Certified Technicians,<br />
            Genuine Parts, And Transparent Pricing.
          </p>
          <span className='border-l-2 border-gray-300 h-35 mx-6'></span>
          <div className='text-left'>
            <div className='flex'>
            <p className="text-red-600 uppercase tracking-wide font-semibold mb-3 text-sm">
            OUR SERVICES
          </p>
              <span className='border-t-2 mt-2 ml-2 w-20 border-red-600 block'></span>
            </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Expert Services That<br />
            Drive Confidence
          </h2>
          </div>
        </div>

        {/* Main Layout: Left Cards - Car Image - Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Side - 3 Service Cards */}
          <div className="space-y-20">
            {/* Coolant Change */}
            <div className="flex items-center justify-end rounded-lg">
              <div className='text-right'>
                <h3 className="font-bold text-[#434343] mb-1 text-2xl">Coolant Change</h3>
                <p className="text-[#626363] font-light  text-sm">
                  Quick Checkups And Tune-ups<br />
                  To Keep Your Car Healthy And<br />
                  Reliable.
                </p>
              </div>
              <div className='bg-[#F7F2F2] rounded-md ms-6 p-2'>
                <Image
                src={service1}
                alt="Car top view showing service areas"
                className=" w-[40px] h-[40px]"
              />
              </div>
            </div>

            {/* Minor Service */}
            <div className="flex items-center justify-end rounded-lg">
              <div className='text-right'>
                <h3 className="font-bold text-[#434343] mb-1 text-2xl">Transmission Service</h3>
                <p className="text-[#626363] font-light  text-sm">
                  Quick Checkups And Tune-ups<br />
                  To Keep Your Car Healthy And<br />
                  Reliable.
                </p>
              </div>
              <div className='bg-[#F7F2F2] rounded-md ms-6 p-2'>
                <Image
                src={service2}
                alt="Car top view showing service areas"
                className=" w-[40px] h-[40px]"
              />
              </div>
            </div>

            {/* Transmission Service */}
           <div className="flex items-center justify-end rounded-lg">
              <div className='text-right'>
                <h3 className="font-bold text-[#434343] mb-1 text-2xl">Clutch Repair</h3>
                <p className="text-[#626363] font-light  text-sm">
                  Quick Checkups And Tune-ups<br />
                  To Keep Your Car Healthy And<br />
                  Reliable.
                </p>
              </div>
              <div className='bg-[#F7F2F2] rounded-md ms-6 p-2'>
                <Image
                src={service3}
                alt="Car top view showing service areas"
                className=" w-[40px] h-[40px]"
              />
              </div>
            </div>
          </div>

          {/* Center - Car Image */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src={Img1}
                alt="Car top view showing service areas"
                className=""
              />
            </div>
          </div>

          {/* Right Side - 3 Service Cards */}
          <div className="space-y-20">
            {/* Coolant Change */}
            <div className="flex items-center justify-start rounded-lg">
              <div className='bg-[#F7F2F2] rounded-md mr-6 p-2'>
                <Image
                src={service4}
                alt="Car top view showing service areas"
                className=" w-[40px] h-[40px]"
              />
              </div>
              <div className='text-left'>
                <h3 className="font-bold text-[#434343] mb-1 text-2xl">Minor Service</h3>
                <p className="text-[#626363] font-light  text-sm">
                  Quick Checkups And Tune-ups<br />
                  To Keep Your Car Healthy And<br />
                  Reliable.
                </p>
              </div>
            </div>

            {/* Minor Service */}
            <div className="flex items-center justify-start rounded-lg">
              <div className='bg-[#F7F2F2] rounded-md mr-6 p-2'>
                <Image
                src={service5}
                alt="Car top view showing service areas"
                className=" w-[40px] h-[40px]"
              />
              </div>
              <div className='text-left'>
                <h3 className="font-bold text-[#434343] mb-1 text-2xl">Intermediate Service</h3>
                <p className="text-[#626363] font-light  text-sm">
                  Quick Checkups And Tune-ups<br />
                  To Keep Your Car Healthy And<br />
                  Reliable.
                </p>
              </div>
            </div>

            {/* Transmission Service */}
           <div className="flex items-center justify-start rounded-lg">
              <div className='bg-[#F7F2F2] rounded-md mr-6 p-2'>
                <Image
                src={service6}
                alt="Car top view showing service areas"
                className=" w-[40px] h-[40px]"
              />
              </div>
              <div className='text-left'>
                <h3 className="font-bold text-[#434343] mb-1 text-2xl">Full Service</h3>
                <p className="text-[#626363] font-light  text-sm">
                  Quick Checkups And Tune-ups<br />
                  To Keep Your Car Healthy And<br />
                  Reliable.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
