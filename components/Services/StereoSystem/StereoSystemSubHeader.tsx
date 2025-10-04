"use client";

import StereoSystemServiceImage from "@/images/stereo-system-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why Your Car Deserves a Quality Stereo";
const desc = [
  `A modern stereo system isn’t just about music—it’s about comfort, convenience, and connectivity. From crystal-clear audio to smartphone integration, upgrading your system adds value and enjoyment to every journey.`,
  `At GP Motors, we fit everything from factory replacements to advanced entertainment systems with touchscreens, navigation, and premium sound. Our technicians ensure precise installation for seamless performance.`,
];

function StereoSystemSubHeader() {
  return (
    <ServiceSubHeader
      imageData={StereoSystemServiceImage}
      altText="Stereo System"
      title={title}
      desc={desc}
    />
  );
}

export default StereoSystemSubHeader;
