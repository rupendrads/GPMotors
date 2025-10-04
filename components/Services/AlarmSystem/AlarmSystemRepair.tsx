"use client";

import AlarmSystemRepairImage from "@/images/alarm-system-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Deters theft and break-ins effectively",
  "Protects your car with modern technology",
  "Quick, reliable installation and repairs",
  "Custom solutions tailored to your needs",
  "Increases vehicle security and value",
  "Expert service from trusted professionals",
];

const titleDescriptions = [
  {
    title: "Why Alarm Systems Are Essential for Modern Cars?",
    desc: `Vehicle theft and break-ins remain a real risk. Without a functioning alarm, your car is far more vulnerable. A properly installed system not only deters thieves but can also prevent unauthorized starting of your engine. Whether your current alarm isn’t working or you want to upgrade to a modern system with motion sensors, immobilizers, or smartphone integration, GP Motors has you covered. A secure alarm system is not just about protection—it’s about peace of mind.`,
  },
  {
    title: "How GP Motors Handles Alarm Services?",
    desc: `We provide expert installations, repairs, and upgrades using trusted brands and advanced technology. Every system is tested thoroughly to ensure maximum protection.`,
  },
];

function AlarmSystemRepair() {
  return (
    <Repair
      imageData={AlarmSystemRepairImage}
      altText="Alarm System"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default AlarmSystemRepair;
