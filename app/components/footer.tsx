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
    <footer className="bg-white mt-10">
      {!isAdmin && (
        <div className="max-w-7xl mx-auto py-4 pt-4 px-4 border-t border-gray-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-4 text-gray-800">
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
      )}

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


