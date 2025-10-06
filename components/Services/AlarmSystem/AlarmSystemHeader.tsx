import ServiceHeader from "@/components/Services/ServiceHeader";
import AlarmSystemHeaderImage from "@/images/alarm-system-header.png";

const title = "Protect Your Vehicle with GP Motors’ Car Alarm Service";
const desc =
  "Want extra peace of mind? Whether you need a new alarm system, repairs, or upgrades, GP Motors in West London provides expert alarm solutions to keep your car secure day and night.";

const AlarmSystemHeader = () => {
  return (
    <ServiceHeader
      imageData={AlarmSystemHeaderImage}
      altText="Alarm System"
      title={title}
      desc={desc}
    />
  );
};

export default AlarmSystemHeader;
