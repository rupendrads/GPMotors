"use client";
import Link from "next/link";
import { useState } from "react";
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
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
    <header className="w-full">

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-gray-800">GP</span>
                <span className="text-red-600 ml-1">MOTORS</span>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8">
                {navItems?.map((item, index) => (
                  <div key={index} className="relative group">
                    <Link
                      href={item?.href || '#'}
                      className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 py-2 relative group"
                      onMouseEnter={() => item?.hasDropdown && setActiveDropdown(item.name)}
                    >
                      {item?.name || 'Unnamed'}
                      {item?.hasDropdown && (
                        <ChevronDownIcon className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
                    </Link>

                    {/* Dropdown Menu with Top-to-Bottom Animation */}
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

                                {/* Nested Dropdown Menu with Left-to-Right Animation */}
                                {dropdownItem?.hasNested && dropdownItem?.nestedItems && activeNestedDropdown === dropdownItem.name && (
                                  <div 
                                    className="absolute top-0 left-full  w-56 bg-white border border-gray-100 rounded-md 
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

            {/* CTA Button - Right Side */}
            <div className="hidden lg:flex">
              <Link
                href="/quote"
                className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200"
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

        {/* Mobile Menu with Slide-Down Animation */}
        <div
          className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-[-10px]"
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              {navItems?.map((item, index) => {
                const ItemIcon = item?.icon;
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item?.href || '#'}
                        onClick={() => !item?.hasDropdown && setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-3 text-gray-700 hover:text-red-600 font-medium py-3 transition-colors duration-200 flex-1"
                      >
                        {ItemIcon && <ItemIcon className="h-5 w-5" />}
                        <span>{item?.name || 'Unnamed'}</span>
                      </Link>
                      {item?.hasDropdown && (
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="p-2 text-gray-500 hover:text-red-600"
                        >
                          <ChevronDownIcon 
                            className={`h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Dropdown with Slide-Down Animation */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      item?.hasDropdown && activeDropdown === item.name 
                        ? "max-h-96 opacity-100" 
                        : "max-h-0 opacity-0"
                    }`}>
                      <div className="pl-4 pb-2">
                        {item?.dropdownItems?.map((dropdownItem, dropdownIndex) => {
                          const DropdownIcon = dropdownItem?.icon;
                          return (
                            <div key={dropdownIndex}>
                              <div className="flex items-center justify-between">
                                <Link
                                  href={dropdownItem?.href || '#'}
                                  onClick={() => !dropdownItem?.hasNested && setIsMobileMenuOpen(false)}
                                  className="flex items-center space-x-3 text-gray-600 hover:text-red-600 py-2 text-sm transition-colors duration-200 flex-1"
                                >
                                  {DropdownIcon && <DropdownIcon className="h-4 w-4" />}
                                  <span>{dropdownItem?.name || 'Unnamed'}</span>
                                </Link>
                                {dropdownItem?.hasNested && (
                                  <button
                                    onClick={() => handleNestedDropdownToggle(dropdownItem.name)}
                                    className="p-1 text-gray-400 hover:text-red-600"
                                  >
                                    <ChevronRightIcon 
                                      className={`h-3 w-3 transition-transform duration-200 ${
                                        activeNestedDropdown === dropdownItem.name ? 'rotate-90' : ''
                                      }`} 
                                    />
                                  </button>
                                )}
                              </div>
                              
                              {/* Mobile Nested Dropdown with Slide Animation */}
                              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                dropdownItem?.hasNested && activeNestedDropdown === dropdownItem.name 
                                  ? "max-h-48 opacity-100" 
                                  : "max-h-0 opacity-0"
                              }`}>
                                <div className="pl-4 mt-1">
                                  {dropdownItem?.nestedItems?.map((nestedItem, nestedIndex) => {
                                    const NestedIcon = nestedItem?.icon;
                                    return (
                                      <Link
                                        key={nestedIndex}
                                        href={nestedItem?.href || '#'}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center space-x-2 text-gray-500 hover:text-red-600 py-1 text-xs transition-colors duration-200"
                                      >
                                        {NestedIcon && <NestedIcon className="h-3 w-3" />}
                                        <span>{nestedItem?.name || 'Unnamed'}</span>
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
                    
                    <div className="border-b border-gray-100"></div>
                  </div>
                );
              })}
              
              <Link
                href="/quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium text-center text-sm uppercase tracking-wide mt-4"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
