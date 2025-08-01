import { Metadata } from "next";
import ClientDetailForm from "@/components/ClientDetailForm";

export const metadata: Metadata = {
  title: "Client Detail | Car Repair",
  description: "Fill Information of Client and Car",
  keywords: "car, repair, Client detail",
  metadataBase: new URL("https://localhost:3000/client-detail"),
};

export default function ClientDetailPage() {

  return (
    <main>
      <ClientDetailForm/>
    </main>
  );
}
