import React from 'react';
import Image from 'next/image';
import car from "./images/carservice.jpg"
const CarService = () => {
  const features = [
    {
      number: '01',
      title: 'Skilled & Certified Technicians',
      description: 'Our team is trained to handle all makes and models with precision and care.'
    },
    {
      number: '02',
      title: 'Quality Parts & Equipment',
      description: 'We use only trusted, manufacturer-approved components for lasting performance'
    },
    {
      number: '03',
      title: 'Transparent, Honest Service',
      description: 'Clear communication and fair pricing — no hidden costs or surprises.'
    }
  ];

  return (
    <section className=" py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left Section - Text Content */}
          <div className="lg:col-span-1 space-y-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Excellence In Every Detail
            </p>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Because Your Car Deserves the{' '}
              <span className="text-gray-400">Best service</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We treat every vehicle like it's our own, paying attention to every detail, no matter how small.
              </p>

              <p>
                With advanced tools, skilled technicians, and a focus on long-term performance, we make sure your car leaves our workshop in peak condition.
              </p>
            </div>

            <div className="pt-4">
              <a href="/book-appointment" className="text-gray-900 font-semibold underline hover:text-red-600 transition-colors">
                Read and Book Now
              </a>
            </div>
          </div>

          {/* Center Section - Car Image */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src={car}
                alt="Car top view"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Section - Features List */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Trusted Care for Every Vehicle
            </h3>
            <p className="text-gray-600 mb-8">
              At GP Motors, we go beyond simple repairs and a commitment to keeping you safe and confident on the road.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.number} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-gray-300 font-bold text-lg">
                      {feature.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-red-600 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Need Expert Advice on Your Car Service?
            </h3>
            <p className="text-white/90 text-sm">
              Our friendly team is here to help. Call now for instant assistance and expert recommendations.
            </p>
          </div>

          <div className="flex items-center gap-4">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Request a Call
            </button>
            <div className="text-white text-right">
              <div className="text-2xl font-bold">0208 943 4103</div>
              <div className="text-2xl font-bold">0208 943 3588</div>
              <div className="text-xs text-white/80">Available 7 days a week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarService;
