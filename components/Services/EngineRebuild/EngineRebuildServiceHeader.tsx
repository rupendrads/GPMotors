import ServiceHeader from "@/components/Services/ServiceHeader";
import EngineRebuildServiceHeaderImage from "@/images/engine-rebuild-service-header.png";

const title = "Restore Your Engine’s Power with GP Motors’ Rebuild Service";
const desc =
  "Experiencing reduced performance, excessive smoke, or strange engine noises? It may be time for a professional engine rebuild. At GP Motors, we specialize in restoring engines to peak condition with precision and care.";

const EngineRebuildServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={EngineRebuildServiceHeaderImage}
      altText="Engine Rebuild Service"
      title={title}
      desc={desc}
    />
  );
};

export default EngineRebuildServiceHeader;
