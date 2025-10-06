import SpecificSystemCheck from "@/components/Services/SpecificSystemCheck/SpecificSystemCheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specific System Check| Car Repair",
  description: "Specific System Check for your car",
  keywords: "car, repair, specific system check",
  metadataBase: new URL("https://localhost:3000/specific-system-check"),
};

export default function SpecificSystemCheckPage() {
  return (
    <main className="mx-auto">
      <SpecificSystemCheck />
    </main>
  );
}
