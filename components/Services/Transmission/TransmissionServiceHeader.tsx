import ServiceHeader from "@/components/Services/ServiceHeader";
import TransmissionServiceHeaderImage from "@/images/transmission-service-header.png";

const title = "Keep Your Drive Smooth with GP Motors’ Transmission Service";
const desc =
  "Feeling jerks, delays, or strange sounds while changing gears? That’s your transmission asking for attention. If you’re around West London, GP Motors offers quick, expert transmission service designed to restore performance in under an hour—without stretching your budget.";

const TransmissionServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={TransmissionServiceHeaderImage}
      altText="Transmission Service"
      title={title}
      desc={desc}
    />
  );
};

export default TransmissionServiceHeader;
