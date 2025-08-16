"use client";
import Image from "next/image";
import MotBookNowContent from "./MotBookNowContent";

const header = "Why Choose Us For MOT?";
const description = `Being one of the most eccentric garages in London, we have been befitting people with multiplat services for over 10 years. So if you have any queries the below points is the answer you need in this moment that LMS is clickable because:`;
const listItems = [
  "Dealing with issues by experts",
  "In split-second inspections",
  "Finest replacement of parts",
  "Save your money and time",
  "Tailormade services",
  "Get MOT Up-to-date services",
];

function MotBookNow2() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-red-500 opacity-80 z-10 p-8 flex flex-col gap-4 z-70">
        <MotBookNowContent
          header={header}
          description={description}
          listItems={listItems}
        />
      </div>
      <Image
        src="/images/motservice_booknow_2.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        z-0="true"
      />
    </div>

    // <div className="relative">
    //   <div className="absolute inset-0 bg-red-500 opacity-80 z-10"></div>
    //   <Image
    //     src="/images/motservice_booknow_2.jpg"
    //     alt=""
    //     layout="fill"
    //     objectFit="cover"
    //     z-0="true"
    //   />
    // </div>
  );
}

export default MotBookNow2;
