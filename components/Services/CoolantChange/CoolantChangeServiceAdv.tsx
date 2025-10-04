"use client";
import coolantChangeServiceAdvImg from "@/images/coolant-change-adv.png";
import ServiceAdv from "../ServiceAdv";

const title = "Protect Your Engine—Book a Coolant Change Today";

function CoolantChangeServiceAdv() {
  return <ServiceAdv imageData={coolantChangeServiceAdvImg} altText="car" title={title} />;
}

export default CoolantChangeServiceAdv;
