"use client";

import AlternatorRepairImage from "@/images/alternator-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores reliable starting every time",
  "Keeps your battery charged and protected",
  "Ensures all electronics function properly",
  "Protects against electrical system damage",
  "Uses durable, manufacturer-approved parts",
  "Quick turnaround with expert installation",
];

const titleDescriptions = [
  {
    title: "Why Timely Replacement Is Crucial?",
    desc: `A failing starter motor or alternator often gives warning signs — slow cranking, flickering dashboard lights, or a dead battery that won’t hold charge. Ignoring these symptoms risks sudden breakdowns, leaving you stranded and causing further damage to your car’s electrical system. Replacing these components early restores confidence in your vehicle, ensures your battery stays charged, and guarantees smooth starts every time.`,
  },
  {
    title: "How GP Motors Handles Alternator & Starter Motor?",
    desc: `We test your full electrical system, replace worn alternators or starter motors with high-quality units, and verify performance with diagnostic checks to ensure lasting reliability.`,
  },
];

function AlternatorReplacementRepair() {
  return (
    <Repair
      imageData={AlternatorRepairImage}
      altText="Alternator Replacement repair"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default AlternatorReplacementRepair;
