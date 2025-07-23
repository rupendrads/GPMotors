import ContactUsPage from "./contactus/page";
import Footer from "./components/footer";
import FloatContact from "./components/FloatContact";
import Homepage from "./Homepage/Homepage";
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
      {/* <ContactUsPage />
      <FloatContact/> */}
      <Homepage/>
      {/* <FloatingWhatsApp/> */}
      {/* <EmailSender/> */}
      <Footer />
    </div>
  );
}
