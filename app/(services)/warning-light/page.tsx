import WarningLight from "@/components/Services/WarningLight/WarningLight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warning Light | Car Repair",
  description: "Warning Light for your car",
  keywords: "car, repair, warning light",
  metadataBase: new URL("https://gpmotorstedd.co.uk/warning-light"),
};

export default function WarningLightPage() {
  return (
    <main className="mx-auto">
      <WarningLight />
    </main>
  );
}
