import ServiceHeader from "@/components/Services/ServiceHeader";
import TimingBeltChangeServiceHeaderImage from "@/images/timing-belt-change-service-header.jpg";

const title = "Avoid Costly Engine Damage with a Timing Belt Change";
const desc =
  " Hearing ticking noises, experiencing rough idling, or unsure when your timing belt was last replaced? A worn or broken timing belt can lead to severe engine damage. At GP Motors in West London, we provide expert timing belt replacement to keep your engine synchronized, reliable, and safe.";

const TimingBeltChangeServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={TimingBeltChangeServiceHeaderImage}
      altText="Timing Belt Change Service"
      title={title}
      desc={desc}
    />
  );
};

export default TimingBeltChangeServiceHeader;
