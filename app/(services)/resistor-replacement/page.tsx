import ResistorReplacement from "@/components/Services/ResistorReplacement/ResistorReplacement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ResistorReplacement | Car Repair",
  description: "Resistor Replacement for your car",
  keywords: "car, repair, resistor replacement",
  metadataBase: new URL("https://gpmotorstedd.co.uk/resistor-replacement"),
};

export default function ResistorReplacementPage() {
  return (
    <main className="mx-auto">
      <ResistorReplacement />
    </main>
  );
}
