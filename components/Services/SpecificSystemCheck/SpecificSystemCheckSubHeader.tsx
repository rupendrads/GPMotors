"use client";

import SpecificSystemCheckServiceImage from "@/images/specific-system-check-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Focus on the System That Matters Most";
const desc = [
  `Not every visit needs a full diagnostic—sometimes you know exactly where the problem is. A specific system check targets one area of your vehicle, saving you time and money while ensuring precision.`,
  `At GP Motors, we carry out thorough inspections of whichever system you need checked—be it brakes, steering, suspension, electrics, or air conditioning—using specialist tools and expert know-how.`,
];

function SpecificSystemCheckSubHeader() {
  return (
    <ServiceSubHeader
      imageData={SpecificSystemCheckServiceImage}
      altText="Specific System Check"
      title={title}
      desc={desc}
    />
  );
}

export default SpecificSystemCheckSubHeader;
