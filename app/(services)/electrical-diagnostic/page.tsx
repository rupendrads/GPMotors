import ElectricalDiagnostic from "@/components/Services/ElectricalDiagnostic/ElectricalDiagnostic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Diagnostic | Car Repair",
  description: "Electrical Diagnostic for your car",
  keywords: "car, repair, electrical diagnostic",
  metadataBase: new URL("https://localhost:3000/electrical-diagnostic"),
};

export default function ElectricalDiagnosticPage() {
  return (
    <main className="mx-auto">
      <ElectricalDiagnostic />
    </main>
  );
}
