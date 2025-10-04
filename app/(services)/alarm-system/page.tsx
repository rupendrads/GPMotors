import AlarmSystem from "@/components/Services/AlarmSystem/AlarmSystem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alarm System | Car Repair",
  description: "Alarm System for your car",
  keywords: "car, repair, alarm system",
  metadataBase: new URL("https://localhost:3000/alarm-system"),
};

export default function AlarmSystemPage() {
  return (
    <main className="mx-auto">
      <AlarmSystem />
    </main>
  );
}
