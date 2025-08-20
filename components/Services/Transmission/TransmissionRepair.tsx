"use client";

import TransmissionRepairImage from "@/images/transmission-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores smooth and consistent gear changes",
  "Protects against overheating and premature wear",
  "Extends the lifespan of transmission parts",
  "Boosts overall driving performance",
  "Helps avoid major repair costs",
  "Improves fuel economy",
  "Enhances reliability on long trips",
  "Identifies hidden issues before they escalate",
];

const titleDescriptions = [
  {
    title: "Why Regular Transmission Service Matters",
    desc: `Your transmission is central to your vehicle’s performance and safety. Neglecting it can lead to harsh gear changes, unexpected failures, and higher fuel consumption.`,
  },
  {
    title: "How GP Motors Handles Transmission Maintenance?",
    desc: `Our technicians use advanced equipment and a thorough checklist to keep your system performing perfectly.`,
  },
];

function TransmissionRepair() {
  return (
    <Repair
      imageData={TransmissionRepairImage}
      altText="transmission repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default TransmissionRepair;
