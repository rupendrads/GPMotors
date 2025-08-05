
import BookingListTable from "@/components/BookingListTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment List | Car Repair",
  description: "Display Appointment Booking List",
  keywords: "car, repair, Booking list",
  metadataBase: new URL("https://localhost:3000/book-appointment-list"),
};

export default function BookAppointmentListPage() {
  return (
    <main className="w-full flex justify-center">
      <BookingListTable />
    </main>
  );
}
