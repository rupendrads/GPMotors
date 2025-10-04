"use client";
import MinorServiceAdvImg from "@/images/minor-service-adv.png";
import ServiceAdv from "../ServiceAdv";

const title = "Give Your Car the Care It Deserves";

function MinorServiceAdv() {
  return <ServiceAdv imageData={MinorServiceAdvImg} altText="car" title={title} />;
}

export default MinorServiceAdv;
