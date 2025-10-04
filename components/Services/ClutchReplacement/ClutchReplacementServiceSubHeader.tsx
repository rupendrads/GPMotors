"use client";

import ClutchReplacementServiceImage from "@/images/clutch-replacement-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "When Repair Isn’t Enough, Replace Your Clutch";
const desc = [
  `Your clutch is a critical link between your engine and gearbox, and like any high-wear part, it doesn’t last forever. Signs such as slipping, difficulty engaging gears, or burning smells often mean the clutch has worn beyond repair.`,
  `At GP Motors, we carry out complete clutch replacements using high-quality, manufacturer-approved parts. Our trained specialists ensure perfect installation, restoring smooth gear changes and preventing damage to your transmission system. A new clutch not only improves your driving comfort but also protects your car for years to come.`,
];

function ClutchReplacementServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={ClutchReplacementServiceImage}
      altText="Clutch Replacement Service"
      title={title}
      desc={desc}
    />
  );
}

export default ClutchReplacementServiceSubHeader;
