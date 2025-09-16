import ServiceHeader from "@/components/Services/ServiceHeader";
import CompressorServiceHeaderImage from "@/images/compressor-service-header.png";

const title = "Keep Your Car Cool with GP Motors’ AC Repairs";
const desc =
  "Weak cooling, strange noises, or refrigerant leaks? These are signs your AC compressor or condenser may be failing. At GP Motors in West London, we provide expert replacement services to restore comfort and efficiency to your car’s air conditioning system.";

const CompressorReplacementServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={CompressorServiceHeaderImage}
      altText="Compressor Replacement Service"
      title={title}
      desc={desc}
    />
  );
};

export default CompressorReplacementServiceHeader;
