import React from 'react'
import Image from 'next/image';
import Img1 from "../../public/images/chooseImage1.png"
import Img2 from "../../public/images/chooseImage2.png"
import Img3 from "../../public/images/chooseImage3.png"
import Img4 from "../../public/images/chooseImage4.png"
const WhyChooseUs = () => {
  return (
     <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className='flex text-center justify-center mb-4'><span className='border-t-2 mt-2 w-20 border-red-600 block'></span>
             <p className="text-red-600 mx-4 uppercase tracking-wide font-semibold mb-3 text-sm">
              WHY CHOOSE US
            </p><span className='border-t-2 mt-2 w-20 border-red-600 block'></span></div>
           
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
              Trusted Car Repair By<br />Professionals
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                <Image
                  src={Img1}
                  alt="Mechanic working on engine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">Mechanic Masters</h3>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                <img
                  src="/speedy-repair.jpg" // Replace with actual image
                  alt="Car lift in garage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">Speedy Auto Repair</h3>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                <img
                  src="/precision-works.jpg" // Replace with actual image
                  alt="Mechanic with wrench"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">Precision Auto Works</h3>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                <img
                  src="/professional-tech.jpg" // Replace with actual image
                  alt="Professional technician"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">Professional Technicians</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhyChooseUs