"use client";
import ElectricalDiagnosticAdvImg from "@/images/electrical-diagnostic-adv.png";
import ServiceAdv from "../ServiceAdv";

const title = "Keep Your Car Looking Great with GP Motors!";

function ElectricalDiagnosticAdv() {
  return <ServiceAdv imageData={ElectricalDiagnosticAdvImg} altText="car" title={title} />;
}

export default ElectricalDiagnosticAdv;
