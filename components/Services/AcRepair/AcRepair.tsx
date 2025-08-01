"use client";

import Image from "next/image";
import CarAcRepairImage from "@/images/car-ac-repair.png";
import SectionA from "./SectionA";
import SectionB from "./SectionB";

const listItems = [
  "Refill or replace gases regularly",
  "Clean filters, prevent clogging",
  "Regular servicing recommended",
  "Remove unpleasant car odors",
  "Test for gas leaks",
  "Check for fluid leaks",
  "Evacuate air and moisture",
  "Recover and recycle refrigerant",
];

function AcRepair() {
  return (
    <div className="mt-8 border-red-800 w-full">
      <div className="w-full h-[1100px] md:h-[600px] lg:h-[750px] relative">
        <Image
          src={CarAcRepairImage}
          alt="google logo"
          layout="fill"
          objectFit="cover"
          priority
          z-0="true"
        />
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 z-10 absolute">
          <SectionA />
          <SectionB listItems={listItems} />
        </div>
      </div>
    </div>
  );
}

export default AcRepair;
