"use client";
import Link from "next/link";

function AdminMenuDetail() {
  return (
    <nav className="relative z-50 w-full">
      <div className="w-full bg-[#d8d8d8] flex items-center justify-between h-16 px-4 lg:px-10 poppins-font">
        <div className="hidden lg:flex flex-1 justify-start items-center space-x-8">
          <Link href="/client-detail" className=" hover:text-[#E33C30] px-3 py-2 transition">
            Client Detail
          </Link>
          <Link href="/booking-config" className=" hover:text-[#E33C30] px-3 py-2 transition">
            Booking Configuration
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default AdminMenuDetail;