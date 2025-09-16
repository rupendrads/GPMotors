"use client";

import GasketOverhaulRepairImage from "@/images/gasket-overhaul-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Prevents coolant and oil contamination",
  "Eliminates overheating and exhaust smoke",
  "Protects the cylinder head and engine block",
  "Extends the life of your engine",
  "Performed by skilled, certified technicians",
  "Provides peace of mind and reliability",
];

const titleDescriptions = [
  {
    title: "Why Timely Head Gasket Replacement Matters?",
    desc: `Driving with a blown head gasket can quickly escalate into major engine damage. Symptoms like constant overheating, white smoke from the exhaust, milky oil, or loss of power should never be ignored. If left unchecked, it may warp the cylinder head, crack the block, or destroy other expensive components. Replacing the head gasket at the right time not only saves your engine but also restores efficiency, prevents coolant and oil contamination, and ensures consistent performance.`,
  },
  {
    title: "How GP Motors Handles Head Gasket Overhauls?",
    desc: `Our process involves carefully dismantling the engine top end, inspecting the head and block for warping or cracks, fitting a new, high-quality gasket, and reassembling with precision. We finish with a full pressure test to guarantee lasting performance.`,
  },
];

function GasketOverhaulRepair() {
  return (
    <Repair
      imageData={GasketOverhaulRepairImage}
      altText="Gasket Overhaul"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default GasketOverhaulRepair;
