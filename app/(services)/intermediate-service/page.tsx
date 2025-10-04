
import IntermediateService from "@/components/Services/Intermediate/IntermediateService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intermediate Service | Car Repair",
  description: "Intermediate Service for your car",
  keywords: "car, repair, intermediate service",
  metadataBase: new URL("https://localhost:3000/intermediate-service"),
};

export default function IntermediateServicePage() {
  return (
    <main className="mx-auto">
      <IntermediateService />
    </main>
  );
}
