import React from 'react'
import Image from 'next/image'
import Img1 from "../../public/images/data1.svg"
import Img2 from "../../public/images/data2.svg"
import Img3 from "../../public/images/data3.svg"

const Data = () => {
  // Data array for better maintainability
  const statsData = [
    {
      image: Img1,
      alt: "years of service",
      label: "YEARS OF SERVICE"
    },
    {
      image: Img2,
      alt: "satisfied customers", 
      label: "SATISFIED CUSTOMERS"
    },
    {
      image: Img3,
      alt: "expert technicians",
      label: "EXPERT TECHNICIANS"
    }
  ]

  return (
    <div className='max-w-7xl mx-auto py-8 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center'>
        {statsData.map((stat, index) => (
          <React.Fragment key={index}>
            {/* Stat Item */}
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4'>
                <Image 
                  src={stat.image}
                  alt={stat.alt}
                  width={80}
                  height={80}
                  className='w-auto h-auto'
                />
              </div>
              <div className='font-bold text-[#626363] text-sm tracking-wide'>
                {stat.label}
              </div>
            </div>

            {/* Vertical Divider - Only show between items, not after the last one */}
            {index < statsData.length - 1 && (
              <div className='hidden lg:flex justify-center'>
                <span className='border-l-2 border-gray-300 h-16'></span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Data
