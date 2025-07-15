import ContactUsPage from "./contactus/page";
import Footer from "./components/footer";
import FloatContact from "./components/FloatContact";
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
      <ContactUsPage />
      <FloatContact/>
      {/* <FloatingWhatsApp/> */}
      {/* <EmailSender/> */}
      <Footer />
    </div>
  );
}
