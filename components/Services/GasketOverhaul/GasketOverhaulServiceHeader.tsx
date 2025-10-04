import ServiceHeader from "@/components/Services/ServiceHeader";
import GasketOverhaulServiceHeaderImage from "@/images/gasket-overhaul-service-header.png";

const title = "Protect Your Engine with GP Motors’ Head Gasket Overhaul";
const desc =
  "White smoke, overheating, or coolant mixing with oil? These are classic signs of a blown head gasket. At GP Motors in West London, we provide expert head gasket replacements to restore your engine’s performance and prevent severe damage.";

const GasketOverhaulServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={GasketOverhaulServiceHeaderImage}
      altText="Gasket Overhaul Service"
      title={title}
      desc={desc}
    />
  );
};

export default GasketOverhaulServiceHeader;
