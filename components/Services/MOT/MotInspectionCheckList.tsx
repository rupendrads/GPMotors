"use client";

import Image from "next/image";
import inspectionCheckListData from "./inspectionCheckList";
import MotInspectionCheck from "./MotInspectionCheck";
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
import EmblaCarousel from "../../Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { JSX, useEffect, useState } from "react";

function MotInspectionCheckList() {
  const [isDesktop, setIsDesktop] = useState(false);
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
  const SLIDES: JSX.Element[] = [];

  useEffect(() => {
    inspectionCheckListData.map((item, index) => {
      SLIDES.push(
        <MotInspectionCheck
          key={item.id}
          title={item.title}
          content={item.content}
        >
          <div className="h-[230px] relative flex">
            <Image
              layout="fill"
              objectFit="cover"
              priority
              src={images[index]}
              alt={item.title}
              className="z-0"
            ></Image>
            <div className={numberBoxStyle}>
              <span className={numberStyle}>
                {index < 9 ? "0" + (index + 1).toString() : index + 1}
              </span>
            </div>
          </div>
        </MotInspectionCheck>
      );
    });

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="text-[24px] max-lg:text-center lg:text-[40px] font-[600] text-neutral-700">
          <span>Car MOT Inspection Checklist At LMS Garage</span>
        </div>
        <div className="text-[14px] lg:text-[20px] font-[400] md:max-lg:text-center text-stone-400 leading-[100%] traking-[0%]">
          <span>
            Most cars on the London roads have a checklist to ensure its working
            before the MOT test. To qualify for this test, understand the auto
            part condition and its valid repair. Regardless of your own checking
            these components, trust a qualified mechanic to run the PRE-MOT for
            you. During a pre-MOT check, a technician can perform a visual check
            of the following for
          </span>
        </div>
      </div>
      {isDesktop ? (
        <div className="grid grid-cols-3 gap-8">
          {inspectionCheckListData.map((item, index) => (
            <MotInspectionCheck
              key={item.id}
              title={item.title}
              content={item.content}
            >
              <div className="h-[230px] relative flex">
                <Image
                  layout="fill"
                  objectFit="cover"
                  priority
                  src={images[index]}
                  alt={item.title}
                  className="z-0"
                ></Image>
                <div className={numberBoxStyle}>
                  <span className={numberStyle}>
                    {index < 9 ? "0" + (index + 1).toString() : index + 1}
                  </span>
                </div>
              </div>
            </MotInspectionCheck>
          ))}
        </div>
      ) : (
        <div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      )}
    </div>
  );
}

const numberBoxStyle =
  "w-[49px] h-[49px] lg:w-[68px] lg:h-[68px] bg-red-500 text-white z-10 absolute flex justify-center items-center self-end";
const numberStyle = "text-[14px] lg:text-[16px] font-[600]";

export default MotInspectionCheckList;
