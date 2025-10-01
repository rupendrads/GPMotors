import Gallery from "@/components/Gallery/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Car Repair Services",
  description: "Explore our gallery showcasing automotive service expertise and car repair work",
  keywords: "car, repair, gallery, automotive, services, mot checklist",
  metadataBase: new URL("https://localhost:3000/gallery"),
};

export default function GalleryPage() {
  return (
    <main className="mx-auto py-8">
      <Gallery />
    </main>
  );
}