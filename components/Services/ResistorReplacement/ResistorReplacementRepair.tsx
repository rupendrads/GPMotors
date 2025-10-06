"use client";

import ResistorReplacementRepairImage from "@/images/resistor-replacement-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Restores full fan speed control",
  "Improves heating and cooling efficiency",
  "Ensures clear windows and safe visibility",
  "Quick, cost-effective repair solution",
  "Uses high-quality, durable components",
  "Works across all makes and models",
];

const titleDescriptions = [
  {
    title: "Why Timely Resistor Replacement Helps?",
    desc: `A faulty resistor may seem like a small issue, but it impacts comfort, safety, and visibility. Without proper airflow, your heater can’t clear foggy windows, and your AC can’t keep the cabin cool. Ignoring the problem may also put strain on the blower motor itself, leading to bigger repair bills. Replacing the resistor restores full fan control, protects the motor, and ensures your cabin environment stays comfortable and safe in all weather.`,
  },
  {
    title: "How GP Motors Handles Resistor Replacement?",
    desc: `Our technicians test the fan circuit, confirm resistor failure, and fit durable, manufacturer-approved replacements. Every repair ends with a full system test to guarantee smooth airflow at all speeds.`,
  },
];

function ResistorReplacementRepair() {
  return (
    <Repair
      imageData={ResistorReplacementRepairImage}
      altText="Resistor Replacement"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default ResistorReplacementRepair;
