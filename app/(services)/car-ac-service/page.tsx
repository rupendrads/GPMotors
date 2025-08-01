import AcService from "@/components/Services/AC/AcService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car AC Service | Car Repair",
  description: "Car AC Service for your car",
  keywords: "car, repair, car ac service",
  metadataBase: new URL("https://localhost:3000/car-ac-service"),
};

function CarAcServicePage() {
  return (
    <main className="mx-auto">
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <AcService />
      </div>
    </main>
  );
}

export default CarAcServicePage;
