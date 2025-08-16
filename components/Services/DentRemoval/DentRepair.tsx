"use client";

import CarPaintlessDentRepairImage from "@/images/car-paintless-dent-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Warranty stays valid after repair",
  "Local paintless dent repair London",
  "Guaranteed dent removal, no paint",
  "Skilled, experienced PDR technicians",
  "Officially IMI Registered PDR service",
  "Fast, reliable dent repair solutions",
];

const titleDescriptions = [
  {
    title: "Why Should I Choose GP motors  for Paintless Auto Dent Repairs?",
    desc: `At London Motor Sports, we offer expert paintless dent and ding removal using a gentle, massage-like technique that restores your car panels without affecting the original paint. Our process is quick, effective, and designed to get your vehicle looking like new with minimal downtime.We treat every car as if it were our own.`,
  },
  {
    title: "Ensuring top-quality craftsmanship in every repair.",
    desc: `Our commitment to excellence sets us apart, delivering results that often surpass customer expectations. If you're looking for professional, paintless dent repair near you, visit LMS today for a free quote.`,
  },
];

function DentRepair() {
  return (
    <Repair
      imageData={CarPaintlessDentRepairImage}
      altText="dent repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default DentRepair;
