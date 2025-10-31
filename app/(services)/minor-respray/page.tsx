import MinorRespray from "@/components/Services/MinorRespray/MinorRespray";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minor Respray | Car Repair",
  description: "Minor Respray for your car",
  keywords: "car, repair, minor respray",
  metadataBase: new URL("https://localhost:3000/minor-respray"),
};

export default function MinorResprayPage() {
  return (
    <main className="mx-auto">
      <MinorRespray />
    </main>
  );
}
