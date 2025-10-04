import StereoSystem from "@/components/Services/StereoSystem/StereoSystem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stereo System | Car Repair",
  description: "Stereo System for your car",
  keywords: "car, repair, stereo system",
  metadataBase: new URL("https://localhost:3000/stereo-system"),
};

export default function StereoSystemPage() {
  return (
    <main className="mx-auto">
      <StereoSystem />
    </main>
  );
}
