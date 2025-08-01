import BookingConfigurationForm from "@/components/BookingSlotConfigurationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Configuration | Car Repair",
  description: "Fill Information of Slot Booking",
  keywords: "car, repair, Slot Booking",
  metadataBase: new URL("https://localhost:3000/booking-config"),
};

export default function BookingConfigurationPage() {
  return (
    <main className="w-full flex justify-center">
      <BookingConfigurationForm />
    </main>
  );
}
