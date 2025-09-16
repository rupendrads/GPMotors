import CompressorReplacementService from "@/components/Services/CompressorReplacement/CompressorReplacementService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compressor Replacement | Car Repair",
  description: "Compressor Replacement for your car",
  keywords: "car, repair, compressor replacement",
  metadataBase: new URL("https://localhost:3000/compressor-replacement"),
};

export default function CompressorReplacementPage() {
  return (
    <main className="mx-auto">
      <CompressorReplacementService />
    </main>
  );
}
