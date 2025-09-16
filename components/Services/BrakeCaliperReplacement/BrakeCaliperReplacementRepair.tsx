"use client";

import BrakeCaliperRepairImage from "@/images/brake-caliper-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Prevents uneven pad and disc wear",
  "Stops dangerous pulling to one side",
  "Protects other brake system components",
  "Improves overall safety and control",
  "Extends the life of your braking system",
  "Completed quickly by skilled technicians",
];

const titleDescriptions = [
  {
    title: "Why You Shouldn’t Ignore Failing Calipers?",
    desc: `A worn or seized brake caliper doesn’t just reduce stopping efficiency—it can cause your car to pull to one side, wear out pads unevenly, and even lead to complete brake failure. Ignoring the problem risks damaging your braking system further and increases the danger of accidents. Timely caliper replacement ensures even braking force, protects the rest of your brake components, and gives you confidence in your car’s safety. It’s a vital service that keeps your vehicle roadworthy and prevents costly repairs in the future.`,
  },
  {
    title: "How GP Motors Handles Brake Caliper Replacement?",
    desc: `We inspect your entire braking system, replace worn or faulty calipers with new units, and test thoroughly to confirm safe performance.`,
  },
];

function BrakeCaliperReplacementRepair() {
  return (
    <Repair
      imageData={BrakeCaliperRepairImage}
      altText="Brake Caliper Replacement repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default BrakeCaliperReplacementRepair;
