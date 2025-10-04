"use client";

import WiringRewiringServiceImage from "@/images/wiring-rewiring-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why Wiring Is the Backbone of Your Car’s Systems";
const desc = [
  `From your headlights to your ECU, every system in your car relies on healthy wiring. Over time, heat, vibration, and wear can damage wires and connections, causing intermittent faults, short circuits, or complete failures.`,
  `At GP Motors, we diagnose wiring issues with precision, repair damaged sections, and carry out full rewiring where needed using high-quality, durable materials.`,
];

function WiringRewiringSubHeader() {
  return (
    <ServiceSubHeader
      imageData={WiringRewiringServiceImage}
      altText="Wiring Rewiring"
      title={title}
      desc={desc}
    />
  );
}

export default WiringRewiringSubHeader;
