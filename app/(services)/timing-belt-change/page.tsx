
import TimingBeltChangeService from "@/components/Services/TimingBeltChange/TimingBeltChangeService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Timing Belt Change Service | Car Repair",
  description: "Timing Belt Change Service for your car",
  keywords: "car, repair, car timing belt change service",
  metadataBase: new URL("https://localhost:3000/timing-belt-change"),
};

function TimingBeltChangeServicePage() {
  return (
    <main className="mx-auto">
      <TimingBeltChangeService />
    </main>
  );
}

export default TimingBeltChangeServicePage;
