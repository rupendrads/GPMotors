"use client";

import { useState, useEffect, ChangeEvent, FormEvent, useRef } from "react";
import {
  initEmailJS,
  sendContactUsEmail,
} from "../lib/emailService";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function FloatContact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    initEmailJS();
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeCard = () => {
    setIsOpen(false);
    setStatus(""); // Clear status when closing
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const combinedMessage = `${form.message}\n\nPhone: ${form.phone}\n\nEmail: ${form.email}`;
      await sendContactUsEmail({
        from_name: `${form.firstName} ${form.lastName}`,
        from_email: form.email,
        subject: form.subject,
        message: combinedMessage,
      });

      setStatus("✅ Email sent successfully!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
      formRef.current?.reset();
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        setStatus(`❌ ${error.message || "Failed to send email."}`);
      } else {
        setStatus("❌ Failed to send email. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-1/7 right-0 z-50">
      {/* Contact Us Icon Button */}
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

      {/* Contact Us Card with conditional rendering */}
      {isOpen && (
        <div className="fixed top-1/7 right-0 transform transition-all duration-500 ease-in-out animate-in slide-in-from-right bg-white shadow-2xl rounded-l-2xl p-0 w-80 max-w-xs border-l-4 border-blue-600">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-tl-2xl">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">Get in Touch</h2>
                <p className="text-blue-100 text-xs">We&apos;d love to hear from you</p>
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

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="block text-xs font-semibold text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
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
                  value={form.lastName}
                  onChange={handleChange}
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
                value={form.email}
                onChange={handleChange}
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
                value={form.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-sm"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Subject Selection */}
            <div>
              <label className="mt-2 block text-xs font-semibold text-gray-700 mb-2">
                Select Subject?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-1 text-xs font-medium text-gray-700">
                  <input
                    type="radio"
                    name="subject"
                    value="General Inquiry"
                    checked={form.subject === "General Inquiry"}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  General Inquiry
                </label>
                <label className="flex items-center gap-1 text-xs font-medium text-gray-700">
                  <input
                    type="radio"
                    name="subject"
                    value="Feedback"
                    checked={form.subject === "Feedback"}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  Feedback
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mt-2 block text-xs font-semibold text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                value={form.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 resize-none text-sm"
                placeholder="Tell us how we can help you..."
                required
              />
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`p-2 rounded-lg text-xs ${
                  status.startsWith("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {status}
              </div>
            )}

            <div className="flex space-x-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
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

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-2 rounded-bl-2xl border-t">
            <p className="text-xs text-gray-500 text-center">
              We&apos;ll get back to you within 24 hours
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
