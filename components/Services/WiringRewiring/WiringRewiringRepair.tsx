"use client";

import WiringRewiringRepairImage from "@/images/wiring-rewiring-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores reliable performance to all systems",
  "Prevents electrical shorts and fire risks",
  "Protects sensitive components like ECU & sensors",
  "Suitable for partial repairs or complete rewiring",
  "Uses high-quality, long-lasting materials",
  "Completed by certified electrical specialists",
];

const titleDescriptions = [
  {
    title: "Why Proper Wiring & Rewiring Matters?",
    desc: `Faulty wiring isn’t just inconvenient—it can be dangerous. Loose connections or damaged wires can drain your battery, disable critical systems, or even cause electrical fires. Small issues like flickering lights may be the first signs of deeper electrical problems. Timely wiring repair or replacement restores reliability, protects vital components like the alternator and ECU, and ensures all safety systems function as intended. For older vehicles, rewiring can also modernize reliability and prevent recurring electrical failures.`,
  },
  {
    title: "How GP Motors Handles Wiring Services?",
    desc: `Our technicians perform in-depth inspections, trace faults with specialist tools, and replace or repair wiring with manufacturer-approved standards. Every job ends with a full electrical test for peace of mind.`,
  },
];

function WiringRewiringRepair() {
  return (
    <Repair
      imageData={WiringRewiringRepairImage}
      altText="Wiring Rewiring"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default WiringRewiringRepair;
