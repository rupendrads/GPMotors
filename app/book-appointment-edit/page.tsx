import BookAppointmentEdit from "../../components/Appointments/BookAppointmentEdit";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Book Appointment Edit| Car Repair",
  description: "Book appointment Edit for your car service",
  keywords: "car, repair, book appointment edit",
  metadataBase: new URL("https://gpmotorstedd.co.uk/book-appointment-edit"),
};

export default function BookAppointmentEditPage() {
  return (
    <main>
      <Suspense>
        <BookAppointmentEdit />
      </Suspense>
    </main>
  );
}
