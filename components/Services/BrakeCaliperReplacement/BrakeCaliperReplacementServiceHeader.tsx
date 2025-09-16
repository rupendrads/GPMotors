import ServiceHeader from "@/components/Services/ServiceHeader";
import BrakeCaliperServiceHeaderImage from "@/images/brake-caliper-service-header.png";

const title = "Restore Braking Power with GP Motors’ Caliper Replacement";
const desc =
  "Noticing uneven braking, leaking brake fluid, or pulling to one side when you stop? These are signs of failing brake calipers. At GP Motors in West London, we provide expert brake caliper replacement to ensure safe, balanced, and reliable braking every time.";

const BrakeCaliperReplacementServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={BrakeCaliperServiceHeaderImage}
      altText="Brake Caliper Replacement Service"
      title={title}
      desc={desc}
    />
  );
};

export default BrakeCaliperReplacementServiceHeader;
