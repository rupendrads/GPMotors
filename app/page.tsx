import ContactUsPage from "./contactus/page";
import Footer from "./components/footer";
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
      {/* <FloatingWhatsApp/> */}
      {/* <EmailSender/> */}
      <Footer />
    </div>
  );
}
