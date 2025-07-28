"use client";
import { Poppins } from "next/font/google";
import "material-icons/iconfont/material-icons.css";
import "../public/globals.css";
// import "./globals.css";
import Navbar from "./components/navbar";
import AdminMenuDetail from "@/components/AdminMenu";
import Footer from "./components/footer";
import { usePathname } from "next/navigation";
import FloatingWhatsApp from "./components/Whatsapp";
import FloatContact from "./components/FloatContact";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body className={`${poppins.className}`} suppressHydrationWarning={true}>
        <Navbar />
        <AdminMenuDetail/>
        <FloatingWhatsApp />
        <FloatContact />
        <main className="max-w-full mx-auto">{children}</main>
        {!isHomePage && <Footer />}
      </body>
    </html>
  );
}
