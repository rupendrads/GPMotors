import ServiceHeader from "@/components/Services/ServiceHeader";
import FullDiagnosticHeaderImage from "@/images/full-diagnostic-header.png";

const title = "Get to the Root of Any Issue with GP Motors’ Full Diagnostic";
const desc =
  "Dashboard warning lights, unusual noises, or performance drops? Don’t guess—know for sure. At GP Motors in West London, we offer complete diagnostic services to identify problems quickly and accurately.";

const FullDiagnosticHeader = () => {
  return (
    <ServiceHeader
      imageData={FullDiagnosticHeaderImage}
      altText="Full Diagnostic"
      title={title}
      desc={desc}
    />
  );
};

export default FullDiagnosticHeader;
