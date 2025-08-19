'use client';
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import img1 from "../../public/images/offer1.jpg";
import img2 from "../../public/images/offer2.jpg";
import img3 from "../../public/images/offer3.jpg";
import img4 from "../../public/images/offer4.jpg";
import img5 from "../../public/images/offer5.jpg";
import img6 from "../../public/images/offer6.jpg";

const items = [
  { id: 1, title: "Car Bodywork", img: img1 },
  { id: 2, title: "Clutch Repair", img: img2 },
  { id: 3, title: "AC Repair", img: img3 },
  { id: 4, title: "Beak Pad Change", img: img4 },
  { id: 5, title: "Engine Repair", img: img5 },
  { id: 6, title: "Transmission", img: img6 },
];

// Each reduced by 2rem from your previous widths
const widths = [
  "w-[6.7rem]", 
  "w-[11.8rem]",
  "w-[20.5rem]",
  "w-[20.5rem]",
  "w-[11.8rem]",
  "w-[6.7rem]", 
];

// Mobile widths for 3 items - you can adjust these as needed
const mobileWidths = [
  "w-[8rem]",   // smaller item
  "w-[16rem]",  // center highlighted item
  "w-[8rem]",   // smaller item
];

const cardHeight = "h-[30rem]";
// Adjust slide distance to match reduced first-card width + gap-2 (8px)
// 6.7rem ≈ 107.2px; 107 + 8 ≈ 115px
const SLIDE_PX = 116;
const MOBILE_SLIDE_PX = 128; // Adjust for mobile
const DURATION_MS = 400;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function WhatWeOffer() {
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    function checkScreenSize() {
      setIsMobile(window.innerWidth <= 640); // Tailwind's sm breakpoint
    }
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const visibleCount = isMobile ? 3 : 6;
  const currentWidths = isMobile ? mobileWidths : widths;
  const currentSlidePx = isMobile ? MOBILE_SLIDE_PX : SLIDE_PX;
  const total = items.length;
  const step = 1;

  const visible = useMemo(
    () => Array.from({ length: visibleCount }).map((_, i) => items[mod(startIndex + i, total)]),
    [startIndex, visibleCount,total]
  );

  const handleNav = (dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      setStartIndex((i) => mod(i + (dir === "right" ? step : -step), total));
      setAnimating(false);
    }, DURATION_MS);
  };

  const translatePx =
    animating ? (direction === "right" ? -currentSlidePx : currentSlidePx) : 0;

  // Highlight index: middle item for mobile (index 1), or index 3 for desktop
  const highlightIndex = isMobile ? 1 : 3;

  return (
    <div className="relative w-full mt-10">
      <div className="flex justify-center items-center text-center mb-12">
          <div>
            <div className='flex justify-center'>
              <span className='border-t-2 mt-2 mr-2 w-10 border-red-600 block'></span>
                <p className="text-red-600 uppercase tracking-wide font-semibold mb-3 text-sm">
              WHAT WE OFFER
            </p>
              <span className='border-t-2 mt-2 ml-2 w-10 border-red-600 block'></span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Explore Our <br />
              Automotive Expertise
            </h2>
          </div>
        </div>
      {/* Center the entire carousel area */}
      <div className="mx-auto w-full max-w-[96rem]">
        {/* Track wrapper centered */}
        <div className="w-full overflow-hidden">
          <div
            className="flex items-center justify-center relative"
            style={{
              transform: `translateX(${translatePx}px)`,
              transition: animating ? `transform ${DURATION_MS}ms ease-in-out` : "none",
              willChange: "transform",
            }}
          >
            {visible.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className={`${currentWidths[idx]} ${cardHeight} flex flex-col justify-end relative ${
                  idx === highlightIndex
                    ? "border-6 rounded-xl border-red-500 grayscale-0"
                    : "border border-transparent grayscale"
                } rounded bg-white shadow overflow-hidden`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  draggable={false}
                />
                
                {/* Previous Arrow - Vertically Centered on First Item */}
                {idx === 0 && (
                  <button
                    onClick={() => handleNav("left")}
                    aria-label="Previous"
                    className="absolute top-1/2 left-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                    style={{ transform: "translateY(-50%)" }}
                  >
                    <svg 
                      className="w-5 h-5 text-red-500" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth={2.5} 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                
                {/* Next Arrow - Vertically Centered on Last Item */}
                {idx === visibleCount - 1 && (
                  <button
                    onClick={() => handleNav("right")}
                    aria-label="Next"
                    className="absolute top-1/2 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                    style={{ transform: "translateY(-50%)" }}
                  >
                    <svg 
                      className="w-5 h-5 text-red-500" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth={2.5} 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
                
                {/* Title overlays */}
                {idx === highlightIndex ? (
                  <div className="absolute inset-x-0 bottom-0 bg-red-500 text-white text-center text-lg font-bold py-3">
                    {item.title}
                  </div>
                ) : (
                  <div className="absolute inset-x-0 bottom-0 bg-black/40 text-white text-center text-base font-semibold py-2">
                    {item.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
