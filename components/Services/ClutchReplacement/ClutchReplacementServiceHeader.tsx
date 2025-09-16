import ServiceHeader from "@/components/Services/ServiceHeader";
import ClutchReplacementServiceHeaderImage from "@/images/clutch-replacement-service-header.png";

const title = "Restore Control with GP Motors’ Clutch Replacement";
const desc =
  "Finding it hard to change gears, or noticing slipping and strange clutch noises? It may be time for a full clutch replacement. At GP Motors in West London, we deliver fast, professional clutch replacements that get you back on the road safely and smoothly.";

const ClutchReplacementServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={ClutchReplacementServiceHeaderImage}
      altText="Clutch Replacement Service"
      title={title}
      desc={desc}
    />
  );
};

export default ClutchReplacementServiceHeader;
