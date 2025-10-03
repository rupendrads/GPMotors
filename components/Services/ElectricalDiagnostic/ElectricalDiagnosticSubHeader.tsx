"use client";

import ElectricalDiagnosticServiceImage from "@/images/electrical-diagnostic-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why Electrical Systems Matter More Than Ever";
const desc = [
  `From engine control units to infotainment screens, today’s vehicles depend on electricity for nearly every function. A fault in wiring, fuses, sensors, or modules can affect performance, safety, and comfort.`,
  `At GP Motors, we diagnose and repair electrical issues with precision. Using advanced tools and technical expertise, we trace faults, repair or replace damaged components, and restore reliability across your entire system.`,
];

function ElectricalDiagnosticSubHeader() {
  return (
    <ServiceSubHeader
      imageData={ElectricalDiagnosticServiceImage}
      altText="Electrical Diagnostic"
      title={title}
      desc={desc}
    />
  );
}

export default ElectricalDiagnosticSubHeader;
