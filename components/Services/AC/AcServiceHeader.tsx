import ServiceHeader from "@/components/ServiceHeader";
import AcServiceHeaderImage from "@/images/ac-service-header.jpg";

const title = "Beat the Heat with GP motors Car AC Repair!";
const desc =
  "Is your car’s AC not keeping you cool? Let our skilled technicians fix it quickly and efficiently. Schedule your AC repair now and enjoy a refreshing drive!";

const AcServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={AcServiceHeaderImage}
      altText="AC Service"
      title={title}
      desc={desc}
    />
  );
};

export default AcServiceHeader;
