"use client";

import ClutchChangeRepairImage from "@/images/clutch-change-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores smooth and controlled gear shifts",
  "Reduces stress on your transmission",
  "Extends clutch and vehicle lifespan", 
  "Minimizes chances of sudden breakdowns",
  "Improves fuel efficiency and performance",
  "Enhances driving safety and comfort",
  "Keeps your car reliable on every journey",
  "Identifies hidden issues early",
];

const titleDescriptions = [
  {
    title: "Why You Shouldn’t Delay Clutch Maintenance",
    desc: `Your clutch connects your engine’s power to the wheels. When it’s in top shape, your car feels easy to control. When it’s not, every drive becomes harder, less efficient, and potentially unsafe.`,
  },
  {
    title: "Our Process for Professional Clutch Repairs",
    desc: `We combine precise diagnostics with skilled workmanship to ensure lasting results:`,
  },
];

function ClutchChangeRepair() {
  return (
    <Repair
      imageData={ClutchChangeRepairImage}
      altText="clutch change repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default ClutchChangeRepair;
