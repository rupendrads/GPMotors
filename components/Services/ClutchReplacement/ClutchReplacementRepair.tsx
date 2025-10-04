"use client";

import ClutchReplacementRepairImage from "@/images/clutch-replacement-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores smooth, effortless gear shifting",
  "Protects transmission from costly damage",
  "Improves acceleration and performance",
  "Completed quickly by certified technicians",
  "Maintains better fuel efficiency",
  "Uses high-quality, long-lasting parts",
];

const titleDescriptions = [
  {
    title: "Why Timely Clutch Replacement Is Essential?",
    desc: `Delaying clutch replacement can cause more than just rough driving—it can damage your transmission and even leave you stranded on the road. A worn clutch struggles to transfer power effectively, which reduces performance, increases fuel consumption, and makes driving unsafe. By replacing your clutch at the right time, you restore control, responsiveness, and confidence in your vehicle. It’s not just about fixing today’s issue—it’s about protecting your transmission, maintaining efficiency, and ensuring reliable performance for every journey.`,
  },
  {
    title: "How GP Motors Performs Clutch Replacement?",
    desc: `Our process combines expertise, precision, and the use of trusted parts: removing the old clutch, inspecting related components, fitting a new unit, and testing thoroughly before handover.`,
  },
];

function ClutchReplacementRepair() {
  return (
    <Repair
      imageData={ClutchReplacementRepairImage}
      altText="Clutch Replacement repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default ClutchReplacementRepair;
