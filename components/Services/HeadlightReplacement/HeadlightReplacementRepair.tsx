"use client";

import HeadlightReplacementRepairImage from "@/images/headlight-replacement-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores safe, reliable visibility",
  "Prevents MOT failures and legal issues",
  "Ensures correct beam alignment & brightness",
  "Quick, affordable replacement service",
  "Uses long-lasting, quality bulbs",
  "Suitable for halogen, HID, and LED systems",
];

const titleDescriptions = [
  {
    title: "Why Timely Bulb Replacement Matters?",
    desc: `Driving with a faulty headlight reduces your visibility and increases the risk of accidents. Uneven lighting can also strain your eyes, making long drives more tiring. In many cases, it’s also a legal requirement to keep your headlights in good working order. Replacing headlight bulbs promptly keeps you and others safe on the road, prevents MOT test failures, and ensures you’re prepared for any driving conditions.`,
  },
  {
    title: "How GP Motors Handles Bulb Replacement?",
    desc: `Our technicians inspect your lighting system, replace worn bulbs with durable, high-quality units, and check beam alignment for maximum visibility without dazzling other drivers.`,
  },
];

function HeadlightReplacementRepair() {
  return (
    <Repair
      imageData={HeadlightReplacementRepairImage}
      altText="Headlight Replacement"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default HeadlightReplacementRepair;
