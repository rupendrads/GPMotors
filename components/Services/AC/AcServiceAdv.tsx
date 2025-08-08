"use client";
import carImg from "@/images/ac-service-adv.jpg";
import ServiceAdv from "../ServiceAdv";

const title = "Keep Your Car Cooling Great with GP Motors!";

function AcServiceAdv() {
  return <ServiceAdv imageData={carImg} altText="car" title={title} />;
}

export default AcServiceAdv;
