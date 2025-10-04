import WiringRewiring from "@/components/Services/WiringRewiring/WiringRewiring";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiringRewiring | Car Repair",
  description: "Wiring Rewiring for your car",
  keywords: "car, repair, wiring rewiring",
  metadataBase: new URL("https://localhost:3000/wiring-rewiring"),
};

export default function WiringRewiringPage() {
  return (
    <main className="mx-auto">
      <WiringRewiring />
    </main>
  );
}
