import React from 'react';
import Image from 'next/image';
import img1 from "../../public/images/ScheduleProcess.svg"
import img2 from "../../public/images/DiagnosticProcess.svg"
import img3 from "../../public/images/QualityProcess.svg"
import img4 from "../../public/images/PaymentProcess.svg"

const BusinessProcess = () => {
  const processSteps = [
    {
      id: 1,
      number: "1",
      title: "Schedule",
      subtitle: "An Appointment",
      description: "The first step is to schedule an appointment via email or phone. You can pick the time that works for you to drop off your vehicle at our convenient business location.",
      icon: img1
    },
    {
      id: 2,
      number: "2", 
      title: "Diagnostic,",
      subtitle: "Inspection, & Repair",
      description: "Our experienced team will thoroughly inspect your BMW. We identify the issue, perform the needed repairs, and keep you informed throughout the process.",
      icon: img2
    },
    {
      id: 3,
      number: "3",
      title: "Quality",
      subtitle: "Assurance", 
      description: "We take control in the quality of our work and ensure you're completely satisfied with the repairs before handing back your vehicle.",
      icon: img3
    },
    {
      id: 4,
      number: "4",
      title: "Payment &",
      subtitle: "Pick-Up",
      description: "We accept various forms of payment including cash, card, or installments/monthly & your car will be ready for pick-up once all work is completed.",
      icon: img4
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-red-500 font-semibold text-lg mb-4 tracking-wider">How It Works</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Our Business Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Process Card */}
                <div className="text-center">
                  {/* Circle with Number and Icon */}
                  <div className="relative mx-auto mb-8">
                    <div className="w-36 h-36 ms-20 bg-red-500 rounded-full flex items-center justify-center relative z-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Number Badge */}
                      <div className="absolute -top-3 -left-3 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-xl">{step.number}</span>
                      </div>
                      
                      {/* SVG Icon */}
                      <div className="text-white">
                        <Image 
                          src={step.icon} 
                          alt={`${step.title} ${step.subtitle}`} 
                          width={56} 
                          height={56} 
                          className="w-14 h-14"
                        />
                      </div>
                    </div>
                    
                    {/* Connecting Dotted Arrow - Only show between steps on desktop */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-18 left-full w-20 h-0.5">
                        {/* Dotted line */}
                        <div className="w-full h-px border-t-2 border-dotted border-gray-400"></div>
                        {/* Arrow head */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                      <h4 className="text-2xl font-bold text-gray-900">{step.subtitle}</h4>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProcess;
