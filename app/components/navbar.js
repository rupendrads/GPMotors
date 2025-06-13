"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import banner from "../../public/images/banner.png";
import key from "../../public/icons/key.svg";
import blog from "../../public/icons/blog.svg";
import archive from "../../public/icons/archive.svg";
import youtube from "../../public/icons/youtube.svg";
import React from "react";
const serviceColumns = [
  {
    heading: "CAR REPAIR",
    highlight: "Brake Repair",
    items: [
      "Brake Repair",
      "Suspension Repair",
      "Clutch Repair",
      "Transmission Repair",
    ],
    subheading: "AIR CONDITIONING",
    subitems: ["AC Gas Refill", "Compressor Repair"],
  },
  {
    heading: "ENGINE REPAIR",
    items: [
      "Engine Diagnostics",
      "Alternator Repair",
      "Clutch Repair",
      "Transmission Repair",
      "Turbocharger Repair",
      "Cylinder Head Repair",
    ],
  },
  {
    heading: "BODYWORK & PAINT",
    items: [
      "Dent Removal",
      "Paint Touch-Ups",
      "Full Body Respray",
      "Rust Treatment",
    ],
    subheading: "TYRES & WHEELS",
    subitems: ["Wheel Alignment", "Wheel Balancing"],
  },
  {
    heading: "MAINTENANCE",
    items: [
      "Oil Change",
      "Air Filter Replacement",
      "Cabin Filter Replacement",
      "Coolant Flush",
    ],
    subheading: "ELECTRICAL SYSTEMS",
    subitems: ["Headlight & Taillight Repair", "Fuse Replacement"],
  },
];

const resources = [
  {
    name: "Blog",
    icon: (
      <Image
        src={blog}
        alt="Blog Icon"
        width={18}
        height={18}
        className="text-orange-400 mr-2"
      />
    ),
    desc: "Demo Description - t non deserunt ullamo est sit aliqua amet sint.",
  },
  {
    name: "Customer Stories",
    icon: (
      <Image
        src={archive}
        alt="Blog Icon"
        width={18}
        height={18}
        className="text-orange-400 mr-2"
      />
    ),
    desc: "Demo Description - t non deserunt ullamo est sit aliqua amet sint.",
  },
  {
    name: "Video Tutorials",
    icon: (
      <Image
        src={youtube}
        alt="Blog Icon"
        width={18}
        height={18}
        className="text-orange-400 mr-2"
      />
    ),
    desc: "Demo Description - t non deserunt ullamo est sit aliqua amet sint.",
  },
];

const getItemClass = (item, highlight) =>
  item === highlight
    ? "text-yellow-400 font-medium hover:text-[#F3E330]"
    : "text-white hover:text-[#F3E330]";

export default function Navbar() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleEnter = () => setShowMegaMenu(true);
  const handleLeave = () => setShowMegaMenu(false);

  return (
    <nav className="relative z-50 w-full">
      {/* NAVBAR */}
      <div className="w-full bg-[#232f23] opacity-90 flex items-center justify-between h-16 px-10">
        {/* 1. Logo section */}
        <div className="flex items-center">
          {/* <img src="/logo.png" alt="G.P. MOTORS" className="h-9 w-9" /> */}
          <span className="font-bold text-white text-lg tracking-wide ml-2">
            G.P. MOTORS
          </span>
        </div>

        {/* 2. Content/Navigation section */}
        <div className="flex-1 flex justify-center items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:text-yellow-400 px-3 py-2 transition"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button
              className={`flex items-center px-3 py-5 text-white hover:text-yellow-400 transition ${
                showMegaMenu ? "text-yellow-400" : ""
              }`}
            >
              Services <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
          </div>
          <Link
            href="/gallery"
            className="text-white hover:text-yellow-400 px-3 py-2 transition"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-yellow-400 px-3 py-2 transition"
          >
            About
          </Link>
          <div className="relative">
            <button className="flex items-center text-white hover:text-yellow-400 px-3 py-2 transition">
              Contact <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* 3. CTA Buttons section */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="flex items-center text-white hover:text-yellow-400 transition"
          >
            <span className="mr-1">🔒</span> Login
          </Link>
          <Link
            href="/book-appointment"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Book Now
          </Link>
          <button className="ml-2 p-2 rounded-full hover:bg-[#232a24] transition">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>

      {/* MEGAMENU POPUP */}
      {showMegaMenu && (
        <div
          className="absolute left-0 top-full w-full border-t border-[#833C30] shadow-2xl z-40"
          style={{
            background:
              "linear-gradient(to bottom, #1F271B 0%, #1F271B 70%, #E33C30 99%, #E33C30 100%)",
            paddingBottom: "1rem",
          }}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="max-w-[1200px] mx-10 flex pt-6 pb-2 px-0">
            {/* LEFT BANNER */}
            <div className="w-64 flex-shrink-0 bg-opacity-10 rounded-lg p-0 overflow-hidden ml-6 mr-8">
              <div className="flex flex-col h-full">
                <Image
                  src={banner}
                  alt="Red Car"
                  width={256}
                  height={128}
                  className="w-full h-full object-cover rounded-b-lg"
                  style={{ objectPosition: "center bottom" }}
                />
              </div>
            </div>
            {/* SERVICE COLUMNS */}
            <div className="flex gap-8">
              {serviceColumns.map((col, idx) => (
                <React.Fragment key={idx}>
                  <div key={idx} className="min-w-[150px]">
                    <div className="text-[#98BA87] font-semibold mb-2 text-[15px] tracking-wide">
                      {col.heading}
                    </div>
                    <ul className="mb-4 space-y-1">
                      {col.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            href="#"
                            className={`block text-[15px] transition ${getItemClass(
                              item
                              // col.highlight
                            )}`}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {col.subheading && (
                      <>
                        <div className="text-[#98BA87] font-semibold mb-2 mt-4 text-[15px] tracking-wide">
                          {col.subheading}
                        </div>
                        <ul className="space-y-1">
                          {col.subitems.map((item, i) => (
                            <li key={i}>
                              <Link
                                href="#"
                                className="block text-white text-[15px] hover:text-[#F3E330] transition"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  {idx < serviceColumns.length && (
                    <div className="flex w-1 justify-center items-stretch">
                      <div className="w-px h-full bg-gradient-to-b from-transparent via-[#98BA87]/40 to-transparent" />
                    </div>
                  )}
                </React.Fragment>
              ))}
              {/* RESOURCES */}
              <div className="min-w-[200px]">
                <div className="text-[#98BA87] font-semibold mb-2 text-[15px] tracking-wide">
                  RESOURCES
                </div>
                <ul className="space-y-4">
                  {resources.map((r, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="flex items-start hover:text-[#F3E330] transition"
                      >
                        {r.icon}
                        <div>
                          <div className="text-white font-medium text-[15px]">
                            {r.name}
                          </div>
                          <div className="text-gray-300 text-xs leading-relaxed mt-1">
                            {r.desc}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* FOOTER BAR INSIDE POPUP (NO SEPARATE BACKGROUND) */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#98BA87]/40 to-transparent" />
          <div className="flex justify-between items-center px-10 py-5">
            <div className="flex text-white items-center text-sm">
              <span className="bg-[#CA382E] border-white border-2 mr-2 rounded-full">
                <Image
                  src={key}
                  alt="Red Car"
                  width={256}
                  height={128}
                  className="w-full h-full object-cover p-2 rounded-b-lg"
                  style={{ objectPosition: "center bottom" }}
                />
              </span>
              What is call routing software?
              <Link
                href="#"
                className="underline text-[#F3E330]  hover:text-white ml-1"
              >
                lets connect
              </Link>
            </div>
            <Link
              href="#"
              className="bg-white text-red-600 px-4 py-1 rounded text-xs font-semibold hover:bg-gray-100 transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
