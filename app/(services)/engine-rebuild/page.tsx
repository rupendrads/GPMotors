
import EngineRebuildService from "@/components/Services/EngineRebuild/EngineRebuildService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engine Rebuild | Car Repair",
  description: "Engine Rebuild for your car",
  keywords: "car, repair, engine rebuild",
  metadataBase: new URL("https://localhost:3000/engine-rebuild"),
};

export default function EngineRebuildPage() {
  return (
    <main className="mx-auto">
      <EngineRebuildService />
    </main>
  );
}
