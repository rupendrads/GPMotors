"use client";
import dentServiceImg from "@/images/dent-service-adv.png";
import ServiceAdv from "../ServiceAdv";

const title = "Keep Your Car Looking Great with GP Motors!";

function DentRemovalServiceAdv() {
  return <ServiceAdv imageData={dentServiceImg} altText="car" title={title} />;
}

export default DentRemovalServiceAdv;
