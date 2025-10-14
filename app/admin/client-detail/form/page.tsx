
import { Metadata } from "next";
import ClientDetailForm from "@/components/ClientDetailForm";

export const metadata: Metadata = {
  title: "Client Detail Form | Admin Panel | GP Motors",
  description: "Admin form for managing client details and car information",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ClientDetailPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const resolvedParams = await searchParams;
  const clientId = resolvedParams.id ? parseInt(resolvedParams.id) : undefined;

  return (
    <main>
      <ClientDetailForm clientId={clientId} />
    </main>
  );
}


