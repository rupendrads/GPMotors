"use client";

import SuspensionServiceImage from "@/images/suspension-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Keep Your Ride Comfortable & Under Control";
const desc = [
  `Your suspension system does more than smooth out bumps—it keeps your wheels firmly on the road, ensuring stability, steering precision, and safe braking. Worn shocks, struts, or bushings make your car less predictable, especially at high speeds or on rough roads.`,
  `At GP Motors, we replace damaged or worn suspension parts with high-quality components designed for durability. Our technicians carefully check alignment and handling after replacement, giving you a ride that feels like new.`,
];

function SuspensionReplacementServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={SuspensionServiceImage}
      altText="Suspension Replacement Service"
      title={title}
      desc={desc}
    />
  );
}

export default SuspensionReplacementServiceSubHeader;
