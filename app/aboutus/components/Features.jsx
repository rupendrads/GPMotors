import React from 'react';

const WhyChoose = () => {
  const features = [
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'We deliver dealership-grade quality without the inflated costs. Get transparent quotes and high-value service tailored to your needs.'
    },
    {
      icon: '🔧',
      title: 'Experienced Technicians',
      description: 'Our team brings years of hands-on expertise in diagnostics, repairs, and performance tuning — ensuring every vehicle leaves our shop in top shape.'
    },
    {
      icon: '⚡',
      title: 'Fast & Reliable Turnaround',
      description: 'We value your time. With advanced equipment and a skilled crew, we guarantee timely service without compromising quality.'
    },
    {
      icon: '🛠️',
      title: 'Premium Parts & Tools',
      description: 'From OEM replacements to top-tier aftermarket components, we use only reliable parts that ensure lasting performance and safety.'
    }
  ];

  return (
    <section className=" py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-right mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose GP Motors?
          </h2>
          <p className="text-gray-600 text-lg">
            We're here to keep you moving — efficiently and affordably.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-red-600 text-white p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 opacity-30">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed opacity-90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
