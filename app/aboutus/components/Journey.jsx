import React from 'react';

const JourneyExcellence = () => {
  const leftStats = [
    { label: 'Year Of\nExperience', value: '20' },
    { label: 'Hours Cars\nGet Done', value: '1' },
    { label: 'Skilled\nTechnicians', value: '30' }
  ];

  const rightStats = [
    { label: 'Average Service\nRating', value: '3.8' },
    { label: 'Vehicle Parts\nIn Inventory', value: '2k' },
    { label: 'Customer\nSatisfaction', value: '100%' }
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Our Journey Of Excellence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            GP Motors: Driven By Expertise,<br />
            Defined By Trust
          </h2>
        </div>

        {/* Stats Grid with Divider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Divider Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-12">
              {leftStats.map((stat, index) => (
                <div key={index} className="relative flex justify-end items-center pr-0 md:pr-16">
                  {/* Label - Absolute positioned to the left */}
                  <p className="absolute left-0 text-red-600 text-sm font-medium whitespace-pre-line text-left">
                    {stat.label}
                  </p>
                  {/* Value */}
                  <p className="text-red-600 text-7xl md:text-8xl font-bold">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {rightStats.map((stat, index) => (
                <div key={index} className="relative flex justify-start items-center pl-0 md:pl-16">
                  {/* Value */}
                  <p className="text-red-600 text-7xl md:text-8xl font-bold">
                    {stat.value}
                  </p>
                  {/* Label - Absolute positioned to the right */}
                  <p className="absolute right-0 text-red-600 text-sm font-medium whitespace-pre-line text-right">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyExcellence;
