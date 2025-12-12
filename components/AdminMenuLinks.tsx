"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";

function AdminMenuLinks({ closeSidebar }: { closeSidebar?: () => void }) {
  const [reminderActiveSubMenu, setReminderActiveSubMenu] = useState<
    number | null
  >(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const reminderMenuItems = [
    {
      title: "Reminder",
      subMenus: [
        { title: "Appointment", path: "/admin/reminder" },
        { title: "MOT", path: "/admin/mot-reminder" },
      ],
    },
  ];

  const handleMouseEnter = (index: number) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setReminderActiveSubMenu(index);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setReminderActiveSubMenu(null);
    }, 250);
  };

  return (
    <>
      <div className="flex justify-around items-center mb-2 p-2 border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo1.svg" alt="Logo" width={100} height={45} />
          </Link>
        </div>
        <div className=" flex justify-center items-center gap-2">
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

          <ul className="px-3 py-2 transition relative cursor-pointer">
            {reminderMenuItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="hover:text-[#E33C30]">{item.title}</span>

                {/* SUBMENU */}
                <ul
                  className={`
                      absolute left-0 top-full mt-2 w-48 bg-white shadow-xl rounded-md py-2 z-50 
                      border border-gray-100 
                      transition-all duration-200 ease-out
                      ${
                        reminderActiveSubMenu === index
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }
                    `}
                >
                  {item.subMenus.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.path}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#E33C30] transition"
                        onClick={closeSidebar ?? closeSidebar}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex align-center">
          <Link
            href="/"
            className="px-3 py-2 border text-white rounded-lg bg-red-500 ml-4"
          >
            <span className="mr-1">🔒</span> Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminMenuLinks;
