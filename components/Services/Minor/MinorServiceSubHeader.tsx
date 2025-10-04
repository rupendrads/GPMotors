"use client";

import MinorServiceImage from "@/images/minor-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Small Checks That Make a Big Difference";
const desc = [
  `Minor service isn’t just a routine formality—it’s your car’s first line of defense against wear and tear. By replacing key fluids, inspecting vital components, and making necessary adjustments, we help your vehicle maintain optimal performance and avoid costly future problems.`,
  `At GP Motors, our minor service package includes an oil and filter change, fluid top-ups, tire pressure checks, brake inspections, and a detailed safety assessment. These quick but essential tasks keep your engine running smoothly, improve fuel economy, and ensure safer, more reliable driving every day.`,
];

function MinorServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={MinorServiceImage}
      altText="Minor Service"
      title={title}
      desc={desc}
    />
  );
}

export default MinorServiceSubHeader;
