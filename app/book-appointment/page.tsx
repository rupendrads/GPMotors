import BookAppointment from "@/components/Appointments/BookAppointment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Car Repair",
  description: "Book appointment for your car service",
  keywords: "car, repair, book appointment",
  metadataBase: new URL("https://localhost:3000/book-appointment"),
};

export default function BookAppointmentPage() {
  return (
    <main>
      <BookAppointment />
    </main>
  );
}
