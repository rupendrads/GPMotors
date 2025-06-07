import Navbar from "./components/navbar";
import FloatingWhatsApp from "./components/Whatsapp";
import EmailSender from "./components/Email"; 
import home from "../public/images/home.jpg";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${home.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensures it covers the full viewport height
      }}
    >
      <Navbar />
      {/* <FloatingWhatsApp/> */}
      {/* <EmailSender/> */}
    </div>
  );
}
