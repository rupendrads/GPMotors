"use client";

import GearboxRebuildServiceImage from "@/images/gearbox-rebuild-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "When Repairs Aren’t Enough, Choose a Rebuild";
const desc = [
  `Your gearbox is one of the hardest working parts of your vehicle, and over time, internal components wear down. Minor repairs may solve short-term issues, but a rebuild replaces worn parts, restores precision, and gives your gearbox a new lease of life.`,
  `At GP Motors, our technicians completely strip down, clean, and reassemble your gearbox using premium-quality parts. The result is smoother gear changes, improved efficiency, and confidence every time you drive.`,
];

function GearboxRebuildServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={GearboxRebuildServiceImage}
      altText="Gearbox Rebuild Service"
      title={title}
      desc={desc}
    />
  );
}

export default GearboxRebuildServiceSubHeader;
