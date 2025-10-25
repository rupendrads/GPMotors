"use client";
import MinorResprayAdvImg from "@/images/dent-service-adv.png";
import ServiceAdv from "../ServiceAdv";

const title = "Keep Your Car Looking Great with GP Motors!";

function MinorResprayAdv() {
  return <ServiceAdv imageData={MinorResprayAdvImg} altText="car" title={title} />;
}

export default MinorResprayAdv;
