"use client";
import Image from "next/image";
import MotBookNowContent from "./MotBookNowContent";

const header = "Get Your MOT With Us";
const description = `LMS is one of the best & satisfactory garages for all those looking
            for an MOT garage near me at 142 Bentworth road or a garage in W12.
            Then its one of the most excellent chances for them to get their car
            certified for safe travelling. Hitching us is easy as we:`;
const listItems = [
  "Inspection, repairing and testing",
  "Spot-on the get a quote button",
  "Connect with our teams online",
  "Confirm your booking",
  "Drive into the garage",
  "Get MOT certified",
];

function MotBookNow1() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-70 z-10 p-8 flex flex-col gap-4">
        <MotBookNowContent
          header={header}
          description={description}
          listItems={listItems}
        />
      </div>
      <Image
        src="/images/motservice_booknow_1.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        z-0="true"
      />
    </div>
  );
}

export default MotBookNow1;
