// app/contactus/page.tsx

import { Metadata } from "next";
import banner from "../../public/images/contactusBanner.jpg";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import discord from "../../public/icons/discord.svg";
import insta from "../../public/icons/insta.svg";
import twitter from "../../public/icons/twitter.svg";
export const metadata: Metadata = {
  title: "Contact Us | Car Repair",
  description: "Get in touch with our team",
  keywords: "car, repair, contact us",
  metadataBase: new URL("https://gpmotorstedd.co.uk/contactus"),
};

export default function ContactUsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <div className="relative h-80 bg-black">
        <Image
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-yellow-400 text-sm">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        {/* Map Overlay */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-130px] w-3/4 shadow-lg rounded-lg overflow-hidden z-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.5734314597703!2d-0.35209019999999996!3d51.4292621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b5fde736955%3A0x72410f96077918a6!2sAlpha%20Rd%2C%20Teddington%20TW11%200QG%2C%20UK!5e0!3m2!1sen!2sin!4v1750788136165!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Contact Info & Form Section */}
      <div className="flex flex-col mt-48 md:flex-row bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="bg-[#428DCA] relative text-white md:w-1/2 w-full p-8 flex flex-col justify-between min-h-[580px]">
          <div className="flex flex-col space-y-26">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Contact Information
              </h2>
              <p className="text-base opacity-80 mb-8">
                Say something to start a live chat!
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-icons text-lg">phone</span>
                <span className="text-base">0208 943 4103 / 0208 943 3588</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-icons text-lg">email</span>
                <span className="text-base">gpmotorstedd@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 mb-10">
                <span className="material-icons text-lg">location_on</span>
                <span className="text-base">
                  132 Dartmouth Street teddington Ul.
                </span>
              </div>
            </div>
            <div className="flex gap-4 mt-auto relative z-10">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F44336] hover:bg-gray-100 shadow"
              >
                <Image src={twitter} alt="twitter" className="w-1/2" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#F44336] hover:bg-gray-100 shadow"
              >
                <Image src={insta} alt="Instagram" className="w-1/2" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F44336] hover:bg-gray-100 shadow"
              >
                <Image src={discord} alt="Discord" className="w-1/2" />
              </a>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <ContactForm />
      </div>
    </main>
  );
}
