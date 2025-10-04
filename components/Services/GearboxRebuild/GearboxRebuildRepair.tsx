"use client";

import GearboxRebuildRepairImage from "@/images/gearbox-rebuild-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores smooth, reliable gear changes",
  "Eliminates slipping and grinding noises",
  "Extends gearbox and vehicle lifespan",
  "More cost-effective than replacement",
  "Improves fuel efficiency and performance",
  "Ensures safer, more comfortable driving",
];

const titleDescriptions = [
  {
    title: "Why a Gearbox Rebuild Is Worth It?",
    desc: `A failing gearbox can cause major driving problems, from slipping gears and loud grinding to total transmission failure. Ignoring these issues not only makes driving unsafe but also risks damaging other components of your vehicle. A gearbox rebuild is a cost-effective solution that tackles the root cause of the problem. Instead of patching up issues, we restore the gearbox to near-new condition—ensuring smoother performance, better reliability, and an extended lifespan. For drivers experiencing ongoing gearbox trouble, a rebuild is often smarter and more affordable than repeated repairs or full replacement.`,
  },
  {
    title: "How GP Motors Handles Gearbox Rebuilds?",
    desc: `Our rebuild process is designed to deliver long-lasting results: dismantling the unit, replacing worn gears, bearings, and seals, and carefully reassembling with precision. Every gearbox is tested to guarantee quality and performance.`,
  },
];

function GearboxRebuildRepair() {
  return (
    <Repair
      imageData={GearboxRebuildRepairImage}
      altText="gearbox rebuild repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default GearboxRebuildRepair;
