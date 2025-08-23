"use client";

import ClutchChangeImage from "@/images/clutch-change-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Fast, Reliable Clutch Repairs That Keep You Moving";
const desc = [
  `A clutch in top condition ensures every gear change is smooth, responsive, and effortless. When your clutch begins to wear, you might notice small but critical signs—sluggish gear engagement, a burning smell, or even difficulty accelerating uphill. Ignoring these symptoms can lead to further damage, higher repair costs, and an increased risk of sudden breakdowns.`,
  `At GP Motors, we don’t just fix what’s broken—we run a full check to see why it happened in the first place. Whether it’s worn friction plates, a stretched cable, or hydraulic issues, we handle everything efficiently using the right tools and quality parts.`,
  `Timely service prevents unexpected breakdowns, improves reliability, and keeps your car running smoothly on city streets and long drives alike.`,
];

function ClutchChangeServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={ClutchChangeImage}
      altText="Clutch Change"
      title={title}
      desc={desc}
    />
  );
}

export default ClutchChangeServiceSubHeader;
