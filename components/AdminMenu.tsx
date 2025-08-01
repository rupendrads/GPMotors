"use client";
import Link from "next/link";

function AdminMenuDetail() {
  return (
    <nav className="relative z-50 w-full">
      <div className="w-full bg-[#f1f1f5] flex items-center justify-between h-16 px-4 lg:px-10 poppins-font">
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
          <Link
            href="/client-detail"
            className=" hover:text-[#E33C30] px-3 py-2 transition"
          >
            Client Detail
          </Link>
          <Link
            href="/booking-config"
            className=" hover:text-[#E33C30] px-3 py-2 transition"
          >
            Booking Configuration
          </Link>
          <Link
            href="/book-appointment-list"
            className=" hover:text-[#E33C30] px-3 py-2 transition"
          >
            Booking List
          </Link>
          <Link
            href="/client-detail-list"
            className=" hover:text-[#E33C30] px-3 py-2 transition"
          >
            Client Detail List
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default AdminMenuDetail;
