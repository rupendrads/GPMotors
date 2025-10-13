import GasketOverhaulService from "@/components/Services/GasketOverhaul/GasketOverhaulService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gasket Overhaul | Car Repair",
  description: "Gasket Overhaul for your car",
  keywords: "car, repair, gasket overhaul",
  metadataBase: new URL("https://gpmotorstedd.co.uk/gasket-overhaul"),
};

export default function GasketOverhaulPage() {
  return (
    <main className="mx-auto">
      <GasketOverhaulService />
    </main>
  );
}
