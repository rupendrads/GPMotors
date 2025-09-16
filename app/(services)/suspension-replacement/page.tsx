import SuspensionReplacementService from "@/components/Services/SuspensionReplacement/SuspensionReplacementService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suspension Replacement | Car Repair",
  description: "Suspension Replacement for your car",
  keywords: "car, repair, suspension replacement",
  metadataBase: new URL("https://localhost:3000/suspension-replacement"),
};

export default function SuspensionReplacementPage() {
  return (
    <main className="mx-auto">
      <SuspensionReplacementService />
    </main>
  );
}
