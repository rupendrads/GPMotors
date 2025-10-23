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

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

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

  return (
    <div className="gallery-carousel embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, i) => (
            <div
              className={`embla__slide ${
                i === selectedIndex ? "embla__slide--active" : ""
              }`}
              key={i}
            >
              <Image
                src={src}
                alt={`Gallery Image ${i + 1}`}
                fill
                className="object-cover"
              />
              <div className="embla__slide__overlay">
                <h2>Car Service</h2>
                <p>2025 Project</p>
                <p>G.P. Motors Teddington</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow Buttons */}
      <button
        className="embla__button embla__button--prev"
        onClick={scrollPrev}
        type="button"
      >
        <ChevronLeft />
      </button>
      <button
        className="embla__button embla__button--next"
        onClick={scrollNext}
        type="button"
      >
        <ChevronRight />
      </button>

      {/* ✅ Expert Advice Section */}
      <div className="gallery-expert-advice">
        <div className="expert-advice-content">
          <div className="expert-advice-text">
            <h3>Need Expert Advice on Your Car Service?</h3>
            <p>
              Our friendly service team is here to help. Call us for free
              consultation and expert recommendations.
            </p>
          </div>
          <div className="expert-advice-actions">
            <a className="expert-advice-btn">Request a Call</a>
            <span className="expert-advice-phone">
              020 8943 4103 / 020 8943 3588
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
