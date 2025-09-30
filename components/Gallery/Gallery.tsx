"use client";

import Image from "next/image";
import image_1 from "@/images/mot_checklist_1.png";
import image_2 from "@/images/mot_checklist_2.png";
import image_3 from "@/images/mot_checklist_3.png";
import image_4 from "@/images/mot_checklist_4.png";
import image_5 from "@/images/mot_checklist_5.png";
import image_6 from "@/images/mot_checklist_6.png";
import image_7 from "@/images/mot_checklist_7.png";
import image_8 from "@/images/mot_checklist_8.png";
import image_9 from "@/images/mot_checklist_9.png";
import image_10 from "@/images/mot_checklist_10.png";
import image_11 from "@/images/mot_checklist_11.png";
import image_12 from "@/images/mot_checklist_12.png";
import EmblaCarousel from "../Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { JSX, useEffect, useState } from "react";
import "../Carousel/CarouselStyle.css";

function Gallery() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [slides, setSlides] = useState<JSX.Element[]>([]);
  
  const images = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_10,
    image_11,
    image_12,
  ];

  const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };

  useEffect(() => {
    const newSlides: JSX.Element[] = [];
    
    images.forEach((image, index) => {
      newSlides.push(
        <div key={index} className="flex flex-col">
          <div className="h-[230px] relative flex">
            <Image
              layout="fill"
              objectFit="cover"
              priority
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="z-0"
            />
            <div className={numberBoxStyle}>
              <span className={numberStyle}>
                {index < 9 ? "0" + (index + 1).toString() : index + 1}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] p-[45px] bg-zinc-100">
            <div className="text-[20px] lg:text-[28px] font-[500] text-gray-950 leading-[125%] tracking-[0%]">
              Gallery Image {index + 1}
            </div>
          </div>
        </div>
      );
    });

    setSlides(newSlides);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-8 z-70 mx-4 lg:mx-8">
      <div className="flex flex-col gap-4">
        <div className="text-[24px] max-lg:text-center lg:text-[40px] font-[600] text-neutral-700">
          <span>Our Gallery</span>
        </div>
        <div className="text-[14px] lg:text-[20px] font-[400] md:max-lg:text-center text-stone-400 leading-[100%] traking-[0%]">
          <span>
            Explore our collection of automotive service images showcasing our expertise and attention to detail in car maintenance and repairs.
          </span>
        </div>
      </div>
      {isDesktop ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="gallery-grid-item">
              <div className="h-[250px] lg:h-[300px] relative flex rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  layout="fill"
                  objectFit="cover"
                  priority
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="z-0 hover:scale-105 transition-transform duration-300"
                />
                <div className={numberBoxStyle}>
                  <span className={numberStyle}>
                    {index < 9 ? "0" + (index + 1).toString() : index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full">
          {slides.length > 0 ? (
            <EmblaCarousel slides={slides} options={OPTIONS} />
          ) : (
            <div className="text-center p-4">Loading gallery...</div>
          )}
        </div>
      )}
    </div>
  );
}

const numberBoxStyle =
  "w-[49px] h-[49px] lg:w-[68px] lg:h-[68px] bg-red-500 text-white z-10 absolute flex justify-center items-center self-end rounded-tl-lg";
const numberStyle = "text-[14px] lg:text-[16px] font-[600]";

export default Gallery;