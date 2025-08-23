import ServiceHeader from "@/components/Services/ServiceHeader";
import ClutchChangeServiceHeaderImage from "@/images/clutch-change-service-header.jpg";

const title = "Gear Changes Feeling Off? Let GP Motors Help";
const desc =
  "Is your clutch slipping, sticking, or making gear changes harder than usual? Don’t ignore the signs—small issues can turn into costly repairs. At GP Motors in West London, we’ll get your clutch back to peak performance quickly, so you can drive with confidence again.";

const ClutchChangeServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={ClutchChangeServiceHeaderImage}
      altText="Clutch Change Service"
      title={title}
      desc={desc}
    />
  );
};

export default ClutchChangeServiceHeader;
