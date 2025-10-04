import GearboxRebuildService from "@/components/Services/GearboxRebuild/GearboxRebuildService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gearbox Rebuild | Car Repair",
  description: "Gearbox Rebuild for your car",
  keywords: "car, repair, gearbox rebuild",
  metadataBase: new URL("https://localhost:3000/gearbox-rebuild"),
};

export default function GearboxRebuildPage() {
  return (
    <main className="mx-auto">
      <GearboxRebuildService />
    </main>
  );
}
