import ServiceHeader from "@/components/Services/ServiceHeader";
import SpecificSystemCheckHeaderImage from "@/images/specific-system-check-header.png";

const title = "Targeted Car System Checks by GP Motors";
const desc =
  " Got a problem with one part of your car? Whether it’s brakes, suspension, or the air conditioning, GP Motors in West London offers specific system checks to pinpoint issues quickly and accurately.";

const SpecificSystemCheckHeader = () => {
  return (
    <ServiceHeader
      imageData={SpecificSystemCheckHeaderImage}
      altText="Specific System Check"
      title={title}
      desc={desc}
    />
  );
};

export default SpecificSystemCheckHeader;
