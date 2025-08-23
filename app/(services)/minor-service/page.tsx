import MinorService from "@/components/Services/Minor/MinorService"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minor Service | Car Repair",
  description: "Minor Service for your car",
  keywords: "car, repair, minor service",
  metadataBase: new URL("https://localhost:3000/minor-service"),
};

export default function MinorServicePage() {
  return (
    <main className="mx-auto">
      <MinorService />
    </main>
  );
}
