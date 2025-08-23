"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import banner from "../../public/images/banner.png";
import logo from "../../public/logo.svg";
import key from "../../public/icons/key.svg";
import React from "react";
import { usePathname } from "next/navigation";
import AdminMenuDetail from "@/components/AdminMenu";
import AdminMenuLinks from "@/components/AdminMenuLinks";

const serviceColumns = [
  {
    heading: "Maintanance/Services",
    highlight: "Brake Repair",
    items: [
      { name: "MOT", link: "/mot-service" },
      { name: "Minor Service", link: "/minor-service" },
      { name: "Intermediate", link: "/" },
      { name: "Full Service", link: "/" },
      { name: "AC Service", link: "/car-ac-service" },
      { name: "Brake Fluid", link: "/brake-fluid-service" },
      { name: "Coolant Change", link: "/coolant-change" },
      { name: "Timing Belt Change", link: "/timing-belt-change" },
      { name: "Transmission Service", link: "/transmission-service" },
      { name: "Cluch Repair", link: "/clutch-change" },
    ],
  },
  {
    heading: "ENGINE Maintanance",
    items: [
      { name: "Engline Redbuild", link: "/" },
      { name: "Gear box Rebuild", link: "/" },
      { name: "Clutch Replacement", link: "/" },
      { name: "Brake pads and disc replacement", link: "/" },
      { name: "Break calipr replacement", link: "/" },
      { name: "Suspension component replaecment", link: "/" },
      { name: "compressor /Condensenor replacement", link: "/" },
      { name: "Turbicharger", link: "/" },
      { name: "Head Gasket overall", link: "/" },
      { name: "Alternator /Starter motor replacement", link: "/" },
    ],
  },
  {
    heading: "Vehicle Diagnostic",
    items: [
      { name: "full diagnostic", link: "/" },
      { name: "Electrical", link: "/" },
      { name: "Specific system check", link: "/" },
      { name: "All Warning light", link: "/" },
    ],
    subheading: "Body Work Paint",
    subitems: [
      { name: "All which is there", link: "/" },
      { name: "Minor Respray", link: "/" },
    ],
  },
  {
    heading: "Electrical System",
    items: [
      { name: "All Which", link: "/" },
      { name: "Resistor replacement", link: "/" },
      { name: "Head light blub", link: "/" },
      { name: "wiring and rewiring", link: "/" },
      { name: "alram system", link: "/" },
      { name: "stereo system", link: "/" },
    ],
  },
];

const getItemClass = (item, highlight) =>
  item === highlight ? "hover:text-[#E33C30]" : " hover:text-[#E33C30]";

export default function Navbar() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarAccordions, setSidebarAccordions] = useState({
    Services: false,
    "CAR REPAIR": false,
    "ENGINE REPAIR": false,
    "BODYWORK & PAINT": false,
    MAINTENANCE: false,
  });
  const pathname = usePathname();
  console.log("pathname", pathname);

  const handleEnter = () => setShowMegaMenu(true);
  const handleLeave = () => setShowMegaMenu(false);

  const toggleAccordion = (key) => {
    setSidebarAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isAdmin = () => {
    return pathname.includes("/admin") ? true : false;
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="relative z-50 w-full">
      <div className="w-full bg-[#fff] flex items-center justify-between h-16 px-4 lg:px-10 poppins-font">
        <button
          className="lg:hidden p-2"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="w-7 h-7" />
        </button>
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Red Car"
            className="w-32 h-auto object-cover rounded-b-lg"
            style={{ objectPosition: "center bottom" }}
          />
        </div>
        {!isAdmin() ? (
          <>
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
              <Link
                href="/"
                className=" hover:text-[#E33C30] px-3 py-2 transition"
              >
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <button
                  className={`flex items-center px-3 py-5  hover:text-[#E33C30] transition ${
                    showMegaMenu ? "text-[#E33C30]" : ""
                  }`}
                >
                  Services <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>
              </div>
              <Link
                href="/"
                className=" hover:text-[#E33C30] px-3 py-2 transition"
              >
                Gallery
              </Link>
              <Link
                href="/aboutus"
                className=" hover:text-[#E33C30] px-3 py-2 transition"
              >
                About
              </Link>
              <Link
                href="/contactus"
                className=" hover:text-[#E33C30] px-3 py-2 transition"
              >
                Contact
              </Link>
              {/* <div className="relative">
            <button className="flex items-center  hover:text-[#E33C30] px-3 py-2 transition">
              Contact
            </button>
          </div> */}
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="hidden lg:flex items-center  hover:text-[#E33C30] transition"
              >
                <span className="mr-1">🔒</span> Login
              </Link>
              <Link
                href="/book-appointment"
                className="bg-red-600 hover:bg-red-700 text-white text-xs lg:text-sm font-semibold py-2 px-6 rounded-full transition"
              >
                Book Now
              </Link>
              <button className="hidden lg:block ml-2 p-2 rounded-full border transition">
                <svg
                  className="w-5 h-5 "
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
          </>
        ) : (
          <AdminMenuDetail />
        )}
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg transition-transform duration-300 rounded-r-2xl
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <Image src={logo} alt="Logo" width={120} height={32} />
          <button onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            <XMarkIcon className="w-7 h-7" />
          </button>
        </div>
        <nav className="flex-1 flex flex-col mt-2 space-y-1 px-2 overflow-y-auto">
          {!isAdmin() ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition font-medium text-gray-900"
                onClick={() => setSidebarOpen(false)}
              >
                Home
              </Link>
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-900"
                  onClick={() => toggleAccordion("Services")}
                >
                  <span>Services</span>
                  {sidebarAccordions["Services"] ? (
                    <ChevronUpIcon className="w-4 h-4" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                  )}
                </button>
                {sidebarAccordions["Services"] && (
                  <div className="mt-1 space-y-1">
                    {serviceColumns.map((col) => (
                      <div key={col.heading}>
                        <button
                          className="flex items-center justify-between w-full px-5 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-900"
                          onClick={() => toggleAccordion(col.heading)}
                        >
                          <span>{col.heading.replace(/_/g, " ")}</span>
                          {sidebarAccordions[col.heading] ? (
                            <ChevronUpIcon className="w-4 h-4" />
                          ) : (
                            <ChevronDownIcon className="w-4 h-4" />
                          )}
                        </button>
                        {sidebarAccordions[col.heading] && (
                          <div className="pl-5 mt-1 space-y-2 border-l border-gray-200">
                            {col.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.link}
                                className="block px-3 py-1 rounded hover:bg-gray-100 text-gray-700 text-sm"
                                onClick={() => setSidebarOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                            {col.subheading && (
                              <>
                                <div className="text-xs text-gray-500 mt-3 mb-1">
                                  {col.subheading}
                                </div>
                                {col.subitems.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.link}
                                    className="block px-3 py-1 rounded hover:bg-gray-100 text-gray-700 text-sm"
                                    onClick={() => setSidebarOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition font-medium text-gray-900"
                onClick={() => setSidebarOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition font-medium text-gray-900"
                onClick={() => setSidebarOpen(false)}
              >
                About
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition font-medium text-gray-900"
                style={{ textTransform: "lowercase" }}
                onClick={() => setSidebarOpen(false)}
              >
                contact
              </Link>
            </>
          ) : (
            <AdminMenuLinks closeSidebar={closeSidebar} />
          )}
        </nav>
      </div>

      {showMegaMenu && (
        <div
          className="absolute left-0 top-full w-full border-t bg-[#F8FCFF] shadow-2xl z-40 hidden lg:block"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="max-w-[1200px] mx-10 flex pt-6 pb-2 px-0">
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
            <div className="flex gap-2">
              {serviceColumns.map((col, idx) => (
                <React.Fragment key={idx}>
                  <div key={idx} className="min-w-[180px]">
                    <div
                      className={`text-[#838B80] ${
                        idx == 1 ? "flex-grow w-80" : "flex-shrink-0"
                      } mb-2 text-[15px] tracking-wide`}
                    >
                      {col.heading}
                    </div>
                    <ul className="mb-4 space-y-2">
                      {col.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={item.link}
                            className={`block text-[15px] transition ${getItemClass(
                              item.name,
                              col.highlight
                            )}`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {col.subheading && (
                      <>
                        <div className="text-[#838B80] mb-2 mt-4 text-[15px] tracking-wide">
                          {col.subheading}
                        </div>
                        <ul className="space-y-2">
                          {col.subitems.map((item, i) => (
                            <li key={i}>
                              <Link
                                href={item.link}
                                className="block text-[15px] hover:text-[#E33C30] transition"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  {idx < serviceColumns.length && (
                    <div className="flex w-1 justify-center items-stretch">
                      <div className="w-px h-full bg-gradient-to-b from-transparent via-[#838B80]/40 to-transparent" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="w-full h-px " />
          <div className="flex justify-between items-center px-10 py-5 bg-[#E8F3F2]">
            <div className="flex  items-center text-sm">
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
                href="/"
                className="underline text-[#8E840D]  hover:text-white ml-1"
              >
                lets connect
              </Link>
            </div>
            <Link
              href="/"
              className="bg-[#E33C30] text-white px-4 py-1 rounded text-xs font-semibold transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
