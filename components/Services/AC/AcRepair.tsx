"use client";

import CarAcRepairImage from "@/images/car-ac-repair.png";
import Repair from "../Repair/Repair";

const listItems = [
  "Refill or replace gases regularly",
  "Clean filters, prevent clogging",
  "Regular servicing recommended",
  "Remove unpleasant car odors",
  "Test for gas leaks",
  "Check for fluid leaks",
  "Evacuate air and moisture",
  "Recover and recycle refrigerant",
];

const titleDescriptions = [
  {
    title: "What Does GP Motors Offer Under Car Air Conditioning Repair?",
    desc: `When you book vehicle air conditioning services in London at LMS, our
          specialists offer a set of diverse car AC repair services, including:`,
  },
  {
    title: "How Much Does Car AC Repair Cost at GP Motors?",
    desc: `On average, car AC repair costs around £50 – £200 for leak repairs in
          London, UK. At London Motor Sports, you can get car AC compressor
          repair services for £400 – £1000. The cost for AC condenser repair is
          £200 – £550. If you need Aircon regas services, you can get them for
          £50 – £250. However, these price brackets could vary based on your
          car’s air conditioning system condition, life, and make and model.`,
  },
];

function AcRepair() {
  return (
    <Repair
      imageData={CarAcRepairImage}
      altText="repair image"
      titleDescriptions={titleDescriptions}
      listItems={listItems}
    />
  );
}

export default AcRepair;
