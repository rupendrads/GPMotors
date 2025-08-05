"use client";
import Link from "next/link";

function AdminMenuLinks({ closeSidebar }: { closeSidebar?: () => void }) {
  return (
    <>
      <Link
        href="/admin/client-detail"
        className=" hover:text-[#E33C30] px-3 py-2 transition"
        onClick={closeSidebar ?? closeSidebar}
      >
        Client Detail
      </Link>
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
        Client Detail List
      </Link>
    </>
  );
}

export default AdminMenuLinks;
