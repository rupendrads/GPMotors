"use client";

import TurbochargerServiceImage from "@/images/turbocharger-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why Your Car Needs a Healthy Turbocharger";
const desc = [
  `A turbocharger increases engine power and efficiency by forcing more air into the combustion chamber. When it fails, you’ll notice reduced performance, higher fuel consumption, and even engine damage if left unchecked.`,
  `At GP Motors, we replace faulty turbochargers with high-quality, manufacturer-approved units. Our specialists ensure precise installation and thorough testing, giving your engine the boost it was designed for.`,
];

function TurbochargerReplacementServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={TurbochargerServiceImage}
      altText="Turbocharger Replacement Service"
      title={title}
      desc={desc}
    />
  );
}

export default TurbochargerReplacementServiceSubHeader;
