"use client";

import ElectricalDiagnosticRepairImage from "@/images/electrical-diagnostic-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores performance across all systems",
  "Protects key components like ECU & sensors",
  "Improves safety and driving comfort",
  "Uses advanced diagnostic and repair tools",
  "Handles modern  car electrical systems",
  "Delivered by skilled, certified technicians",
];

const titleDescriptions = [
  {
    title: "The Importance of Electrical Repairs",
    desc: `Electrical issues often start small—flickering lights, warning messages, or intermittent failures—but can quickly escalate. Left unresolved, they may cause breakdowns, drain the battery, or even damage critical systems like the ECU. Getting electrical problems checked early ensures your vehicle’s safety, prevents costly repairs, and keeps all functions—from ignition to climate control—working as they should. It’s an investment in convenience, safety, and peace of mind.`,
  },
  {
    title: "How GP Motors Handles Electrical Services?",
    desc: `We perform in-depth diagnostic tests, inspect wiring and fuses, and repair or replace faulty parts. Every job ends with system testing to confirm everything works perfectly.`,
  },
];

function ElectricalDiagnosticRepair() {
  return (
    <Repair
      imageData={ElectricalDiagnosticRepairImage}
      altText="Electrical Diagnostic"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default ElectricalDiagnosticRepair;
