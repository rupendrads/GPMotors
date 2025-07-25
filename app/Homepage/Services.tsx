import React from 'react'

const Services = () => {
  return (
<section className="py-16 lg:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <p className="text-red-600 uppercase tracking-wide font-semibold mb-3 text-sm">
          OUR SERVICES
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Expert Services That<br />
          Drive Confidence
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Expert Automotive Services With Certified Technicians,<br />
          Genuine Parts, And Transparent Pricing.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Coolant Change */}
          <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Coolant Change</h3>
              <p className="text-gray-600 text-sm">
                Quick Checkups And Tune-ups<br />
                To Keep Your Car Healthy And<br />
                Reliable.
              </p>
            </div>
          </div>

          {/* Minor Service */}
          <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Minor Service</h3>
              <p className="text-gray-600 text-sm">
                Quick Checkups And Tune-ups To<br />
                Keep Your Car Healthy And<br />
                Reliable For Daily Driving.
              </p>
            </div>
          </div>

          {/* Transmission Service */}
          <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Transmission Service</h3>
              <p className="text-gray-600 text-sm">
                Quick Checkups And Tune-ups<br />
                To Keep Your Car Healthy And<br />
                Reliable.
              </p>
            </div>
          </div>

          {/* Intermediate Service */}
          <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Intermediate Service</h3>
              <p className="text-gray-600 text-sm">
                Quick Checkups And Tune-ups To<br />
                Keep Your Car Healthy And Reliable<br />
                For Longer Journeys.
              </p>
            </div>
          </div>

          {/* Clutch Repair */}
          <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Clutch Repair</h3>
              <p className="text-gray-600 text-sm">
                Quick Checkups And Tune-ups<br />
                To Keep Your Car Healthy And<br />
                Reliable.
              </p>
            </div>
          </div>

          {/* Full Service */}
          <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Full Service</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive And Tune-ups To<br />
                Keep Your Car Healthy And Reliable<br />
                For Extended Performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Car Image */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative">
          <img
            src="/car-top-view.png" // Replace with actual car image
            alt="Car top view showing service areas"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Services