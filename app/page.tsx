import { Metadata } from "next";
//import ContactUsPage from "./contactus/page";
//import Footer from "./components/footer";
//import FloatContact from "./components/FloatContact";
import Homepage from "./Homepage/Homepage";
//import FloatingWhatsApp from "./components/Whatsapp";
import "keen-slider/keen-slider.min.css";

export const metadata: Metadata = {
  title: "GP Motors Teddington | Expert Car Repair & MOT Services",
  description: "Professional car repair, MOT testing, and automotive services in Teddington. Expert mechanics, competitive prices, quality guaranteed. Book your appointment today!",
  keywords: "car repair Teddington, MOT test, automotive service, car mechanic, brake repair, engine service, transmission repair, GP Motors",
  metadataBase: new URL("https://gpmotorstedd.co.uk"),
  openGraph: {
    title: "GP Motors Teddington | Expert Car Repair & MOT Services",
    description: "Professional car repair, MOT testing, and automotive services in Teddington. Expert mechanics, competitive prices, quality guaranteed.",
    url: "https://gpmotorstedd.co.uk",
    siteName: "GP Motors Teddington",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "GP Motors Teddington | Expert Car Repair & MOT Services",
    description: "Professional car repair, MOT testing, and automotive services in Teddington. Expert mechanics, competitive prices, quality guaranteed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function Home() {
  return (
    <div
    // style={{
    //   backgroundImage: `url(${home.src})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   minHeight: "100vh",
    // }}
    >
      <Homepage />
      {/* <EmailSender/> */}
      {/* <Footer /> */}
    </div>
  );
}
