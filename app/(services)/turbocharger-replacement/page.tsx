import TurbochargerReplacementService from "@/components/Services/TurbochargerReplacement/TurbochargerReplacementService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turbocharger Replacement | Car Repair",
  description: "Turbocharger Replacement for your car",
  keywords: "car, repair, turbocharger replacement",
  metadataBase: new URL("https://gpmotorstedd.co.uk/turbocharger-replacement"),
};

export default function TurbochargerReplacementPage() {
  return (
    <main className="mx-auto">
      <TurbochargerReplacementService />
    </main>
  );
}
