"use client";

import WarningLightRepairImage from "@/images/warning-light-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Identifies the exact cause of warning lights",
  "Prevents small issues becoming major failures",
  "Saves money with early detection",
  "Ensures your car is safe and road legal",
  "Uses advanced diagnostic equipment",
  "Work carried out by skilled, certified technicians",
];

const titleDescriptions = [
  {
    title: "Why Warning Lights Should Never Be Ignored",
    desc: `A warning light is your car’s way of saying something needs attention. Whether it’s the engine management light, brake system alert, or airbag fault, these signals highlight issues that can affect safety, performance, or emissions.Ignoring them risks bigger problems — an engine light could mean a faulty sensor, but it could also signal serious damage. A brake light could mean worn pads, or a leak in the system. Acting early means smaller fixes, lower costs, and a safer car.`,
  },
  {
    title: "How GP Motors Handles Warning Light Checks?",
    desc: `Our technicians connect your car to state-of-the-art diagnostic scanners, read and interpret fault codes, and carry out inspections where needed. We then advise the best solution, whether it’s a reset, a repair, or a replacement.`,
  },
];

function WarningLightRepair() {
  return (
    <Repair
      imageData={WarningLightRepairImage}
      altText="Warning Light"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default WarningLightRepair;
