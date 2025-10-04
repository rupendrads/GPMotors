"use client";

import CompressorRepairImage from "@/images/compressor-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores powerful, consistent cooling",
  "Improves AC system efficiency and reliability",
  "Uses durable, manufacturer-approved parts",
  "Provides lasting comfort in all seasons",
  "Performed quickly by certified professionals",
  "Protects other AC  from premature wear",
];

const titleDescriptions = [
  {
    title: "The Importance of Compressor & Condenser Replacement?",
    desc: `A failing compressor or condenser doesn’t just make your car uncomfortable—it can put strain on the entire air conditioning system. Ignoring the issue may lead to refrigerant leaks, damaged hoses, or even complete AC failure, leaving you with costly repairs. Timely replacement restores reliable cooling, prevents damage to connected components, and improves fuel efficiency by reducing the extra load on your engine.`,
  },
  {
    title: "How GP Motors Handles AC Repairs?",
    desc: `Our specialists carefully diagnose your AC system, replace worn compressors and condensers with trusted parts, and test cooling performance to guarantee results.`,
  },
];

function CompressorReplacementRepair() {
  return (
    <Repair
      imageData={CompressorRepairImage}
      altText="Compressor Replacement repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default CompressorReplacementRepair;
