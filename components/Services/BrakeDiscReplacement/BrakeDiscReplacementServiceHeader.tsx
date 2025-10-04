import ServiceHeader from "@/components/Services/ServiceHeader";
import BrakeDiscServiceHeaderImage from "@/images/brake-disc-service-header.png";

const title = "Stay Safe with GP Motors’ Brake Pad & Disc Replacement";
const desc =
  "Hearing squeaks, grinding, or feeling vibrations when braking? These are clear signs your brake pads or discs are worn out. At GP Motors in West London, we provide fast, reliable replacements to restore your stopping power and keep you safe on the road.";

const BrakeDiscReplacementServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={BrakeDiscServiceHeaderImage}
      altText="Brake Disc Replacement Service"
      title={title}
      desc={desc}
    />
  );
};

export default BrakeDiscReplacementServiceHeader;
