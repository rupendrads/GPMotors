"use client";
import WarningLightAdvImg from "@/images/warning-light-adv.png";
import ServiceAdv from "../ServiceAdv";

const title = "Keep Your Car Looking Great with GP Motors!";

function WarningLightAdv() {
  return <ServiceAdv imageData={WarningLightAdvImg} altText="car" title={title} />;
}

export default WarningLightAdv;
