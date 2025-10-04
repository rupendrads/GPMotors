"use client";
import TimingBeltChangeServiceAdvImg from "@/images/timing-belt-change-service-adv.png";
import ServiceAdv from "../ServiceAdv";

const title = "Don’t Wait for a Belt Failure—Act Now";

function TimingBeltChangeServiceAdv() {
  return <ServiceAdv imageData={TimingBeltChangeServiceAdvImg} altText="car" title={title} />;
}

export default TimingBeltChangeServiceAdv;
