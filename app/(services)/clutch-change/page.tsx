import ClutchChangeService from "@/components/Services/ClutchChange/ClutchChangeService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Clutch Change Service | Car Repair",
  description: "Clutch Change Service for your car",
  keywords: "car, repair, car clutch change service",
  metadataBase: new URL("https://gpmotorstedd.co.uk/clutch-change"),
};

function ClutchChangeServicePage() {
  return (
    <main className="mx-auto">
      <ClutchChangeService />
    </main>
  );
}

export default ClutchChangeServicePage;
