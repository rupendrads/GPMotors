"use client";

import BrakeDiscRepairImage from "@/images/brake-disc-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores strong, reliable braking performance",
  "Eliminates squeaking, grinding, and vibrations",
  "Protects calipers and other brake components",
  "Extends the life of your braking system",
  "Improves overall driving comfort and control",
  "Uses high-quality, manufacturer-approved parts",
];

const titleDescriptions = [
  {
    title: "Why Timely Brake Pad & Disc Replacement Matters?",
    desc: `Driving with worn brake pads or discs is dangerous. It increases your stopping distance, causes vibrations in the steering wheel, and can even lead to complete brake failure. Beyond safety, neglecting your braking system can damage calipers, rotors, and other costly parts. By replacing your pads and discs on time, you ensure shorter stopping distances, smoother braking, and a safer drive for you and your passengers. It’s an essential part of responsible car ownership and one of the best ways to protect both your vehicle and the people inside it.`,
  },
  {
    title: "How GP Motors Handles Brake  & Disc Replacement?",
    desc: `We follow a thorough replacement process—removing worn parts, fitting new components, and testing braking performance to guarantee safety and comfort.`,
  },
];

function BrakeDiscReplacementRepair() {
  return (
    <Repair
      imageData={BrakeDiscRepairImage}
      altText="brake disc replacement repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default BrakeDiscReplacementRepair;
