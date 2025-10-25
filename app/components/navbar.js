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
//import AdminMenuDetail from "@/components/AdminMenu";
//import AdminMenuLinks from "@/components/AdminMenuLinks";

const serviceColumns = [
  {
    heading: "Maintanance/Services",
    highlight: "Brake Repair",
    items: [
      { name: "MOT", link: "/mot-service" },
      { name: "Minor Service", link: "/minor-service" },
      { name: "Intermediate Service", link: "/intermediate-service" },
      { name: "Full Service", link: "/full-service" },
      { name: "AC Service", link: "/car-ac-service" },
      { name: "Brake Fluid", link: "/brake-fluid-service" },
      { name: "Coolant Change", link: "/coolant-change" },
      { name: "Timing Belt Change", link: "/timing-belt-change" },
      { name: "Transmission Service", link: "/transmission-service" },
      { name: "Cluch Repair", link: "/clutch-change" },
      { name: "Dent Removal", link: "/car-dent-removal" },
    ],
  },
  {
    heading: "ENGINE Maintanance",
    items: [
      { name: "Engine Rebuild", link: "/engine-rebuild" },
      { name: "Gear box Rebuild", link: "/gearbox-rebuild" },
      { name: "Clutch Replacement", link: "/clutch-replacement" },
      {
        name: "Brake pads and Disc Replacement",
        link: "/brake-disc-replacement",
      },
      { name: "Brake Caliper Replacement", link: "/brake-caliper-replacement" },
      {
        name: "Suspension Component Replacement",
        link: "/suspension-replacement",
      },
      {
        name: "Compressor /Condensor Replacement",
        link: "/compressor-replacement",
      },
      { name: "Turbocharger Replacement", link: "/turbocharger-replacement" },
      { name: "Head Gasket Overhaul", link: "/gasket-overhaul" },
      {
        name: "Alternator /Starter Motor Replacement",
        link: "/alternator-replacement",
      },
    ],
  },
  {
    heading: "Vehicle Diagnostic",
    items: [
      { name: "Full diagnostic", link: "/full-diagnostic" },
      { name: "Electrical diagnostic", link: "/electrical-diagnostic" },
      { name: "Specific system check", link: "/specific-system-check" },
      { name: "All Warning light", link: "/warning-light" },
    ],
    subheading: "Body Work Paint",
    subitems: [
      { name: "All which is there", link: "/" },
      { name: "Minor Respray", link: "/minor-respray" },
    ],
  },
  {
    heading: "Electrical System",
    items: [
      { name: "All Which", link: "/" },
      { name: "Resistor replacement", link: "/resistor-replacement" },
      { name: "Headlight bulb", link: "/headlight-replacement" },
      { name: "Wiring and rewiring", link: "/wiring-rewiring" },
      { name: "Alarm system", link: "/alarm-system" },
      { name: "Stereo system", link: "/stereo-system" },
    ],
  },
];

const brandColumns = [
  {
    items: [
      { name: "Audi", link: "/brands/Audi" },
      { name: "Volks Wagen", link: "/brands/Volkswagen" },
    ],
  },
  {
    items: [
      { name: "Ford", link: "/brands/Ford" },
      { name: "Mercedes", link: "/brands/Mercedes" },
    ],
  },
  {
    items: [
      { name: "BMW", link: "/brands/BMW" },
      { name: "Land Rover", link: "/brands/Land-Rover" },
    ],
  },
  {
    items: [
      { name: "Skoda", link: "/brands/Skoda" },
      { name: "Toyota", link: "/brands/Toyota" },
    ],
  },
  {
    items: [
      { name: "Honda", link: "/brands/Honda" },
      { name: "Volvo", link: "/brands/Volvo" },
    ],
  },
  {
    items: [
      { name: "Citroen", link: "/brands/Citroen" },
      { name: "Tesla", link: "/brands/Tesla" },
    ],
  },
  {
    items: [
      { name: "Polestar", link: "/brands/Polestar" },
      { name: "Peugeot", link: "/brands/Peugeot" },
    ],
  },
];

const getItemClass = (item, highlight) =>
  item === highlight ? "hover:text-[#E33C30]" : " hover:text-[#E33C30]";

export default function Navbar() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showBrandsMegaMenu, setShowBrandsMegaMenu] = useState(false);
  const [showReminderMenu, setShowReminderMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarAccordions, setSidebarAccordions] = useState({
    Services: false,
    Brands: false,
    "CAR REPAIR": false,
    "ENGINE REPAIR": false,
    "BODYWORK & PAINT": false,
    MAINTENANCE: false,
  });
  const pathname = usePathname();
  console.log("pathname", pathname);

  const handleEnter = () => setShowMegaMenu(true);
  const handleLeave = () => setShowMegaMenu(false);

  const handleBrandsEnter = () => setShowBrandsMegaMenu(true);
  const handleBrandsLeave = () => setShowBrandsMegaMenu(false);

  const handleReminderEnter = () => setShowReminderMenu(true);
  const handleReminderLeave = () => {
    setShowReminderMenu(false);
  };

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
    <>
      {!isAdmin() ? (
        <nav className="relative z-50 w-full border-b border-gray-300">
          <div className="w-full bg-[#fff] flex items-center justify-between px-4 lg:px-10 poppins-font">
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
                <div
                  className="relative"
                  onMouseEnter={handleBrandsEnter}
                  onMouseLeave={handleBrandsLeave}
                >
                  <button
                    className={`flex items-center px-3 py-5  hover:text-[#E33C30] transition ${
                      showBrandsMegaMenu ? "text-[#E33C30]" : ""
                    }`}
                  >
                    Brands <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <Link
                  href="/gallery"
                  className=" hover:text-[#E33C30] px-3 py-2 transition"
                >
                  Gallery
                </Link>
                <Link
                  href="/"
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
              </div>
              <div className="flex items-center space-x-4">
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
              <button
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
              >
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
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-900"
                      onClick={() => toggleAccordion("Brands")}
                    >
                      <span>Brands</span>
                      {sidebarAccordions["Brands"] ? (
                        <ChevronUpIcon className="w-4 h-4" />
                      ) : (
                        <ChevronDownIcon className="w-4 h-4" />
                      )}
                    </button>
                    {sidebarAccordions["Brands"] && (
                      <div className="mt-1 space-y-1 pl-5">
                        {brandColumns.map((col, idx) => (
                          <div key={idx}>
                            {col.items.map((brand) => (
                              <Link
                                key={brand.name}
                                href={brand.link}
                                className="block px-3 py-1 rounded hover:bg-gray-100 text-gray-700 text-sm"
                                onClick={() => setSidebarOpen(false)}
                              >
                                {brand.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    href="/gallery"
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
                // <AdminMenuLinks closeSidebar={closeSidebar} />
                <></>
              )}
            </nav>
          </div>

          {/* Services Mega Menu */}
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
                    href="/contact"
                    className="underline text-[#8E840D]  hover:text-red ml-1"
                  >
                    lets connect
                  </Link>
                </div>
                <Link
                  href="/book-appointment"
                  className="bg-[#E33C30] text-white px-4 py-1 rounded text-xs font-semibold transition"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          )}

          {/* Brands Mega Menu */}
          {showBrandsMegaMenu && (
            <div
              className="absolute left-0 top-full w-full border-t bg-[#F8FCFF] shadow-2xl z-40 hidden lg:block"
              onMouseEnter={handleBrandsEnter}
              onMouseLeave={handleBrandsLeave}
            >
              <div className="flex justify-center pt-8 pb-6 px-0">
                <div className="mx-20 flex gap-16 w-full justify-between">
                  {brandColumns.map((col, idx) => (
                    <div key={idx} className="flex flex-col space-y-4">
                      {col.items.map((brand, i) => (
                        <Link
                          key={i}
                          href={brand.link}
                          className="text-[16px] text-gray-800 hover:text-[#E33C30] transition font-medium"
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-px " />
              <div className="flex justify-between items-center px-10 py-5 bg-[#E8F3F2]">
                <div className="flex items-center text-sm">
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
                    href="/contact"
                    className="underline text-[#8E840D] hover:text-red ml-1"
                  >
                    lets connect
                  </Link>
                </div>
                <Link
                  href="/book-appointment"
                  className="bg-[#E33C30] text-white px-4 py-1 rounded text-xs font-semibold transition"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          )}
        </nav>
      ) : (
        <nav className="relative z-50 w-full border-b border-gray-300">
          <div className="w-full bg-[#fff] flex justify-between px-4 lg:px-10 poppins-font ">
            <button
              className="lg:hidden p-2"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Bars3Icon className="w-7 h-7" />
            </button>
            <div className="mt-3">
              <div className="flex items-center">
                <Image
                  src={logo}
                  alt="Red Car"
                  className="w-32 h-auto object-cover rounded-b-lg"
                  style={{ objectPosition: "center bottom" }}
                />
              </div>
            </div>
            <>
              <div className="hidden lg:flex flex-1 justify-center space-x-8">
                <Link
                  href="/admin/booking-config"
                  className=" hover:text-[#E33C30] px-3 py-2 transition"
                  onClick={closeSidebar ?? closeSidebar}
                >
                  Booking Configuration
                </Link>
                <Link
                  href="/admin/book-appointment-list"
                  className=" hover:text-[#E33C30] px-3 py-2 transition"
                  onClick={closeSidebar ?? closeSidebar}
                >
                  Booking List
                </Link>
                <Link
                  href="/admin/client-detail-list"
                  className=" hover:text-[#E33C30] px-3 py-2 transition"
                  onClick={closeSidebar ?? closeSidebar}
                >
                  Client Detail
                </Link>
                <div
                  className="relative w-[140px]"
                  onMouseEnter={handleReminderEnter}
                  onMouseLeave={handleReminderLeave}
                >
                  <button
                    className={`flex px-3 py-2 items-center cursor-pointer transition ${
                      showReminderMenu ? "text-[#E33C30]" : ""
                    }`}
                  >
                    Reminder <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </button>
                  {showReminderMenu && (
                    <div className="flex flex-col absolute left-0 top-full z-1000">
                      <Link
                        href="/admin/reminder"
                        className=" hover:text-[#E33C30] px-3 py-2 transition"
                        onClick={closeSidebar ?? closeSidebar}
                      >
                        Appointment
                      </Link>
                      <Link
                        href="/admin/mot-reminder"
                        className=" hover:text-[#E33C30] px-3 py-2 transition"
                        onClick={closeSidebar ?? closeSidebar}
                      >
                        MOT
                      </Link>
                    </div>
                  )}
                </div>
                <div className="mt-1 mb-1 px-3 py-2">
                  <Link
                    href="/"
                    className="px-3 py-2 border text-white rounded-lg bg-red-500 ml-4"
                  >
                    <span className="mr-1">🔒</span> Login
                  </Link>
                </div>
              </div>
            </>
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
              <button
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="w-7 h-7" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col mt-2 space-y-1 px-2 overflow-y-auto">
              <div className="hidden lg:flex flex-1 justify-center space-x-8">
                <Link
                  href="/admin/booking-config"
                  className=" hover:text-[#E33C30] px-3 py-2 transition"
                  onClick={closeSidebar ?? closeSidebar}
                >
                  Booking Configuration
                </Link>
                <Link
                  href="/admin/book-appointment-list"
                  className=" hover:text-[#E33C30] px-3 py-2 transition"
                  onClick={closeSidebar ?? closeSidebar}
                >
                  Booking List
                </Link>
                <Link
                  href="/admin/client-detail-list"
                  className=" hover:text-[#E33C30] px-3 py-2 transition"
                  onClick={closeSidebar ?? closeSidebar}
                >
                  Client Detail
                </Link>
                <div
                  className="relative w-[140px] border border-red-500"
                  onMouseEnter={handleReminderEnter}
                  onMouseLeave={handleReminderLeave}
                >
                  <button
                    className={`flex px-3 py-2 items-center  hover:text-[#E33C30] cursor-pointer transition ${
                      showReminderMenu ? "text-[#E33C30]" : ""
                    }`}
                  >
                    Reminder <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </button>
                  {showReminderMenu && (
                    <div className="flex flex-col absolute left-0 top-full z-1000 px-2 py-2">
                      <Link
                        href="/admin/reminder"
                        className=" hover:text-[#E33C30] px-3 py-2 transition"
                        onClick={closeSidebar ?? closeSidebar}
                      >
                        Appointment
                      </Link>
                      <Link
                        href="/admin/mot-reminder"
                        className=" hover:text-[#E33C30] px-3 py-2 transition"
                        onClick={closeSidebar ?? closeSidebar}
                      >
                        MOT
                      </Link>
                    </div>
                  )}
                </div>
                <div className="mt-1 mb-1 px-3 py-2">
                  <Link
                    href="/"
                    className="px-3 py-2 border text-white rounded-lg bg-red-500 ml-4"
                  >
                    <span className="mr-1">🔒</span> Login
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </nav>
      )}
    </>
  );
}
