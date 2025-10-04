"use client";

import GasketOverhaulServiceImage from "@/images/gasket-overhaul-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why the Head Gasket Is So Important";
const desc = [
  `The head gasket is a vital seal between the engine block and cylinder head. It keeps oil, coolant, and combustion gases separate while withstanding extreme heat and pressure. When it fails, it can lead to overheating, misfires, oil contamination, and even total engine failure.`,
  `At GP Motors, our skilled technicians carry out precise head gasket overhauls using high-quality parts and advanced techniques. We ensure your engine is properly sealed, tested, and running smoothly for long-term reliability.`,
];

function GasketOverhaulServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={GasketOverhaulServiceImage}
      altText="Gasket Overhaul"
      title={title}
      desc={desc}
    />
  );
}

export default GasketOverhaulServiceSubHeader;
