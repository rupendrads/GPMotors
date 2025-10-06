import ServiceHeader from "@/components/Services/ServiceHeader";
import WiringRewiringHeaderImage from "@/images/wiring-rewiring-header.png";

const title = "Restore Safety & Reliability with GP Motors’ Wiring Services";
const desc =
  "Electrical issues, flickering lights, or failing systems? Damaged or worn wiring may be to blame. At GP Motors in West London, we provide expert wiring repairs and full rewiring solutions to keep your vehicle safe and dependable.";

const WiringRewiringHeader = () => {
  return (
    <ServiceHeader
      imageData={WiringRewiringHeaderImage}
      altText="Wiring Rewiring"
      title={title}
      desc={desc}
    />
  );
};

export default WiringRewiringHeader;
