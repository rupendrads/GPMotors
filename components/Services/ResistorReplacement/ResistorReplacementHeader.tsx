import ServiceHeader from "@/components/Services/ServiceHeader";
import ResistorReplacementHeaderImage from "@/images/resistor-replacement-header.png";

const title = "Restore Heating & Cooling with GP Motors’ Resistor Replacement";
const desc =
  "Struggling with a heater or AC fan that only works on certain speeds? The culprit is often a failed blower motor resistor. At GP Motors in West London, we provide quick, expert resistor replacements to bring your climate control back to normal.";

const ResistorReplacementHeader = () => {
  return (
    <ServiceHeader
      imageData={ResistorReplacementHeaderImage}
      altText="Resistor Replacement"
      title={title}
      desc={desc}
    />
  );
};

export default ResistorReplacementHeader;
