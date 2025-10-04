"use client";

import MinorRepairImage from "@/images/minor-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Improves engine efficiency & responsiveness",
  "Extends the life of essential components",
  "Reduces the risk of sudden failures", 
  "Keeps safety systems in top condition",
  "Helps maintain fuel economy",
  "Ensures smoother, more reliable driving",
  "Detects small issues before they escalate",
  "Saves money on major repairs later",
];

const titleDescriptions = [
  {
    title: "Why Regular Minor Service Matters",
    desc: `Skipping minor services may not show immediate problems, but over time it can lead to reduced performance, higher fuel consumption, and unexpected breakdowns. Preventive care is always cheaper and easier than emergency repairs.`,
  },
  {
    title: "What GP Motors Covers in a Minor Service",
    desc: `Our minor service process is designed to protect your car’s health and extend its lifespan:`,
  },
];

function MinorRepair() {
  return (
    <Repair
      imageData={MinorRepairImage}
      altText="minor repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default MinorRepair;
