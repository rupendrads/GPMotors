
import MOTReminder from "@/components/MOTReminder/MOTReminder";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MOT Reminder | Car Repair",
  description: "MOT reminder for your car service",
  keywords: "car, repair, MOT remind",
  metadataBase: new URL("https://localhost:3000/mot-reminder"),
};

function MOTReminderPage() {
  return (
    <main className="w-full min-h-[calc(100vh-14rem)] mx-auto">
      <MOTReminder />
    </main>
  );
}

export default MOTReminderPage;
