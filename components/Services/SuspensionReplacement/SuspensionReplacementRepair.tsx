"use client";

import SuspensionRepairImage from "@/images/suspension-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores smooth, comfortable driving",
  "Improves steering response and handling",
  "Prevents uneven tire wear and saves money",
  "Protects other components from excess stress",
  "Extends the overall lifespan of your vehicle",
  "Ensures safe, stable driving in all conditions",
];

const titleDescriptions = [
  {
    title: "Why Suspension Replacement Is Essential?",
    desc: `Ignoring worn suspension parts doesn’t just make driving uncomfortable—it can make it dangerous. Bad suspension affects steering control, increases stopping distance, and leads to uneven tire wear that shortens tire life. Left unchecked, it can also damage other components like ball joints, control arms, and even the chassis. Timely suspension replacement restores balance, stability, and comfort. It ensures your car reacts properly to steering, corners safely, and brakes effectively when you need it most. For drivers, this means not just a smoother ride but a safer one for passengers and everyone on the road.`,
  },
  {
    title: "How GP Motors Handles Suspension Repairs?",
    desc: `We inspect your entire suspension system, identify worn parts, and replace them with durable, manufacturer-approved components. Every job ends with a road test to guarantee improved comfort and safety.`,
  },
];

function SuspensionReplacementRepair() {
  return (
    <Repair
      imageData={SuspensionRepairImage}
      altText="Suspension Replacement repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default SuspensionReplacementRepair;
