"use client";

import TransmissionImage from "@/images/transmission-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Timely Transmission Care for Reliable Gear Shifts";
const desc = [
  `Your transmission does the heavy lifting every time you accelerate, brake, or climb a hill. Skipping maintenance can cause sluggish responses, overheating, and expensive repairs later on.`,
  `At GP Motors, we combine precision diagnostics with skilled hands to inspect, clean, and replenish your transmission system. Whether it’s checking for leaks, testing fluid quality, or adjusting components, we make sure every gear engages effortlessly.`,
  `Routine servicing doesn’t just prevent breakdowns—it also helps improve fuel efficiency, keeps your car running longer, and ensures a safer, smoother ride every day.`,
];

function TransmissionServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={TransmissionImage}
      altText="Transmission"
      title={title}
      desc={desc}
    />
  );
}

export default TransmissionServiceSubHeader;
