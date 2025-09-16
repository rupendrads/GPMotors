"use client";

import TurbochargerRepairImage from "@/images/turbocharger-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Improves fuel efficiency and responsiveness",
  "Reduces smoke and harmful emissions",
  "Prevents costly engine damage",
  "Protects related components from oil leaks",
  "Ensures long-term reliability and efficiency",
  "Completed by skilled, certified specialists",
];

const titleDescriptions = [
  {
    title: "Why Timely Turbocharger Replacement Is Critical?",
    desc: `A worn or damaged turbocharger doesn’t just affect performance—it can put your engine at serious risk. Oil leaks, excessive exhaust smoke, and reduced acceleration are all signs of turbo failure. Ignoring these symptoms may lead to catastrophic engine damage, costing far more than a replacement. Replacing your turbocharger restores proper boost pressure, fuel efficiency, and overall engine health.`,
  },
  {
    title: "How GP Motors Handles Turbocharger Replacement?",
    desc: `Our trained technicians inspect your turbo system, replace worn units with manufacturer-approved components, and test for correct boost levels to ensure optimal performance.`,
  },
];

function TurbochargerReplacementRepair() {
  return (
    <Repair
      imageData={TurbochargerRepairImage}
      altText="Turbocharger Replacement repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default TurbochargerReplacementRepair;
