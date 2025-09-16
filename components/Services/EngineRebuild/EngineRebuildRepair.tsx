"use client";

import EngineRebuildRepairImage from "@/images/engine-rebuild-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores engine power and performance",
  "Extends your vehicle’s lifespan significantly",
  "Eliminates oil leaks and excessive smoke",
  "Improves fuel efficiency and reliability",
  "Uses high-quality, durable components",
  "Performed by certified, experienced technicians",
];

const titleDescriptions = [
  {
    title: "Why an Engine Rebuild Matters?",
    desc: `Ignoring engine issues can result in catastrophic damage, leading to complete failure or costly replacements. Rebuilding your engine not only fixes current problems but also prevents future ones. It’s an investment that improves efficiency, boosts performance, and extends your car’s lifespan. With an engine rebuild, you can eliminate oil leaks, excessive fuel consumption, and unusual noises while restoring confidence in your vehicle’s reliability.`,
  },
  {
    title: "How GP Motors Handles Engine Rebuilds?",
    desc: `At GP Motors, we follow a detailed, step-by-step process using modern equipment and proven expertise. From dismantling and cleaning to precision machining and reassembly, every step is performed with accuracy to deliver long-lasting results.`,
  },
];

function EngineRebuildRepair() {
  return (
    <Repair
      imageData={EngineRebuildRepairImage}
      altText="engine rebuild repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default EngineRebuildRepair;
