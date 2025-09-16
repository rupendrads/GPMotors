import BrakeDiskReplacementService from "@/components/Services/BrakeDiscReplacement/BrakeDiscReplacementService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brake Disk Replacement | Car Repair",
  description: "Brake Disk Replacement for your car",
  keywords: "car, repair, brake disk replacement",
  metadataBase: new URL("https://localhost:3000/brake-disk-replacement"),
};

export default function BrakeDiskReplacementPage() {
  return (
    <main className="mx-auto">
      <BrakeDiskReplacementService />
    </main>
  );
}
