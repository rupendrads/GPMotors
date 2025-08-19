import BrakeFluidService from "@/components/Services/BrakeFluid/BrakeFluidService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Brake Fluid Service | Car Repair",
  description: "Brake Fluid Service for your car",
  keywords: "car, repair, car brake fluid service",
  metadataBase: new URL("https://localhost:3000/brake-fluid-service"),
};

function CarBrakeFluidServicePage() {
  return (
    <main className="mx-auto">
      <BrakeFluidService />
    </main>
  );
}

export default CarBrakeFluidServicePage;
