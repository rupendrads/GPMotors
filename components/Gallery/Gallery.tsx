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
  // const [isDesktop, setIsDesktop] = useState(false);
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
        <div key={index} className="flex flex-col w-[100%]">
          <div className="h-[230px] relative flex">
            <Image
              layout="fill"
              objectFit="cover"
              priority
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="z-0"
            />
          </div>
        </div>
      );
    });

    setSlides(newSlides);

    const handleResize = () => {
      //setIsDesktop(window.innerWidth >= 1024);
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
            Explore our collection of automotive service images showcasing our
            expertise and attention to detail in car maintenance and repairs.
          </span>
        </div>
      </div>
      <div className="w-full">
        <EmblaCarousel slides={slides} options={OPTIONS} />
      </div>
    </div>
  );
}

export default Gallery;
