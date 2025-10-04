"use client";

import FullServiceImage from "@/images/full-service.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "All-in-One Maintenance for Maximum Reliability";
const desc = [
  `A full service is more than just an oil change—it’s a complete health check for your vehicle. From fluids, filters, and brakes to suspension, steering, and electronics, every critical system is examined, adjusted, and optimized.`,
  `At GP Motors, our experienced technicians follow manufacturer guidelines and use high-quality parts to make sure your car runs as efficiently and safely as possible. Regular full servicing keeps your vehicle in top shape, improves fuel economy, and extends its lifespan—while giving you confidence every time you drive.`,
];

function FullServiceSubHeader() {                 
  return (
    <ServiceSubHeader
      imageData={FullServiceImage}
      altText="Full Service"
      title={title}
      desc={desc}
    />
  );
}

export default FullServiceSubHeader;
