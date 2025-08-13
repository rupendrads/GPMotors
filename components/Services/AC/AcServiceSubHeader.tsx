"use client";

import HeatProtectionImage from "@/images/heat-protection.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Dont Let the Outside Heat Inside with Car AC Repair in London";
const desc = [
  `Do you want to make your car slightly more comfortable, especially
            in the summer? It is impossible without a well-maintained car air
            conditioning system. If your car AC has stopped working or decreased
            efficiency due to prolonged use, don’t worry; GP motors offers
            detailed car AC repair services in London, UK.`,
  `Whether you need to service your car’s AC or entire repairs, London
            Motor Sports is a reliable automotive garage for all air
            conditioning repairs. At LMS, we have modern tools and technologies
            for auto HVAC repair. So, we can overtake the repairs and
            maintenance of all types of cars.`,
  `A well-maintained car AC keeps the car’s interior cool and helps
            reduce moisture in the air. Moreover, by maintaining or servicing
            your car AC on time or regularly, you can keep foul odours away from
            your car.`,
];

function AcServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={HeatProtectionImage}
      altText="Heat Protection"
      title={title}
      desc={desc}
    />
  );
}

export default AcServiceSubHeader;
