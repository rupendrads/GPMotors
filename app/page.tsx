import FloatingWhatsApp from "./components/Whatsapp";
import EmailSender from "./components/Email";
import home from "../public/images/home.jpg";
import BookingSlotForm from '../components/BookingSlotConfigurationForm';
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${home.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", 
      }}
    >
      {/* <FloatingWhatsApp/> */}
      {/* <EmailSender/> */}
    </div>
  );
}
