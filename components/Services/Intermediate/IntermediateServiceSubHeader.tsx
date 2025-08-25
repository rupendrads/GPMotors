"use client";

import IntermediateServiceImage from "@/images/intermediate-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = " More Than Minor Care, Less Than a Major Overhaul";
const desc = [
  `An intermediate service bridges the gap between minor and major servicing. It includes all essential checks—oil changes, fluid top-ups, brake inspections—plus additional attention to components that experience more wear, such as filters, belts, and suspension parts.`,
  `At GP Motors, we make sure your car receives a thorough inspection and the right preventive maintenance without the cost or downtime of a full major service. This keeps your vehicle running smoothly, improves its longevity, and reduces the chances of unexpected issues on the road.`,
];

function IntermediateServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={IntermediateServiceImage}
      altText="Intermediate Service"
      title={title}
      desc={desc}
    />
  );
}

export default IntermediateServiceSubHeader;
