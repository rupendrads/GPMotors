"use client";

import SpecificSystemCheckRepairImage from "@/images/specific-system-check-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Pinpoints the exact problem quickly",
  "Saves time and avoids unnecessary repairs",
  "Reduces repair costs with accurate diagnosis",
  "Uses specialist tools for reliable results",
  "Carried out by trained, experienced technicians",
  "Provides peace of mind and clarity",
];

const titleDescriptions = [
  {
    title: "Why a Specific System Check Helps",
    desc: `If your brakes squeak, your steering feels loose, or your AC isn’t cooling properly, a focused inspection can find the root cause quickly. Instead of replacing parts unnecessarily, we test, measure, and confirm exactly what’s wrong. This prevents misdiagnosis, saves on repair costs, and ensures you only pay for what truly needs fixing. By addressing problems early, you also protect other systems in your car from knock-on damage and keep your vehicle safe and reliable.`,
  },
  {
    title: "How GP Motors Handles Electrical Services?",
    desc: `We perform in-depth diagnostic tests, inspect wiring and fuses, and repair or replace faulty parts. Every job ends with system testing to confirm everything works perfectly.`,
  },
];

function SpecificSystemCheckRepair() {
  return (
    <Repair
      imageData={SpecificSystemCheckRepairImage}
      altText="Specific System Check"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default SpecificSystemCheckRepair;
