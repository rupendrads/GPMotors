import React from "react";
import Services from "./Services";
import Image from "next/image";
import banner from "../../public/images/homeBanner.png";
import WhyChooseUs from "./WhyChooseUs";
import Data from "./Data";
import Blogs from "./Bolgs";
import FAQ from "./FAQ";
import Link from "next/link";
import HomeFooter from "../components/HomeFooter";
export default function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={banner}
            alt="Professional mechanic working on car engine"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex">
              <span className="border-t-2 mt-2 w-25 border-white block"></span>
              <p className="text-white pl-4 uppercase text-sm tracking-widest mb-4 font-medium">
                G. P. MOTORS
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-semibold leading-tight mb-6">
              AUTOMOTIVE <span className="text-yellow-400">REPAIR</span>
              <br />& <span className="text-yellow-400">MAINTENANCE</span>
            </h1>
            <p className="text-lg md:text-xl font-thin text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Our Certified Technicians Deliver High-Quality Car Repairs And
              Maintenance To Keep Your Vehicle Running Smoothly And Reliably.
              Trust Our Experts For Top-Tier Auto Service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link href="">
                <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200">
                  Book Now
                </button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="bg-red-600 p-3 rounded-full">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Requesting a Call:</p>
                  <a
                    href="tel:02825054654"
                    className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors"
                  >
                    028 250 54654
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Services />
      <Data />
      <Blogs />
      <FAQ />
      <HomeFooter />
    </div>
  );
}
