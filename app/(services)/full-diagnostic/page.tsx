
import FullDiagnostic from "@/components/Services/FullDiagnostic/FullDiagnostic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Diagnostic | Car Repair",
  description: "Full Diagnostic for your car",
  keywords: "car, repair, full diagnostic",
  metadataBase: new URL("https://localhost:3000/full-diagnostic"),
};

export default function FullDiagnosticPage() {
  return (
    <main className="mx-auto">
      <FullDiagnostic />
    </main>
  );
}
