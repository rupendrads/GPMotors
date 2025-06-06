"use client";

import { useEffect } from "react";
import Navbar from "./components/navbar";
import FloatingWhatsApp from "./components/Whatsapp";
import EmailSender from "./components/Email";
import { initEmailJS } from "./lib/emailService";
import home from "../public/images/home.jpg";

export default function Home() {
  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${home.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      {/* <FloatingWhatsApp /> */}
      <EmailSender />
    </div>
  );
}
