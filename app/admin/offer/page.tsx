import OfferManagementForm from "@/components/OfferManagementForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offer Management | GP Motors Admin",
  description: "Manage the welcome offer modal content",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OfferManagementPage() {
  return (
    <main className="w-full min-h-[calc(100vh-14rem)] flex justify-center py-8 bg-gray-100">
      <OfferManagementForm />
    </main>
  );
}
