
import ClientDetailForm from "@/components/ClientDetailForm";

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


