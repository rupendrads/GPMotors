import React from 'react'
import banner from "./images/banner.jpg"
import Image from 'next/image'
const Banner = () => {
  return (
    <section className="relative bg-black h-100 text-white overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={banner}
                alt="Professional mechanic working on car engine"
                className="w-full h-100 object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-opacity-40"></div>
            </div>
    
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-green-400 pl-4 uppercase text-2xl tracking-widest mb-4 font-bold">
                    G.P MOTORS Your Trusted
                  </p>
                  <p className="text-white pl-4 uppercase text-3xl tracking-widest mb-4 font-bold">
                    One-Stop Auto Care Destination
                  </p>
                  <span className='text-sm font-thin'>Home/About us</span>
                </div>
            </div>
          </section>
  )
}

export default Banner