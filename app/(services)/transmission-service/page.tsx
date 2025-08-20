import TransmissionService from "@/components/Services/Transmission/TransmissionService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Transmission Service | Car Repair",
  description: "Transmission Service for your car",
  keywords: "car, repair, car transmission service",
  metadataBase: new URL("https://localhost:3000/transmission-service"),
};

function TransmissionServicePage() {
  return (
    <main className="mx-auto">
      <TransmissionService />
    </main>
  );
}

export default TransmissionServicePage;
