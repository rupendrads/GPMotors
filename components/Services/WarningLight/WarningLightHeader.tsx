import ServiceHeader from "@/components/Services/ServiceHeader";
import WarningLightHeaderImage from "@/images/warning-light-header.png";

const title = "Don’t Ignore Dashboard Warnings — Let GP Motors Check Them All";
const desc =
  "Engine light, ABS, airbag, or battery warning? When a light comes on, it means your car needs attention. At GP Motors in West London, we run complete warning light checks to find the cause and fix it fast.";

const WarningLightHeader = () => {
  return (
    <ServiceHeader
      imageData={WarningLightHeaderImage}
      altText="Warning Light"
      title={title}
      desc={desc}
    />
  );
};

export default WarningLightHeader;
