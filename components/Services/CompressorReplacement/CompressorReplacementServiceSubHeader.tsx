"use client";

import CompressorServiceImage from "@/images/compressor-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why Your AC Needs a Healthy Compressor & Condenser";
const desc = [
  `Your car’s air conditioning relies on the compressor to circulate refrigerant and the condenser to remove heat. When either fails, cooling performance drops, energy use increases, and leaks may damage other parts of the system.`,
  `At GP Motors, we replace faulty compressors and condensers with high-quality, manufacturer-approved units. Our technicians test your entire AC system after replacement, ensuring long-lasting cooling performance, efficiency, and comfort on every drive.`,
];

function CompressorReplacementServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={CompressorServiceImage}
      altText="Compressor Replacement Service"
      title={title}
      desc={desc}
    />
  );
}

export default CompressorReplacementServiceSubHeader;
