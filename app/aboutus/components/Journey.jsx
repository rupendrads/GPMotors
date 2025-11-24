import React from 'react';

const JourneyExcellence = () => {
  const leftStats = [
    { label: 'Year Of\nExperience', value: '20' },
    { label: 'Hours Cars\nGet Done', value: '1' },
    { label: 'Skilled\nTechnicians', value: '5' }
  ];

  const rightStats = [
    { label: 'Average Service\nRating', value: '4.7' },
    { label: 'Vehicle Parts\nIn Inventory', value: '2k' },
    { label: 'Customer\nSatisfaction', value: '100%' }
  ];

  const allStats = [...leftStats, ...rightStats];

  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-red-600 text-xs md:text-sm font-semibold uppercase tracking-wider mb-2 md:mb-3">
            Our Journey Of Excellence
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4">
            GP Motors: Driven By Expertise,<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Defined By Trust
          </h2>
        </div>

        {/* Desktop & Tablet View (md and above) */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Vertical Divider Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-8 lg:space-y-12">
              {leftStats.map((stat, index) => (
                <div key={index} className="relative flex justify-end items-center pr-12 lg:pr-16">
                  <p className="absolute left-0 text-red-600 text-xs lg:text-sm font-medium whitespace-pre-line text-left">
                    {stat.label}
                  </p>
                  <p className="text-red-600 text-6xl lg:text-8xl font-bold">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8 lg:space-y-12">
              {rightStats.map((stat, index) => (
                <div key={index} className="relative flex justify-start items-center pl-12 lg:pl-16">
                  <p className="text-red-600 text-6xl lg:text-8xl font-bold">
                    {stat.value}
                  </p>
                  <p className="absolute right-0 text-red-600 text-xs lg:text-sm font-medium whitespace-pre-line text-right">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical List */}
        <div className="md:hidden max-w-md mx-auto">
          <div className="space-y-8">
            {allStats.map((stat, index) => (
              <div key={index} className="relative">
                {/* Stat Card */}
                <div className="bg-gradient-to-r from-red-50 to-white rounded-lg p-6 shadow-sm border border-red-100">
                  <div className="flex items-center justify-between">
                    {/* Value */}
                    <p className="text-red-600 text-5xl font-bold">
                      {stat.value}
                    </p>
                    <p className="text-red-600 text-sm font-medium whitespace-pre-line text-right ml-4">
                      {stat.label}
                    </p>
                  </div>
                </div>
                
                {index < allStats.length - 1 && (
                  <div className="h-px bg-gray-200 my-4 mx-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyExcellence;
