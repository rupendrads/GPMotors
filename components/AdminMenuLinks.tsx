"use client";
import Link from "next/link";

function AdminMenuLinks({ closeSidebar }: { closeSidebar?: () => void }) {
  return (
    <div>
      <Link
        href="/admin/booking-config"
        className=" hover:text-[#E33C30] px-3 py-2 transition"
        onClick={closeSidebar ?? closeSidebar}
      >
        Booking Configuration
      </Link>
      <Link
        href="/admin/book-appointment-list"
        className=" hover:text-[#E33C30] px-3 py-2 transition"
        onClick={closeSidebar ?? closeSidebar}
      >
        Booking List
      </Link>
      <Link
        href="/admin/client-detail-list"
        className=" hover:text-[#E33C30] px-3 py-2 transition"
        onClick={closeSidebar ?? closeSidebar}
      >
        Client Detail
      </Link>
      <Link
        href="/admin/reminder"
        className=" hover:text-[#E33C30] px-3 py-2 transition"
        onClick={closeSidebar ?? closeSidebar}
      >
        Appointment Reminder
      </Link>
      <Link
        href="/"
        className="px-3 py-2 border text-white rounded-lg bg-red-500 ml-4"
      >
        <span className="mr-1">🔒</span> Login
      </Link>
    </div>
  );
}

export default AdminMenuLinks;
