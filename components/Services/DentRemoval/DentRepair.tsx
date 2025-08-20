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
    title: "Why Dent Removal Is Worth It?",
    desc: `Many drivers think dents are “just cosmetic,” but the truth is they can affect your vehicle in bigger ways than you realize. Even small dents can chip the paint, exposing the metal underneath to moisture and rust. Over time, this can spread and weaken the bodywork, leading to expensive panel repairs or replacements. Dents also reduce your car’s resale value, making it look poorly maintained even if it runs perfectly.`,
  },
  {
    title: "How GP Motors Handles Dent Removal?",
    desc: `At GP Motors, we use advanced dent removal methods such as paintless dent repair (PDR) to restore your vehicle’s panels without affecting the original finish. Our specialists carefully massage out dents from behind the panel, preserving your car’s paintwork while achieving a flawless result.`,
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
