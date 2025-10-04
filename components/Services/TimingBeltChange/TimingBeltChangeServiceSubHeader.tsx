"use client";

import TimingBeltChangeImage from "@/images/timing-belt-change-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Keep Your Engine in Sync with Timely Belt Changes";
const desc = [
  `The timing belt is a critical component that controls how your engine’s valves and pistons work together. When it’s worn or past its recommended service life, it can snap without warning—causing serious internal engine damage.`,
  `At GP Motors, we carefully inspect your belt for cracks, fraying, or tension issues and replace it using manufacturer-approved parts. We also check related components like tensioners, pulleys, and water pumps to ensure your entire timing system is strong and dependable.`,
  `Replacing your timing belt on schedule prevents unexpected breakdowns, extends your engine’s life, and saves you from repairs that can cost thousands.`,
];

function TimingBeltChangeServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={TimingBeltChangeImage}
      altText="Timing Belt Change"
      title={title}
      desc={desc}
    />
  );
}

export default TimingBeltChangeServiceSubHeader;
