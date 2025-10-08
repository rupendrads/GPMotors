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

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import "./GalleryStyle.css";

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "center",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const images = [
    image_1, image_2, image_3, image_4, image_5, image_6,
    image_7, image_8, image_9, image_10, image_11, image_12,
  ];

  return (
    <div className="gallery-carousel embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, i) => (
            <div 
              className={`embla__slide ${i === selectedIndex ? 'embla__slide--active' : ''}`} 
              key={i}
            >
              <Image src={src} alt={`Gallery Image ${i + 1}`} fill className="object-cover" />
              <div className="embla__slide__overlay">
                <h2>Car Service</h2>
                <p>2025 Project</p>
                <p>G.P. Motors Teddington</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="embla__button embla__button--prev" onClick={scrollPrev} type="button">
        <svg className="embla__button__svg" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </svg>
      </button>
      <button className="embla__button embla__button--next" onClick={scrollNext} type="button">
        <svg className="embla__button__svg" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </svg>
      </button>
    </div>
  );
}
