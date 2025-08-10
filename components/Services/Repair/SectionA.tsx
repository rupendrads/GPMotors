"use client";
import { titleDesc } from "./types";

interface Props {
  titleDescriptions: titleDesc[];
}

function SectionA({ titleDescriptions }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className={boxStyle}>
        <span className="font-[700] text-[27px] lg:text-[40px] text-white capitalize leading-[120%] tracker-[0%]">
          {titleDescriptions[0].title}
        </span>
      </div>
      <div className={boxStyle}>
        <span className="font-[500] text-[12px] lg:text-[18px] text-white capitalize leading-[100%] tracker-[0%] text-[sky-100]">
          {titleDescriptions[0].desc}
        </span>
      </div>
      <div className={boxStyle}>
        <div className="w-[266px] lg:w-[340px]">
          <span className="w-[340px] font-[700] text-[16px] lg:text-[24px] capitalize leading-[100%] tracker-[0%] text-yellow-300">
            {titleDescriptions[1].title}
          </span>
        </div>
      </div>
      <div className={boxStyle}>
        <span className="font-[500] text-[12px] lg:text-[16px] capitalize leading-[100%] tracker-[0%] text-sky-100">
          {titleDescriptions[1].desc}
        </span>
      </div>
    </div>
  );
}

const boxStyle = "w-[252px] md:w-[300px] lg:w-[500px] lg:pl-[70px]";

export default SectionA;
