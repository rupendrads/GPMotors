import ClientDetailListTable from "@/components/ClientDetailListTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Detail List | Car Repair",
  description: "Display Client Details List",
  keywords: "car, repair, client list",
  metadataBase: new URL("https://gpmotorstedd.co.uk/client-detail-list"),
};

export default function ClientDetailListPage() {
  return (
    <main className="w-full min-h-[calc(100vh-14rem)] flex justify-center relative">
      <ClientDetailListTable />
    </main>
  );
}
