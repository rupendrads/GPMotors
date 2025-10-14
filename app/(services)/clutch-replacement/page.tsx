
import ClutchReplacementService from "@/components/Services/ClutchReplacement/ClutchReplacementService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClutchReplacement | Car Repair",
  description: "Clutch Replacement for your car",
  keywords: "car, repair, clutch replacement",
  metadataBase: new URL("https://gpmotorstedd.co.uk/clutch-replacement"),
};

export default function ClutchReplacementPage() {
  return (
    <main className="mx-auto">
      <ClutchReplacementService />
    </main>
  );
}
