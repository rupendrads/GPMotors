import FullService from "@/components/Services/Full/FullService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Service | Car Repair",
  description: "Full Service for your car",
  keywords: "car, repair, full service",
  metadataBase: new URL("https://localhost:3000/full-service"),
};

export default function FullServicePage() {
  return (
    <main className="mx-auto">
      <FullService />
    </main>
  );
}
