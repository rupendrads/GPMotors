"use client";

import FullDiagnosticServiceImage from "@/images/full-diagnostic-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why Diagnostics Are Essential for Modern Cars";
const desc = [
  `Today’s vehicles rely on complex electronics, sensors, and computer systems. A full diagnostic scan checks your car’s engine, transmission, brakes, and electrical systems to pinpoint issues before they turn into costly repairs.`,
  `At GP Motors, we use advanced diagnostic equipment and expertise to interpret the results. Whether it’s an intermittent fault or a hidden issue, we provide clear answers and honest recommendations.`,
];

function FullDiagnosticSubHeader() {
  return (
    <ServiceSubHeader
      imageData={FullDiagnosticServiceImage}
      altText="Full Diagnostic"
      title={title}
      desc={desc}
    />
  );
}

export default FullDiagnosticSubHeader;
