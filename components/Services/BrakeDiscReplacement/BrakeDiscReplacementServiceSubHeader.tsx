"use client";

import BrakeDiscServiceImage from "@/images/brake-disc-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Reliable Brakes Mean Safer Journeys";
const desc = [
  `Your brakes are your car’s most important safety system, and worn pads or discs reduce stopping efficiency, increase risks, and damage other components. Regular replacement ensures strong, consistent braking in all conditions.`,
  `At GP Motors, we use high-quality pads and discs that meet manufacturer standards, fitted with precision by our experienced technicians. Whether you drive in busy city traffic or long motorway routes, our replacement service ensures your vehicle stops when you need it most.`,
];

function BrakeDiscReplacementServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={BrakeDiscServiceImage}
      altText="Brake Disc Replacement Service"
      title={title}
      desc={desc}
    />
  );
}

export default BrakeDiscReplacementServiceSubHeader;
