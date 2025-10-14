// components/Footer.js
// import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
// import "./styles.css"
import "../../public/styles.css";
import twitter from "../../public/icons/twitter.svg";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <footer className="bg-white mt-16">
      {!isAdmin && (
        <div className="border-t max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-5 gap-2 text-gray-800">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              <li className="footer-link">All Features</li>
              <li className="footer-link">Automate</li>
              <li className="footer-link">Usage Energy</li>
              <li className="footer-link">System Cyber</li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li className="footer-link">FAQs</li>
              <li className="footer-link">Contact Support</li>
              <li className="footer-link">User manuals</li>
              <li className="footer-link">Forums</li>
            </ul>
          </div>
          {/* Career */}
          <div>
            <h3 className="font-semibold mb-3">Career</h3>
            <ul className="space-y-2">
              <li className="footer-link">Job listing</li>
              <li className="footer-link">Our team</li>
              <li className="footer-link">Hiring Process</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="footer-link">0208 943 4103 / 0208 943 3588</li>
              <li className="footer-link">gpmotorstedd@gmail.com</li>
            </ul>
          </div>
          {/* Follow us & Address */}
          <div className="md:ms-4">
            <h3 className="font-semibold mb-3">Follow us</h3>
            <div className="flex space-x-3 mb-4">
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
            <address className="not-italic foter-link">
              GP Motors (Teddington) Ltd, 6 Alpha Rd, Teddington, England TW11
              0QG, United Kingdom
            </address>
          </div>
        </div>
      )}

      <div className="border-t py-6 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Logo and company name */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image src={logo} alt="logo" className="w-50" />
        </div>
        {/* Footer links */}
        <div className="flex space-x-6 text-sm text-gray-600">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
          <span>|</span>
          <a href="#">Security</a>
          <span>|</span>
          <a href="#">Data Record</a>
        </div>
        {/* Copyright */}
        <div className="text-sm text-gray-500 mt-4 md:mt-0">
          © Gp motors 2023
        </div>
      </div>
    </footer>
  );
}
