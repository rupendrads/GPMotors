import ServiceHeader from "@/components/Services/ServiceHeader";
import ElectricalDiagnosticHeaderImage from "@/images/electrical-diagnostic-header.png";

const title = "Keep Your Car’s Electronics Running with GP Motors’ Electrical Service";
const desc =
  "Flickering lights, faulty windows, or dead batteries? Modern cars rely on complex electrical systems, and even small faults can cause big headaches. At GP Motors in West London, we provide expert electrical diagnostics and repairs to keep everything running smoothly.";

const ElectricalDiagnosticHeader = () => {
  return (
    <ServiceHeader
      imageData={ElectricalDiagnosticHeaderImage}
      altText="Electrical Diagnostic"
      title={title}
      desc={desc}
    />
  );
};

export default ElectricalDiagnosticHeader;
