import MotService from "@/components/Services/MOT/MotService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mot Service | Car Repair",
  description: "Mot Service for your car",
  keywords: "car, repair, mot service",
  metadataBase: new URL("https://localhost:3000/mot-service"),
};

export default function MotServicePage() {
  return (
    <main className="mx-auto">
      <MotService />
    </main>
  );
}
