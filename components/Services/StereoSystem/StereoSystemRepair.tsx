"use client";

import StereoSystemRepairImage from "@/images/stereo-system-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Enhances driving enjoyment with quality sound",
  "Adds modern features like Bluetooth & DAB",
  "Provides safer hands-free phone connectivity",
  "Repairs wiring, speakers, and faulty units",
  "Custom installations for all car models",
  "Professional finish with hidden wiring",
];

const titleDescriptions = [
  {
    title: "The Benefits of a Stereo Upgrade or Repair",
    desc: `Driving with a faulty or outdated stereo means poor sound, limited functionality, and missed features like Bluetooth or DAB radio. A high-quality stereo system improves sound clarity, makes phone calls safer with hands-free integration, and adds modern entertainment options for every trip. Whether your current unit needs repairing or you’re ready for an upgrade, GP Motors delivers a tailored solution that fits your car and lifestyle. We work with trusted brands and ensure clean, professional installations for a factory-finish look.`,
  },
  {
    title: "How GP Motors Handles Stereo Services?",
    desc: `From diagnosis and repair of faulty wiring to full stereo system installations, we provide solutions that are reliable, stylish, and built to last.`,
  },
];

function StereoSystemRepair() {
  return (
    <Repair
      imageData={StereoSystemRepairImage}
      altText="Stereo System"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default StereoSystemRepair;
