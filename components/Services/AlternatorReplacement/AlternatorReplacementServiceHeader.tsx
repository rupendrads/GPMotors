import ServiceHeader from "@/components/Services/ServiceHeader";
import AlternatorServiceHeaderImage from "@/images/alternator-service-header.png";

const title = "Reliable Starting & Charging with GP Motors’ Expert Service";
const desc =
  "Struggling to start your car, noticing dim lights, or dealing with battery warning lights? These are signs your alternator or starter motor may be failing. At GP Motors in West London, we provide quick, professional replacements to keep your car starting smoothly and charging reliably.";

const AlternatorReplacementServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={AlternatorServiceHeaderImage}
      altText="Alternator Replacement Service"
      title={title}
      desc={desc}
    />
  );
};

export default AlternatorReplacementServiceHeader;
