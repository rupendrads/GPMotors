"use client";

import WarningLightServiceImage from "@/images/warning-light-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Every Light Tells a Story";
const desc = [
  `Modern cars have dozens of sensors monitoring everything from emissions to airbags. When something isn’t right, the dashboard lights up. Ignoring them can lead to breakdowns, expensive repairs, or safety risks.`,
  `At GP Motors, we use advanced diagnostic tools to read error codes, trace faults, and explain the results in plain English. From minor resets to major repairs, we make sure no warning is left unchecked.`,
];

function WarningLightSubHeader() {  
  return (
    <ServiceSubHeader
      imageData={WarningLightServiceImage}
      altText="Warning Light"
      title={title}
      desc={desc}
    />
  );
}

export default WarningLightSubHeader;
