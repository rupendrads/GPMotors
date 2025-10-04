import ServiceHeader from "@/components/Services/ServiceHeader";
import SuspensionServiceHeaderImage from "@/images/suspension-service-header.png";

const title = "Drive Smooth & Safe with GP Motors’ Suspension Repairs";
const desc =
  "Feeling every bump in the road, hearing clunks, or noticing uneven tire wear? These are signs your suspension components may be worn out. At GP Motors in West London, we provide expert suspension replacement to restore comfort, handling, and safety.";

const SuspensionReplacementServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={SuspensionServiceHeaderImage}
      altText="Suspension Replacement Service"
      title={title}
      desc={desc}
    />
  );
};

export default SuspensionReplacementServiceHeader;
