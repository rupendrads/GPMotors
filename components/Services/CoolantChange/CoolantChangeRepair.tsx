"use client";

import CoolantChangeRepairImage from "@/images/coolant-change-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Prevents engine overheating and breakdowns",
  "Protects against rust and corrosion",
  "Maintains consistent engine performance", 
  "Extends the life of engine components",
  "Reduces risk of radiator and gasket damage",
  "Improves overall vehicle reliability",
  "Ensures year-round temperature stability",
  "Identifies potential cooling system issues early",
];

const titleDescriptions = [
  {
    title: "Why Your Vehicle Needs Regular Coolant Service",
    desc: `Coolant is one of the most overlooked yet essential fluids in your vehicle. Without proper maintenance, your cooling system can develop internal rust, blockages, or leaks, reducing its ability to keep the engine at a safe temperature. Over time, neglected coolant can damage the water pump, radiator, and even the engine itself—leading to expensive repairs and unexpected breakdowns.`,
  },
  {
    title: "How GP Motors Performs Professional Coolant Changes",
    desc: `Our method ensures your cooling system stays clean, efficient, and protected for the long run:`,
  },
];

function CoolantChangeRepair() {
  return (
    <Repair
      imageData={CoolantChangeRepairImage}
      altText="Coolant change repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default CoolantChangeRepair;
