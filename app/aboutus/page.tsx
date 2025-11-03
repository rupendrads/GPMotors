import { Metadata } from "next";
import Aboutus from "./components/Aboutus"
import Whychoose from "./components/Features"
import JourneyExcellence from "./components/Journey"
import CarService from "./components/Service"
import Banner from "./components/Banner"
import CarBanner from "./components/CarBanner"
export const metadata: Metadata = {
  title: "About Us | Car Repair",
  description: "Know who we are.",
  keywords: "car, repair, about us",
  metadataBase: new URL("https://gpmotorstedd.co.uk/aboutus"),
};

export default function AboutUsPage() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Whychoose />
      <JourneyExcellence />
      <CarService />
      <CarBanner />
    </main>
  );
}
