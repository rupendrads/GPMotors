'use client'
import React, { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const faqData = [
    {
      id: 1,
      question: "What Is Car MOT Service?",
      answer: "MOT is the abbreviation of the 'Ministry of Transport.' This test was designed in 1960. The foremost purpose of this test is to ensure that certain parts of the cars are okay and the car is roadworthy. If there is any damage or defects in those parts, the vehicle will fail the MOT test."
    },
    {
      id: 2,
      question: "Is Full Service Same as MOT?", 
      answer: "A full service similar to MOT. Like MOT in full-service, tyre tread depth, seat belt, engine, steering and many other parts are checked. If some need replacement, they will also be replaced to improve your car's efficiency, life and performance."
    },
    {
      id: 3,
      question: "Is It Okay to Drive a Car Without an MOT?",
      answer: "No, it is not legal to drive a car without a valid MOT certificate (except when driving to a pre-booked MOT test). You could face a fine of up to £1,000 for driving without an MOT, and your insurance may be invalid."
    },
    {
      id: 4,
      question: "Do You Get 14 Days of Grace for an MOT?",
      answer: "No, there is no grace period for MOT. Your MOT certificate expires at 11:59 PM on the expiry date. However, you can have your MOT done up to one month before it expires without losing any time on your new certificate."
    },
    {
      id: 5,
      question: "What Happens If I Miss My MOT Date?",
      answer: "If you miss your MOT expiry date, you cannot legally drive your car except to a pre-booked MOT test at an approved test center. You should book an MOT test as soon as possible and avoid driving until you have a valid certificate."
    },
    {
      id: 6,
      question: "Do I Need a Full Tank of Petrol for MOT?",
      answer: "No, you don't need a full tank of petrol for an MOT test. However, you should have enough fuel to allow the tester to run the engine and complete all necessary checks, including the emissions test. A quarter tank is usually sufficient."
    }
  ]

  // Split FAQ items into left and right columns
  const leftColumnFAQs = faqData.slice(0, 3) // First 3 items
  const rightColumnFAQs = faqData.slice(3, 6) // Last 3 items

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

const renderFAQItem = (item) => (
  <div 
    key={item.id} 
    className=""
  >
    {/* Question Header */}
    <button
      onClick={() => toggleItem(item.id)}
      className="w-full px-6 py-5 text-left flex justify-between items-center "
    >
      <h3 className="text-lg font-semibold text-gray-900 pr-4">
        {item.question}
      </h3>
      <div className="flex-shrink-0">
        {openItems[item.id] ? (
          // Minus Icon
          <div className="w-6 h-6 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-[#0DAD8E]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </div>
        ) : (
          // Plus Icon
          <div className="w-6 h-6 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-[#0DAD8E]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        )}
      </div>
    </button>

    {/* Answer Content */}
    <div className={`transition-all duration-300 ease-in-out ${
      openItems[item.id] 
        ? 'max-h-96 opacity-100' 
        : 'max-h-0 opacity-0'
    } overflow-hidden`}>
      <div className="px-6 pb-5">
        <p className="text-gray-600 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
        <div className='border-b-3 border-gray-100 w-full'></div>
  </div>
)


  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
  Frequently Asked{' '}
  <span className="bg-[#3F662B] text-white px-3 py-1 rounded mt-2 inline-block">
    Question
  </span>
</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Have some questions before you get started? Check out our FAQs <br /> below or call us 0208 943 4103
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - First 3 FAQs */}
          <div className="space-y-4">
            {leftColumnFAQs.map(renderFAQItem)}
          </div>

          {/* Right Column - Last 3 FAQs */}
          <div className="space-y-4">
            {rightColumnFAQs.map(renderFAQItem)}
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQ
