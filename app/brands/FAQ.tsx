'use client'
import React, { useState } from 'react'

const FAQ = ({data}) => {
  const [openItems, setOpenItems] = useState({})

  // Split FAQ items into left and right columns
  const leftColumnFAQs = data.slice(0, 2) // First 3 items
  const rightColumnFAQs = data.slice(2, 4) // Last 3 items

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
