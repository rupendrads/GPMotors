"use client";

import AlternatorServiceImage from "@/images/alternator-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why Alternators & Starter Motors Matter";
const desc = [
  `The starter motor powers your engine’s first turn, while the alternator keeps your battery charged and electrical systems running. When either fails, you can end up stranded with a car that won’t start or systems that suddenly shut down.`,
  `At GP Motors, we replace faulty alternators and starter motors with manufacturer-approved parts. Our technicians check the entire charging system to ensure your vehicle runs reliably in all conditions.`,
];

function AlternatorReplacementServiceSubHeader() {  
  return (
    <ServiceSubHeader
      imageData={AlternatorServiceImage}
      altText="Alternator Replacement Service"
      title={title}
      desc={desc}
    />
  );
}

export default AlternatorReplacementServiceSubHeader;
