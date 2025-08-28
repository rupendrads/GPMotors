"use client";

import FullRepairImage from "@/images/full-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Improves overall safety and reliability",
  "Extends engine and component life",
  "Reduces the risk of major repairs", 
  "Ensures smoother, more efficient driving",
  "Maintains manufacturer warranty compliance",
  "Enhances fuel economy and performance",
  "Detects hidden problems before they escalate",
  "Provides a complete record of professional care",
];

const titleDescriptions = [
  {
    title: "Why Your Car Needs Regular Full Service",
    desc: `Over time, everyday driving causes wear that basic maintenance can’t fully address. A full service catches problems early, restores lost performance, and ensures that your car meets safety standards. Skipping it can lead to reduced efficiency, higher fuel costs, and unexpected breakdowns.`,
  },
  {
    title: "What’s Included in GP Motors’ Full Service",
    desc: `We perform an extensive set of checks and replacements to keep your vehicle running at its best:`,
  },
];

function FullRepair() {
  return (
    <Repair
      imageData={FullRepairImage}
      altText="Full repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default FullRepair;
