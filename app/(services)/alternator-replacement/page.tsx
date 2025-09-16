
import AlternatorReplacementService from "@/components/Services/AlternatorReplacement/AlternatorReplacementService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alternator Replacement | Car Repair",
  description: "Alternator Replacement for your car",
  keywords: "car, repair, alternator replacement",
  metadataBase: new URL("https://localhost:3000/alternator-replacement"),
};

export default function AlternatorReplacementPage() {
  return (
    <main className="mx-auto">
      <AlternatorReplacementService />
    </main>
  );
}
