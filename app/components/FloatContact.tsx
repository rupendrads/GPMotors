"use client"
import { useState } from 'react';

export default function FloatContact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeCard = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-1/5 right-0 z-50">
      <button
        onClick={toggleOpen}
        className="bg-gradient-to-r fixed top-1/3 right-0 from-blue-600 to-blue-700 text-white p-4 rounded-l-2xl shadow-2xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 group"
        aria-label="Contact Us"
      >
        <div className=" items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <div className="text-xs mt-2">Contact Us</div>
        </div>
      </button>

      <div
        className={`transform transition-all duration-500 ease-in-out origin-right bg-white shadow-2xl rounded-l-2xl p-0 w-80 max-w-xs border-l-4 border-blue-600 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-tl-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">Get in Touch</h2>
              <p className="text-blue-100 text-xs">We'd love to hear from you</p>
            </div>
            <button
              onClick={closeCard}
              className="text-white hover:text-blue-200 focus:outline-none transform hover:scale-110 transition-transform duration-200"
              aria-label="Close contact form"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <form className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-xs font-semibold text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-sm"
                placeholder="John"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-xs font-semibold text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-sm"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mt-2 block text-xs font-semibold text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-sm"
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="mt-2 block text-xs font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-sm"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="message" className="mt-2 block text-xs font-semibold text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 resize-none text-sm"
              placeholder="Tell us how we can help you..."
              required
            />
          </div>

          <div className="flex space-x-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg text-sm"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={closeCard}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 border border-gray-300 text-sm"
            >
              Cancel
            </button>
          </div>
        </form>

        <div className="bg-gray-50 px-4 py-2 rounded-bl-2xl border-t">
          <p className="text-xs text-gray-500 text-center">
            We'll get back to you within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
