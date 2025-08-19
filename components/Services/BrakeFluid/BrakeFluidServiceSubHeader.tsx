"use client";

import BrakeFluidImage from "@/images/brake-fluid.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Timely Brake Fluid Change for Efficient Brake Pads";
const desc = [
  `Are you concerned about your car’s reduced brake performance? It could be that you need a brake fluid change rather than a brake pad replacement. Even if you don’t drive frequently, operating a vehicle with low brake fluid is still risky.`,
  `If you don’t want to compromise on safety or your car’s maintenance, bring your vehicle to GP Motors for a quick brake fluid change. Our team can replace your brake fluid within 30–60 minutes, handled by experienced brake repair specialists.`,
  `Regularly topping up or replacing your car’s brake fluid is essential. Unsure whether the issue lies with your brake pads or the fluid itself? Let our mechanics inspect your vehicle and perform the necessary brake fluid change to ensure optimal safety.`,
];

function BrakeFluidServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={BrakeFluidImage}
      altText="Brake Fluid"
      title={title}
      desc={desc}
    />
  );
}

export default BrakeFluidServiceSubHeader;
