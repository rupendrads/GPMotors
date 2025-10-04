"use client";
import FullServiceAdvImg from "@/images/full-service-adv.png";
import ServiceAdv from "../ServiceAdv";

const title = "Give Your Car the Complete Care It Deserves";

function FullServiceAdv() {
  return <ServiceAdv imageData={FullServiceAdvImg} altText="car" title={title} />;
}

export default FullServiceAdv;
