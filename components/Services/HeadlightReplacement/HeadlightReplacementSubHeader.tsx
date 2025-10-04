"use client";

import HeadlightReplacementServiceImage from "@/images/headlight-replacement-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why Headlights Are More Than Just Bulbs";
const desc = [
  `Your headlights are essential for night driving, poor weather conditions, and ensuring other drivers see you clearly. A failed bulb isn’t just an inconvenience—it’s a safety hazard and could even make your car illegal to drive.`,
  `At GP Motors, we fit high-quality, manufacturer-approved bulbs with the correct brightness and alignment, ensuring safe and reliable visibility in all conditions.`,
];

function HeadlightReplacementSubHeader() {
  return (
    <ServiceSubHeader
      imageData={HeadlightReplacementServiceImage}
      altText="Headlight Replacement"
      title={title} 
      desc={desc}
    />
  );
}

export default HeadlightReplacementSubHeader;
