"use client";

import IntermediateRepairImage from "@/images/intermediate-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Keeps critical systems running efficiently",
  "Extends the life of engine & brake components",
  "Ensures better safety and handling", 
  "Maintains fuel economy over time",
  "Provides peace of mind on longer trips",
  "Reduces risks of unexpected breakdowns",
  "Solve issues before they turn expensive repairs",
  "Supports your manufacturer’s  service schedule",
];

const titleDescriptions = [
  {
    title: "Why Choose an Intermediate Service?",
    desc: `Regular intermediate servicing helps maintain your car’s health during the months between minor and major services. Skipping it can lead to gradual wear that impacts safety, fuel economy, and long-term reliability.`,
  },
  {
    title: "What GP Motors Includes in Intermediate Servicing",
    desc: `Our process combines essential upkeep with additional checks to protect your vehicle:`,
  },
];

function IntermediateRepair() {
  return (
    <Repair
      imageData={IntermediateRepairImage}
      altText="Intermediate Repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default IntermediateRepair;
