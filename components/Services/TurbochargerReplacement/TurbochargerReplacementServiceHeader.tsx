import ServiceHeader from "@/components/Services/ServiceHeader";
import TurbochargerServiceHeaderImage from "@/images/turbocharger-service-header.png";

const title = "Restore Power with GP Motors’ Turbocharger Replacement";
const desc =
  "Experiencing loss of power, excess smoke, or unusual whistling noises? These are common signs of a failing turbocharger. At GP Motors in West London, we provide expert turbocharger replacement to bring back performance, efficiency, and smooth driving.";

const TurbochargerReplacementServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={TurbochargerServiceHeaderImage}
      altText="Turbocharger Replacement Service"
      title={title}
      desc={desc}
    />
  );
};

export default TurbochargerReplacementServiceHeader;
