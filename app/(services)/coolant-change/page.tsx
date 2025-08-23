import CoolantChangeService from "@/components/Services/CoolantChange/CoolantChangeService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Coolant Change Service | Car Repair",
  description: "Coolant Change Service for your car",
  keywords: "car, repair, car coolant change service",
  metadataBase: new URL("https://localhost:3000/coolant-change"),
};

function CoolantChangeServicePage() {
  return (
    <main className="mx-auto">
      <CoolantChangeService />
    </main>
  );
}

export default CoolantChangeServicePage;
