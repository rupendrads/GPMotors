import ServiceHeader from "@/components/Services/ServiceHeader";
import BrakeFluidServiceHeaderImage from "@/images/brake-fluid-service-header.jpg";

const title = "Get Your Car’s Brake Fluid Changed at GP Motors";
const desc =
  "Hearing unusual rattling from your brakes? It might be time to replace the brake fluid. If you’re in West London and need an affordable, quick brake fluid change, GP Motors can get it done in just 30 minutes!";

const BrakeFluidServiceHeader = () => {
  return (
    <ServiceHeader
      imageData={BrakeFluidServiceHeaderImage}
      altText="Brake Fluid Service"
      title={title}
      desc={desc}
    />
  );
};

export default BrakeFluidServiceHeader;
