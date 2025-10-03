"use client";

import FullDiagnosticRepairImage from "@/images/full-diagnostic-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Identifies hidden problems early",
  "Prevents costly future repairs",
  "Ensures repairs are accurate and effective",
  "Covers all major vehicle systems",
  "Uses advanced diagnostic technology",
  "Provides peace of mind for every driver",
];

const titleDescriptions = [
  {
    title: "The Importance of a Complete Diagnostic",
    desc: `gnoring warning lights or unusual symptoms can lead to serious and expensive damage. A diagnostic test isn’t just about turning off the light on your dashboard—it’s about finding the underlying cause. Whether it’s a faulty sensor, engine misfire, or transmission error, early detection helps prevent breakdowns and protects your car’s long-term health. With a full diagnostic, you gain peace of mind knowing exactly what’s happening under the hood. It saves time, avoids guesswork, and ensures repairs are precise and cost-effective.`,
  },
  {
    title: "How GP Motors Handles Diagnostics?",
    desc: `We connect your car to state-of-the-art diagnostic tools, run comprehensive scans, and carry out physical checks where needed. Then we explain the results in plain language and give you the best options for repair.`,
  },
];

function FullDiagnosticRepair() {
  return (
    <Repair
      imageData={FullDiagnosticRepairImage}
      altText="Full Diagnostic"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default FullDiagnosticRepair;
