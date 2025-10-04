"use client";

import AlarmSystemServiceImage from "@/images/alarm-system-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why a Reliable Alarm System Matters";
const desc = [
  `A car alarm is one of the most effective ways to deter theft and protect your vehicle. From basic sirens to advanced systems with immobilizers and sensors, modern alarms provide layers of security that give you confidence wherever you park.`,
  `At GP Motors, we install, repair, and upgrade alarm systems tailored to your needs, using high-quality components and precise installation for long-lasting reliability.`,
];

function AlarmSystemSubHeader() {
  return (
    <ServiceSubHeader
      imageData={AlarmSystemServiceImage}
      altText="Alarm System"
      title={title}
      desc={desc}
    />
  );
}

export default AlarmSystemSubHeader;
