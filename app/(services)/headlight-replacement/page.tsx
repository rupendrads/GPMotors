
import { Metadata } from "next";
import HeadlightReplacement from '@/components/Services/HeadlightReplacement/HeadlightReplacement';

export const metadata: Metadata = {
  title: "Headlight Replacement | Car Repair",
  description: "Headlight Replacement for your car",
  keywords: "car, repair, headlight replacement",
  metadataBase: new URL("https://gpmotorstedd.co.uk/headlight-replacement"),
};

export default function HeadlightReplacementPage() {
  return (
    <main className="mx-auto">
      <HeadlightReplacement />
    </main>
  );
}
