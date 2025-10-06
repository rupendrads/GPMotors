"use client";

import ResistorReplacementServiceImage from "@/images/resistor-replacement-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Why the Resistor Matters";
const desc = [
  `The blower motor resistor regulates the fan speeds for your heating and air conditioning. When it fails, you may lose certain speed settings or the fan may stop working altogether—making it impossible to control airflow in your car.`,
  `At GP Motors, we diagnose resistor faults quickly and fit new, high-quality components to restore proper functionality to your climate control system.`,
];

function ResistorReplacementSubHeader() {
  return (
    <ServiceSubHeader
      imageData={ResistorReplacementServiceImage}
      altText="Resistor Replacement"
      title={title}
      desc={desc}
    />
  );
}

export default ResistorReplacementSubHeader;
