"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  PhoneIcon, 
  MapPinIcon, 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  // Service Icons
  WrenchScrewdriverIcon,
  CogIcon,
  BoltIcon,
  PaintBrushIcon,
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  // Car Repair Icons
  TruckIcon,
  // Engine Repair Icons
  CommandLineIcon,
  ArrowPathIcon,
  ClockIcon,
  // Bodywork Icons
  SparklesIcon,
  // Maintenance Icons
  BeakerIcon,
  CircleStackIcon,
  BatteryIcon,
  // About Icons
  BookOpenIcon,
  UsersIcon,
  StarIcon,
  AcademicCapIcon,
  // General Icons
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  HomeIcon
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setActiveNestedDropdown(null);
  };

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    setActiveNestedDropdown(null);
  };

  const handleNestedDropdownToggle = (nestedDropdownName) => {
    setActiveNestedDropdown(activeNestedDropdown === nestedDropdownName ? null : nestedDropdownName);
  };

  const navItems = [
    { 
      name: "Home", 
      href: "/",
      icon: HomeIcon
    },
    { 
      name: "Services", 
      href: "/services",
      icon: WrenchScrewdriverIcon,
      hasDropdown: true,
      dropdownItems: [
        { 
          name: "Car Repair", 
          href: "/services/car-repair",
          icon: TruckIcon,
          hasNested: true,
          nestedItems: [
            { name: "Brake Repair", href: "/services/car-repair/brake-repair", icon: CircleStackIcon },
            { name: "Suspension Repair", href: "/services/car-repair/suspension", icon: ArrowPathIcon },
            { name: "Clutch Repair", href: "/services/car-repair/clutch", icon: CogIcon },
            { name: "Transmission Repair", href: "/services/car-repair/transmission", icon: CommandLineIcon }
          ]
        },
        { 
          name: "Engine Repair", 
          href: "/services/engine-repair",
          icon: CogIcon,
          hasNested: true,
          nestedItems: [
            { name: "Engine Diagnostics", href: "/services/engine-repair/diagnostics", icon: ComputerDesktopIcon },
            { name: "Engine Rebuild", href: "/services/engine-repair/rebuild", icon: ArrowPathIcon },
            { name: "Timing Belt", href: "/services/engine-repair/timing-belt", icon: ClockIcon },
            { name: "Head Gasket", href: "/services/engine-repair/head-gasket", icon: ShieldCheckIcon }
          ]
        },
        { 
          name: "Alternator Repair", 
          href: "/services/alternator-repair", 
          icon: BoltIcon 
        },
        { 
          name: "Bodywork & Paint", 
          href: "/services/bodywork-paint",
          icon: PaintBrushIcon,
          hasNested: true,
          nestedItems: [
            { name: "Dent Repair", href: "/services/bodywork-paint/dent-repair", icon: WrenchScrewdriverIcon },
            { name: "Scratch Repair", href: "/services/bodywork-paint/scratch-repair", icon: SparklesIcon },
            { name: "Full Respray", href: "/services/bodywork-paint/respray", icon: PaintBrushIcon },
            { name: "Panel Replacement", href: "/services/bodywork-paint/panel-replacement", icon: TruckIcon }
          ]
        },
        { 
          name: "Maintenance", 
          href: "/services/maintenance",
          icon: ClipboardDocumentCheckIcon,
          hasNested: true,
          nestedItems: [
            { name: "Oil Change", href: "/services/maintenance/oil-change", icon: BeakerIcon },
            { name: "Tire Services", href: "/services/maintenance/tires", icon: CircleStackIcon },
            { name: "Battery Check", href: "/services/maintenance/battery", icon: BatteryIcon },
            { name: "Fluid Top-up", href: "/services/maintenance/fluids", icon: BeakerIcon }
          ]
        },
        { 
          name: "MOT Testing", 
          href: "/services/mot-testing", 
          icon: ShieldCheckIcon 
        },
        { 
          name: "Diagnostics", 
          href: "/services/diagnostics", 
          icon: ComputerDesktopIcon 
        }
      ]
    },
    { 
      name: "About Us", 
      href: "/about",
      icon: UsersIcon,
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", href: "/about/our-story", icon: BookOpenIcon },
        { name: "Our Team", href: "/about/team", icon: UsersIcon },
        { name: "Why Choose Us", href: "/about/why-choose-us", icon: StarIcon },
        { 
          name: "Certifications", 
          href: "/about/certifications",
          icon: AcademicCapIcon,
          hasNested: true,
          nestedItems: [
            { name: "ISO Certified", href: "/about/certifications/iso", icon: ShieldCheckIcon },
            { name: "Industry Awards", href: "/about/certifications/awards", icon: StarIcon },
            { name: "Professional Memberships", href: "/about/certifications/memberships", icon: AcademicCapIcon }
          ]
        }
      ]
    },
    { 
      name: "Gallery", 
      href: "/gallery",
      icon: PhotoIcon
    },
    { 
      name: "Reviews", 
      href: "/reviews",
      icon: ChatBubbleLeftRightIcon
    },
    { 
      name: "Contact", 
      href: "/contact",
      icon: EnvelopeIcon
    }
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky w-full top-0 z-50">
        <div className="container ">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-gray-800">GP</span>
                <span className="text-red-600 ml-1">MOTORS</span>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-6 xl:space-x-8">
                {navItems?.map((item, index) => (
                  <div key={index} className="relative group">
                    <Link
                      href={item?.href || '#'}
                      className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 py-2 relative group text-sm xl:text-base"
                      onMouseEnter={() => item?.hasDropdown && setActiveDropdown(item.name)}
                    >
                      {item?.name || 'Unnamed'}
                      {item?.hasDropdown && (
                        <ChevronDownIcon className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
                    </Link>

                    {/* Desktop Dropdown Menu */}
                    {item?.hasDropdown && item?.dropdownItems && (
                      <div 
                        className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg border border-gray-100 rounded-md 
                                   opacity-0 invisible translate-y-[-10px] 
                                   group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                                   transition-all duration-300 ease-out z-50"
                        onMouseLeave={() => {
                          setActiveDropdown(null);
                          setActiveNestedDropdown(null);
                        }}
                      >
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem, dropdownIndex) => {
                            const DropdownIcon = dropdownItem?.icon;
                            return (
                              <div key={dropdownIndex} className="relative group/nested">
                                <Link
                                  href={dropdownItem?.href || '#'}
                                  className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200"
                                  onMouseEnter={() => dropdownItem?.hasNested && setActiveNestedDropdown(dropdownItem.name)}
                                >
                                  <div className="flex items-center space-x-3">
                                    {DropdownIcon && <DropdownIcon className="h-5 w-5 text-gray-500" />}
                                    <span>{dropdownItem?.name || 'Unnamed'}</span>
                                  </div>
                                  {dropdownItem?.hasNested && (
                                    <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                                  )}
                                </Link>

                                {/* Nested Dropdown Menu */}
                                {dropdownItem?.hasNested && dropdownItem?.nestedItems && activeNestedDropdown === dropdownItem.name && (
                                  <div 
                                    className="absolute top-0 left-full w-56 bg-white shadow-lg border border-gray-100 rounded-md 
                                               opacity-0 invisible translate-x-[-10px] 
                                               group-hover/nested:opacity-100 group-hover/nested:visible group-hover/nested:translate-x-0 
                                               transition-all duration-300 ease-out z-60"
                                    onMouseLeave={() => setActiveNestedDropdown(null)}
                                  >
                                    <div className="py-2">
                                      {dropdownItem.nestedItems?.map((nestedItem, nestedIndex) => {
                                        const NestedIcon = nestedItem?.icon;
                                        return (
                                          <Link
                                            key={nestedIndex}
                                            href={nestedItem?.href || '#'}
                                            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200"
                                          >
                                            {NestedIcon && <NestedIcon className="h-4 w-4 text-gray-500" />}
                                            <span>{nestedItem?.name || 'Unnamed'}</span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex flex-shrink-0">
              <Link
                href="/quote"
                className="bg-red-600 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium text-xs xl:text-sm uppercase tracking-wide whitespace-nowrap"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex-shrink-0">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu - Positioned outside the nav element */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex justify-between items-center h-16 px-4">
            <Link href="/" className="flex items-center">
              <div className="text-xl font-bold">
                <span className="text-gray-800">GP</span>
                <span className="text-red-600 ml-1">MOTORS</span>
              </div>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 p-2"
              aria-label="Close mobile menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className="h-full overflow-y-auto pt-0">
          <div className="px-4 py-6 space-y-1">
            {navItems?.map((item, index) => {
              const ItemIcon = item?.icon;
              return (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href={item?.href || '#'}
                      onClick={() => !item?.hasDropdown && setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-3 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 flex-1"
                    >
                      {ItemIcon && <ItemIcon className="h-5 w-5 flex-shrink-0" />}
                      <span className="text-base">{item?.name || 'Unnamed'}</span>
                    </Link>
                    {item?.hasDropdown && (
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="p-2 text-gray-500 hover:text-red-600 flex-shrink-0"
                        aria-label={`Toggle ${item.name} dropdown`}
                      >
                        <ChevronDownIcon 
                          className={`h-5 w-5 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    item?.hasDropdown && activeDropdown === item.name 
                      ? "max-h-screen opacity-100" 
                      : "max-h-0 opacity-0"
                  }`}>
                    <div className="pl-6 pb-3 space-y-1">
                      {item?.dropdownItems?.map((dropdownItem, dropdownIndex) => {
                        const DropdownIcon = dropdownItem?.icon;
                        return (
                          <div key={dropdownIndex}>
                            <div className="flex items-center justify-between py-2">
                              <Link
                                href={dropdownItem?.href || '#'}
                                onClick={() => !dropdownItem?.hasNested && setIsMobileMenuOpen(false)}
                                className="flex items-center space-x-3 text-gray-600 hover:text-red-600 transition-colors duration-200 flex-1"
                              >
                                {DropdownIcon && <DropdownIcon className="h-4 w-4 flex-shrink-0" />}
                                <span className="text-sm">{dropdownItem?.name || 'Unnamed'}</span>
                              </Link>
                              {dropdownItem?.hasNested && (
                                <button
                                  onClick={() => handleNestedDropdownToggle(dropdownItem.name)}
                                  className="p-1 text-gray-400 hover:text-red-600 flex-shrink-0"
                                  aria-label={`Toggle ${dropdownItem.name} submenu`}
                                >
                                  <ChevronRightIcon 
                                    className={`h-4 w-4 transition-transform duration-200 ${
                                      activeNestedDropdown === dropdownItem.name ? 'rotate-90' : ''
                                    }`} 
                                  />
                                </button>
                              )}
                            </div>
                            
                            {/* Mobile Nested Dropdown */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              dropdownItem?.hasNested && activeNestedDropdown === dropdownItem.name 
                                ? "max-h-64 opacity-100" 
                                : "max-h-0 opacity-0"
                            }`}>
                              <div className="pl-6 space-y-1">
                                {dropdownItem?.nestedItems?.map((nestedItem, nestedIndex) => {
                                  const NestedIcon = nestedItem?.icon;
                                  return (
                                    <Link
                                      key={nestedIndex}
                                      href={nestedItem?.href || '#'}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center space-x-2 text-gray-500 hover:text-red-600 py-2 transition-colors duration-200"
                                    >
                                      {NestedIcon && <NestedIcon className="h-3 w-3 flex-shrink-0" />}
                                      <span className="text-xs">{nestedItem?.name || 'Unnamed'}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Mobile CTA Button */}
            <div className="pt-6">
              <Link
                href="/quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-red-600 text-white px-6 py-4 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium text-center text-sm uppercase tracking-wide"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
