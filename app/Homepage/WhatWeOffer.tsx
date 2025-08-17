// "use client"

// import React from "react";
// import { useKeenSlider } from "keen-slider/react";
// import Image from "next/image";
// import clsx from "clsx";
// import img1 from "../../public/images/offer1.jpg"
// import img2 from "../../public/images/offer2.jpg"
// import img3 from "../../public/images/offer3.jpg"
// import img4 from "../../public/images/offer4.jpg"
// import img5 from "../../public/images/offer5.jpg"
// import img6 from "../../public/images/offer6.jpg"
// const SERVICES = [
//   {
//     key: "car-bodywork",
//     title: "Car Bodywork",
//     img: img1,
//   },
//   {
//     key: "clutch-repair",
//     title: "Clutch Repair",
//     img: img2,
//   },
//   {
//     key: "beak-pad-change",
//     title: "Beak Pad Change",
//     img: img3,
//   },
//   {
//     key: "ac-repair",
//     title: "AC Repair",
//     img: img4,
//   },
//   {
//     key: "ac2-repair",
//     title: "AC Repair",
//     img: img5,
//   },
//   {
//     key: "ac3-repair",
//     title: "AC Repair",
//     img: img6,
//   },
// ];

// export default function WhatWeOffer() {
//   const [current, setCurrent] = React.useState<number>(1);

//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     slides: { perView: 4, spacing: 0 },
//     mode: "free",
//     initial: 1,
//     slideChanged(s) {
//       setCurrent(s.track.details.rel);
//     },
//     breakpoints: {
//       "(max-width: 900px)": {
//         slides: { perView: 1.2 },
//       },
//     },
//     rubberband: false,
//     loop: true,
//   });

//   // Determine card size and highlight based on position
//   const getCardVariant = (idx: number) => {
//     // Center slides: current+1, current+2 (mod length)
//     const bigIndexes = [
//       (current + 1) % SERVICES.length,
//       (current + 2) % SERVICES.length,
//     ];
//     if (idx === bigIndexes[1]) return "highlighted";
//     if (bigIndexes.includes(idx)) return "center";
//     return "side";
//   };

//   return (
//     <div className="w-full flex flex-col items-center py-12 bg-white">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <div className="text-xs tracking-wide text-red-600 font-semibold flex items-center justify-center gap-3">
//           <span className="w-8 h-px bg-red-400 inline-block" />
//           <span>WHAT WE OFFER</span>
//           <span className="w-8 h-px bg-red-400 inline-block" />
//         </div>
//         <h2 className="font-bold text-3xl md:text-4xl text-black mt-3 leading-tight">
//           Explore Our<br />Automotive Expertise
//         </h2>
//       </div>

//       <div className="relative w-full max-w-6xl flex items-center justify-center">
//         {/* Left Arrow */}
//         <button
//           onClick={() => instanceRef.current?.prev()}
//           className="absolute left-0 z-10 p-2 md:p-4 bg-white/80 hover:bg-gray-100 rounded-full shadow transition -translate-x-1/2"
//           aria-label="Prev"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="#E53E3E" strokeWidth={3} viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         {/* Carousel */}
//         <div
//           ref={sliderRef}
//           className="keen-slider flex w-full py-2 z-0"
//           style={{ minHeight: 340 }}
//         >
//           {SERVICES.map((service, idx) => {
//             const cardVariant = getCardVariant(idx);

//             const isBig = cardVariant === "center" || cardVariant === "highlighted";
//             const isHighlighted = cardVariant === "highlighted" && service.key === "beak-pad-change";

//             const cardClasses = clsx(
//               "keen-slider__slide flex flex-col items-center justify-end relative transition-all duration-300 ease-in-out",
//               isHighlighted && "z-10"
//             );

//             const width = isBig ? 265 : 140;
//             const height = isBig ? 320 : 320;

//             return (
//               <div
//                 key={service.key}
//                 className={cardClasses}
//                 style={{
//                   width,
//                   minWidth: width,
//                   maxWidth: width,
//                   height,
//                   minHeight: height,
//                   marginLeft: 0,
//                   marginRight: 0,
//                 }}
//               >
//                 <div className={clsx(
//                   "relative flex flex-col items-center w-full h-full transition-all duration-300 ease-in-out",
//                   isHighlighted ? "rounded-2xl border-4 border-red-500 shadow-xl bg-white" : ""
//                 )}>
//                   <Image
//                     src={service.img}
//                     alt={service.title}
//                     width={width}
//                     height={height}
//                     className={clsx(
//                       "object-cover w-full h-full transition-all duration-300",
//                       !isBig && "grayscale"
//                     )}
//                     draggable={false}
//                     style={{
//                       borderRadius: isHighlighted ? "1rem" : undefined,
//                     }}
//                   />
//                   {/* Title for non-highlighted cards */}
//                   {!isHighlighted && (
//                     <div className="absolute top-4 left-1/2 -translate-x-1/2 text-lg font-medium text-black drop-shadow px-2 py-1 pointer-events-none select-none">
//                       {service.title}
//                     </div>
//                   )}
//                   {/* Red highlighted label at bottom */}
//                   {isHighlighted && (
//                     <div className="absolute left-0 right-0 -bottom-9 flex justify-center">
//                       <div className="bg-red-500 rounded-b-2xl w-11/12 mx-auto py-3 text-white font-semibold text-lg text-center drop-shadow-sm">
//                         {service.title}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => instanceRef.current?.next()}
//           className="absolute right-0 z-60 p-2 md:p-4 bg-white/80 hover:bg-gray-100 rounded-full shadow transition translate-x-1/2"
//           aria-label="Next"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="#E53E3E" strokeWidth={3} viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }
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
  "w-[6.7rem]", // was 8.7rem
  "w-[11.8rem]", // was 13.8rem
  "w-[20.5rem]", // was 22.5rem
  "w-[20.5rem]", // was 22.5rem
  "w-[11.8rem]", // was 13.8rem
  "w-[6.7rem]", // was 8.7rem
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
    [startIndex, visibleCount]
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
