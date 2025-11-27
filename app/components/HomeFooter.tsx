// components/Footer.js
// import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
// import "./styles.css"
import "../../public/styles.css";
import twitter from "../../public/icons/twitter.svg";
import Image from "next/image";
import logo from "../../public/logo.svg";
export default function HomeFooter() {
  return (
    <footer className="bg-[#EEEFF0] border-t mt-16">
      <div className="relative">
        {/* Map Overlay */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-100px] w-3/4 shadow-lg rounded-lg overflow-hidden z-10">
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
      <div className="max-w-7xl mx-auto mt-40 py-4 pt-4 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-4 text-gray-800">
         {/* Product */}
        {/* <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2">
            <li className="footer-link">All Features</li>
            <li className="footer-link">Automate</li>
            <li className="footer-link">Usage Energy</li>
            <li className="footer-link">System Cyber</li>
          </ul>
        </div>
        // Support 
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li className="footer-link">FAQs</li>
            <li className="footer-link">Contact Support</li>
            <li className="footer-link">User manuals</li>
            <li className="footer-link">Forums</li>
          </ul>
        </div>
        // Career 
        <div>
          <h3 className="font-semibold mb-3">Career</h3>
          <ul className="space-y-2">
            <li className="footer-link">Job listing</li>
            <li className="footer-link">Our team</li>
            <li className="footer-link">Hiring Process</li>
          </ul>
        </div> */}
        {/* Contact */}
        <div className="mb-2">
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-1">
            <li className="footer-link whitespace-nowrap">0208 943 4103 / 0208 943 3588</li>
            <li className="footer-link whitespace-nowrap">info@gpmotorstedd.co.uk</li>
          </ul>
        </div>
        {/* Follow us & Address */}
        <div className="lg:ms-10 lg:col-span-3 xl:col-span-3 xxl:col-span-3">
          <h3 className="font-semibold mb-3">Follow us</h3>
          <div className="flex space-x-3 mb-2">
            <a href="#" className="bg-[#3F662B] rounded-full p-2 text-white">
              <Image src={twitter} alt="twitter" className="w-full" />
            </a>
            <a href="#" className="bg-[#3F662B] rounded-full p-2 text-white">
              <Image src={twitter} alt="twitter" className="w-full" />
            </a>
            <a href="#" className="bg-[#3F662B] rounded-full p-2 text-white">
              <Image src={twitter} alt="twitter" className="w-full" />
            </a>
            {/* <a href="#" className="bg-[#3F662B] rounded-full p-2 text-white">f</a> */}
          </div>
          <address className="not-italic foter-link xl:whitespace-nowrap xxl:whitespace-nowrap">
            GP Motors (Teddington) Ltd, 6 Alpha Rd, Teddington, England TW11 0QG, United Kingdom
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t py-2 px-4 flex flex-col lg:flex-row xl:flex-row xxl:flex-row items-center justify-between">
        {/* Logo and company name */}
        <div className="flex items-center space-x-2 mb-2"> 
          <Image src={logo} alt="logo" className="w-50" />
        </div>
        {/* Footer links */}
        <div className="flex space-x-4 xs:ml-3 sm:ml-3 md:ml-3 text-sm text-gray-600">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
          <span>|</span>
          <a href="#">Security</a>
          <span>|</span>
          <a href="#">Data Record</a>
        </div>
        {/* Copyright */}
        <div className="flex flex-col items-start justify-center pt-2 mt-2 xs:mt-1 sm:mt-1 md:mt-1 text-sm text-gray-500">
          <p className="xs:ml-30 sm:ml-30 md:ml-30 lg:ml-0 xl:ml-0 xxl:ml-0 mt-1 xs:mt-1 sm:mt-1 md:mt-1">© Gp motors 2023</p>
          <p className="mt-2">Developed by Technophile consultancy lt (07919453190)</p>
        </div>
      </div>
    </footer>
  );
}
