"use client";
import Link from "next/link";
import { useState } from "react";

function AdminMenuLinks({ closeSidebar }: { closeSidebar?: () => void }) {
  const [reminderActiveSubMenu, setReminderActiveSubMenu] = useState(null);

  const reminderMenuItems = [
    {
      title: "Reminder",
      subMenus: [
        { title: "Appointment", path: "/admin/reminder" },
        { title: "MOT", path: "/admin/mot-reminder" },
      ],
    },
  ];

  const handleMouseEnter = (index) => {
    setReminderActiveSubMenu(index);
  };

  const handleMouseLeave = () => {
    setReminderActiveSubMenu(null);
  };

  return (
    <>
      <div className="border border-red-200 flex">
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
      </div>
      <div>
        <ul className=" hover:text-[#E33C30] px-3 py-2 transition relative">
          {reminderMenuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">{item.title}</a>
              {item.subMenus && reminderActiveSubMenu === index && (
                <ul className="submenu">
                  {item.subMenus.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.path}
                        className=" hover:text-[#E33C30] px-3 py-2 transition"
                        onClick={closeSidebar ?? closeSidebar}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
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
    </>
  );
}

export default AdminMenuLinks;
