import DentRemovalService from "@/components/Services/DentRemoval/DentRemovalService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Dent Removal Service | Car Repair",
  description: "Car Dent Removal Service for your car",
  keywords: "car, repair, car dent removal service",
  metadataBase: new URL("https://localhost:3000/car-dent-removal"),
};

function CarDentRemovalServicePage() {
  return (
    <main className="mx-auto">
      <DentRemovalService />
    </main>
  );
}

export default CarDentRemovalServicePage;
