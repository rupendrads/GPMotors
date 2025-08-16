import ServiceHeader from "@/components/Services/ServiceHeader";
import DentRemovalServiceHeaderImage from "@/images/dent-removal-service-header.jpg";

const title = "Same-Day Car Dent Repair & Paintless Dent Removal Services";
const desc =
  "Has your car been involved in a collision, and are you looking for car dent repair or paintless dent removal services? If yes, contact LMS to get the repairs for all types of dents, from minor to severe, within 24 hours.";

const DentRemovalServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={DentRemovalServiceHeaderImage}
      altText="Dent Removal Service"
      title={title}
      desc={desc}
    />
  );
};

export default DentRemovalServiceHeader;
