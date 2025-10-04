import ServiceHeader from "@/components/Services/ServiceHeader";
import MinorServiceHeaderImage from "@/images/minor-service-header.jpg";

const title = "Keep Your Car Reliable with GP Motors’ Minor Service";
const desc =
  "Regular minor servicing prevents small issues from becoming major repairs. At GP Motors in West London, our expert technicians perform thorough checks and essential maintenance to keep your vehicle safe, efficient, and ready for the road—all without taking up your entire day.";

const MinorServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={MinorServiceHeaderImage}
      altText="Minor Service"
      title={title}
      desc={desc}
    />
  );
};

export default MinorServiceHeader;
