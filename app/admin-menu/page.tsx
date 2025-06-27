import AdminMenuDetail from "@/components/AdminMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Menu | Car Repair",
  description: "Admin menu page",
  keywords: "admin, car, repair",
  metadataBase: new URL("https://localhost:3000/admin-menu"),
};

export default function AdminMenuPage() {
  return (
    <main className="w-full flex justify-center">
      <AdminMenuDetail />
    </main>
  );
}
