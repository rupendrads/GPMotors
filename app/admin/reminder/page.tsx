import Reminder from "@/components/Reminder/Reminder";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appointment Reminder | Car Repair",
  description: "Appointment reminder for your car service",
  keywords: "car, repair, appointment remind",
  metadataBase: new URL("https://localhost:3000/reminder"),
};

function ReminderPage() {
  return (
    <main className="w-full min-h-screen mx-auto">
      <Reminder />
    </main>
  );
}

export default ReminderPage;
