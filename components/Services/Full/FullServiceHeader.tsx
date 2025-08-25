import ServiceHeader from "@/components/Services/ServiceHeader";
import FullServiceHeaderImage from "@/images/full-service-header.jpg";

const title = "Complete Car Care with GP Motors’ Full Service";
const desc =
  "When you want your car checked from top to bottom, a full service is the right choice. At GP Motors in West London, we provide a comprehensive inspection and maintenance package that restores performance, improves safety, and helps prevent costly future repairs.";

const FullServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={FullServiceHeaderImage}
      altText="Full Service"
      title={title}
      desc={desc}
    />
  );
};

export default FullServiceHeader;
