
import BrakeCaliperReplacementService from "@/components/Services/BrakeCaliperReplacement/BrakeCaliperReplacementService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brake Caliper Replacement | Car Repair",
  description: "Brake Caliper Replacement for your car",
  keywords: "car, repair, brake caliper replacement",
  metadataBase: new URL("https://gpmotorstedd.co.uk/brake-caliper-replacement"),
};

export default function BrakeCaliperReplacementPage() {
  return (
    <main className="mx-auto">
      <BrakeCaliperReplacementService />
    </main>
  );
}
