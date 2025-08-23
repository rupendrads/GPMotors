"use client";

import TimingBeltChangeRepairImage from "@/images/timing-belt-change-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Prevents severe internal engine damage",
  "Keeps your engine running smoothly & efficiently",
  "Extends the lifespan of  engine components", 
  "Reduces the risk of sudden, costly breakdowns",
  "Improves long-term reliability and performance",
  "Ensures proper valve and piston alignment",
  "Saves significant repair costs over time",
  "Provides peace of mind for every drive",
];

const titleDescriptions = [
  {
    title: "Why Replacing Your Timing Belt Is Essential",
    desc: `Your engine depends on precise timing to function properly. A worn or broken belt disrupts that balance, often bending valves, damaging pistons, and stopping your vehicle entirely. Unlike some parts, a failing timing belt rarely gives much warning—it simply breaks, leaving you stranded and facing a major repair bill.`,
  },
  {
    title: "How GP Motors Handles Timing Belt Replacement",
    desc: `Our technicians follow a detailed, safety-focused process to ensure your engine remains perfectly synchronized:`,
  },
];

function TimingBeltChangeRepair() {
  return (
    <Repair
      imageData={TimingBeltChangeRepairImage}
      altText="Timing Belt change repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default TimingBeltChangeRepair;
