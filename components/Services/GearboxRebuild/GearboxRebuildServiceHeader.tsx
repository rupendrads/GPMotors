import ServiceHeader from "@/components/Services/ServiceHeader";
import GearboxRebuildServiceHeaderImage from "@/images/gearbox-rebuild-service-header.png";

const title = "Restore Smooth Shifting with GP Motors’ Gearbox Rebuild";
const desc =
  "Struggling with gear slipping, grinding noises, or delayed shifting? These are signs your gearbox needs more than a quick fix. At GP Motors, we specialize in gearbox rebuilds that restore performance and reliability for the long term.";

const GearboxRebuildServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={GearboxRebuildServiceHeaderImage}
      altText="Gearbox Rebuild Service"
      title={title}
      desc={desc}
    />
  );
};

export default GearboxRebuildServiceHeader;
