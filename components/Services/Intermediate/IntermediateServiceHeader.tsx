import ServiceHeader from "@/components/Services/ServiceHeader";
import IntermediateServiceHeaderImage from "@/images/intermediate-service-header.jpg";

const title = "Keep Your Car Performing Its Best with Intermediate Service";
const desc =
  "If it’s been a while since your last full checkup, an intermediate service is the smart choice. At GP Motors in West London, we offer a detailed maintenance package that goes beyond a basic service—helping your car stay safe, efficient, and reliable mile after mile.";

const IntermediateServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={IntermediateServiceHeaderImage}
      altText="Intermediate Service"
      title={title}
      desc={desc}
    />
  );
};

export default IntermediateServiceHeader;
