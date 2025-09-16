"use client";

import EngineRebuildServiceImage from "@/images/engine-rebuild-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Give Your Engine a Second Life";
const desc = [
  `An engine rebuild is often the most effective way to extend the life of your vehicle without replacing it entirely. Over time, wear and tear can weaken engine components, leading to loss of power, poor fuel economy, or breakdowns. Rebuilding restores critical parts, refreshes performance, and ensures your car runs smoothly again.`,
  `At GP Motors, our skilled mechanics carefully dismantle, inspect, and repair your engine, replacing worn parts with high-quality components. The result? A stronger, more reliable engine built to last.`,
];

function EngineRebuildServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={EngineRebuildServiceImage}
      altText="Engine Rebuild Service"
      title={title}
      desc={desc}
    />
  );
}

export default EngineRebuildServiceSubHeader;
