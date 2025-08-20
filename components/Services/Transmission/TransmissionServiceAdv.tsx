"use client";
import transmissionServiceAdvImg from "@/images/transmission-service-adv.png";
import ServiceAdv from "../ServiceAdv";

const title = "Keep Your gears smooth with GP Motors!";

function TransmissionServiceAdv() {
  return <ServiceAdv imageData={transmissionServiceAdvImg} altText="car" title={title} />;
}

export default TransmissionServiceAdv;
