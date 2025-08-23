"use client";

import CoolantChangeImage from "@/images/coolant-change-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Prevent Overheating with Timely Coolant Changes";
const desc = [
  `Coolant isn’t just a colored liquid—it’s a critical part of your car’s health. It regulates your engine’s temperature, prevents corrosion, and protects internal components from heat damage. When coolant gets old or contaminated, your engine may overheat, gaskets may wear faster, and your radiator can suffer.`,
  `At GP Motors, we don’t just drain and refill—we flush the entire system, remove old residue, and add manufacturer-recommended coolant to ensure maximum protection. Routine coolant maintenance saves you from costly engine repairs, improves long-term reliability, and helps your car perform better in every season.`,
];

function CoolantChangeServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={CoolantChangeImage}
      altText="Coolant Change"
      title={title}
      desc={desc}
    />
  );
}

export default CoolantChangeServiceSubHeader;
