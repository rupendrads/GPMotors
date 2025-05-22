import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Car Repair",
  description: "Get in touch with our team",
  keywords: "car, repair, contact us",
  metadataBase: new URL("https://localhost:3000/contactus"),
};

export default function ContactUsPage() {
  return (
    <main>
      <h1>Contact Us page</h1>
    </main>
  );
}
