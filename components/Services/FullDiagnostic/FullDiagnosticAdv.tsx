"use client";
import FullDiagnosticAdvImg from "@/images/full-diagnostic-adv.png";
import ServiceAdv from "../ServiceAdv";

const title = "Keep Your Car Looking Great with GP Motors!";

function FullDiagnosticAdv() {
  return <ServiceAdv imageData={FullDiagnosticAdvImg} altText="car" title={title} />;
}

export default FullDiagnosticAdv;
