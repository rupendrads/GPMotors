import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Car Repair",
  description: "Know who we are.",
  keywords: "car, repair, about us",
  metadataBase: new URL("https://localhost:3000/aboutus"),
};

export default function AboutUsPage() {
  return (
    <main>
      <h1>About Us page</h1>
    </main>
  );
}
