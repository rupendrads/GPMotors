"use client";

import BrakeCaliperServiceImage from "@/images/brake-caliper-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why Brake Calipers Are Crucial to Safety";
const desc = [
  `Brake calipers are responsible for pressing the pads against the discs to slow your vehicle. When they fail, your braking power becomes inconsistent, making driving unsafe. Replacing faulty calipers restores full stopping performance and prevents damage to pads and discs.`,
  `At GP Motors, we fit new, high-quality calipers using manufacturer-approved parts. Our technicians carefully test your system after installation to guarantee smooth, even braking in all conditions.`,
];

function BrakeCaliperReplacementServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={BrakeCaliperServiceImage}
      altText="Brake Caliper Replacement Service"
      title={title}
      desc={desc}
    />
  );
}

export default BrakeCaliperReplacementServiceSubHeader;
