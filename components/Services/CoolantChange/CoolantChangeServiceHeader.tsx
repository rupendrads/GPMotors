import ServiceHeader from "@/components/Services/ServiceHeader";
import CoolantChangeServiceHeaderImage from "@/images/coolant-change-service-header.png";

const title = "Keep Your Engine Cool with GP Motors";
const desc =
  "Is your car overheating, or has it been a while since your last coolant replacement? Old or low coolant can reduce engine performance and lead to serious damage. At GP Motors in West London, we provide quick, professional coolant changes to keep your engine running at the right temperature—safely and efficiently.";

const CoolantChangeServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={CoolantChangeServiceHeaderImage}
      altText="Coolant Change Service"
      title={title}
      desc={desc}
    />
  );
};

export default CoolantChangeServiceHeader;
