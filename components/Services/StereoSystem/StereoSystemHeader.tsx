import ServiceHeader from "@/components/Services/ServiceHeader";
import StereoSystemHeaderImage from "@/images/stereo-system-header.png";

const title = "Upgrade Your Drive with GP Motors’ Stereo System Services";
const desc =
  "Want better sound quality or modern features like Bluetooth and hands-free calling? At GP Motors in West London, we install, repair, and upgrade stereo systems to transform your driving experience.";

const StereoSystemHeader = () => {
  return (
    <ServiceHeader
      imageData={StereoSystemHeaderImage}
      altText="Stereo System"
      title={title}
      desc={desc}
    />
  );
};

export default StereoSystemHeader;
