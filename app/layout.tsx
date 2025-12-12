"use client";
import { Poppins } from "next/font/google";
import "material-icons/iconfont/material-icons.css";
import "../public/globals.css";
// import "./globals.css";
import Navbar from "./components/navbar";
import AdminMenuDetail from "@/components/AdminMenu";
import Footer from "./components/footer";
import FloatingWhatsApp from "./components/Whatsapp";
import FloatContact from "./components/FloatContact";
import ReviewWidget from "./components/FloatReview";
import { usePathname } from "next/navigation";

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
  const isAdminPage =
    pathname.startsWith("/book-appointment-edit") ||
    pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        
        {/* Navbar Switch */}
        {isAdminPage ? <AdminMenuDetail /> : <Navbar />}

        <FloatingWhatsApp />
        <ReviewWidget />

        {/* Hide floating contact on admin pages */}
        {!isAdminPage && <FloatContact />}

        <main className="max-w-full mx-auto">{children}</main>

        {/* Footer visible on public pages only */}
        {!isAdminPage && !isHomePage && <Footer />}
      </body>
    </html>
  );
}
