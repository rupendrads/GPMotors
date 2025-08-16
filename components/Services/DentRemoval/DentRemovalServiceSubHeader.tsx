"use client";

import CarDentRepairImage from "@/images/car-dent-repair.png";
import ServiceSubHeader from "@/components/Services/ServiceSubHeader";

const title = "Fix the Damage with Affordable Car Dent Repair Services";
const desc = [
  `Car dents are one of the most unfortunate things in our routine lives. Even if you are used to driving your car carefully, a sudden collision or hit may still damage your vehicle. Don’t worry; LMS is here to offer automotive dent repair services, no matter the severity level of dents or damages to your car. London Motor Sports has a team of well-trained and experienced dent repair mechanics who ensure your vehicle is in safe hands.`,
  `So, they can help you repair minor and major dents without painting. Our dent removal experts specialise in modern techniques and technologies to offer all vehicle dent fixes, even without leaving a mark. So, what are you still looking for? Call LMS and get car dent removal services on the same day!`,
];

function DentRemovalServiceSubHeader() {
  return (
    <ServiceSubHeader
      imageData={CarDentRepairImage}
      altText="Dent Repair"
      title={title}
      desc={desc}
    />
  );
}

export default DentRemovalServiceSubHeader;
