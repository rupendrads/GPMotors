import BookAppointment from "@/components/Appointments/BookAppointment";

export default async function BookAppointmentPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const resolvedParams = await searchParams;
  const cBookingId = resolvedParams.id ? parseInt(resolvedParams.id) : undefined;

  return (
    <main>
      <BookAppointment cBookingId={ cBookingId } />
    </main>
  );
}
