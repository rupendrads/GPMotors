import BookingListTable from "@/components/BookingListTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment List | Car Repair",
  description: "Display Appointment Booking List",
  keywords: "car, repair, Booking list",
  metadataBase: new URL("https://gpmotorstedd.co.uk/book-appointment-list"),
};

export default function BookAppointmentListPage() {
  return (
    <main className="w-full min-h-[calc(100vh-14rem)] flex justify-center relative z-60">
      <BookingListTable />
    </main>
  );
}
