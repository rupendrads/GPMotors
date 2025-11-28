"use client";
import { IBookingDB, IServiceType, IServiceTypeDB } from "./Appointments/types";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

const ITEMS_PER_PAGE = 10;

function BookingListTable() {
  const [bookings, setBookings] = useState<IBookingDB[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<IBookingDB[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [serviceTypes, setServiceTypes] = useState<IServiceType[]>([]);
  const [showAll, setShowAll] = useState(false);

  // Filter states
  const [filterName, setFilterName] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterRegNo, setFilterRegNo] = useState("");

  const router = useRouter();

  const onEdit = (booking: IBookingDB) => {
    console.log("Editing Booking ID:", booking.ID);
    router.push(`/book-appointment?id=${booking.ID}`);
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("/api/booking");
        const bookingData = await response.json();
        console.log(bookingData);
        setBookings(bookingData);

        //Filter: show only today and future bookings
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);

        const upcomingBookings = bookingData.filter((b: IBookingDB) => {
          if (!b.BookingDate) return false;
          const bookingDate = new Date(b.BookingDate);
          bookingDate.setHours(0, 0, 0, 0);
          return bookingDate >= todayDate;
        });

        //Sort by date ascending
        const sortedBookings = upcomingBookings.sort(
          (a: IBookingDB, b: IBookingDB) =>
            new Date(a.BookingDate || "").getTime() -
            new Date(b.BookingDate || "").getTime()
        );

        setFilteredBookings(sortedBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchServiceTypes = async () => {
      console.log("fetch - request service types");
      try {
        const response = await fetch("/api/servicetypes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        console.log("fetch - response service types", result);
        const data: IServiceType[] = [];
        result.map((serviceType: IServiceTypeDB) => {
          data.push({
            id: serviceType.ID,
            type: serviceType.Type,
            logic: serviceType.Logic,
          });
        });
        console.log("fetch - service types data", data);
        setServiceTypes(data);
        fetchBookings();
      } catch (error) {
        console.log("Error fetching service types:", error);
      }
    };

    fetchServiceTypes();
  }, []);

  useEffect(() => {
    if (showAll) {
      // Show ALL bookings (full list)
      const sorted = bookings
        .slice()
        .sort(
          (a, b) =>
            new Date(a.BookingDate || "").getTime() -
            new Date(b.BookingDate || "").getTime()
        );

      setFilteredBookings(sorted);
      setCurrentPage(1);
      return;
    }

    // Default mode: today + future
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    const upcoming = bookings.filter((b) => {
      if (!b.BookingDate) return false;
      const d = new Date(b.BookingDate);
      d.setHours(0, 0, 0, 0);
      return d >= todayDate;
    });

    const sorted = upcoming.sort(
      (a, b) =>
        new Date(a.BookingDate || "").getTime() -
        new Date(b.BookingDate || "").getTime()
    );

    setFilteredBookings(sorted);
    setCurrentPage(1);
  }, [showAll, bookings]);

  const handleFilter = () => {
    //SHOW ALL → full dataset always, search filters still allowed
    if (showAll) {
      let filtered = bookings;
      // Search inside full data (optional filters)
      if (filterName.trim() !== "") {
        const q = filterName.toLowerCase();

        filtered = filtered.filter((b) => {
          const first = b.FirstName?.toLowerCase() || "";
          const last = b.LastName?.toLowerCase() || "";
          const full = `${first} ${last}`.trim();

          return first.includes(q) || last.includes(q) || full.includes(q);
        });
      }

      if (filterRegNo.trim() !== "") {
        filtered = filtered.filter((b) =>
          b.RegistrationNo?.toLowerCase().includes(filterRegNo.toLowerCase())
        );
      }

      if (filterDate.trim() !== "") {
        const selectedDate = new Date(filterDate);
        selectedDate.setHours(0, 0, 0, 0);

        filtered = filtered.filter((b) => {
          if (!b.BookingDate) return false;
          const date = new Date(b.BookingDate);
          date.setHours(0, 0, 0, 0);
          return date.getTime() === selectedDate.getTime();
        });
      }

      // Sort by date (ascending)
      const sorted = filtered.sort(
        (a: IBookingDB, b: IBookingDB) =>
          new Date(a.BookingDate || "").getTime() -
          new Date(b.BookingDate || "").getTime()
      );

      setFilteredBookings(sorted);
      setCurrentPage(1);
      return;
    }

    //SHOW ALL = FALSE → today + future is default behavior

    let filtered = bookings;

    // Apply filters only when user enters something
    // Apply Name filter
    if (filterName.trim() !== "") {
      const q = filterName.toLowerCase();

      filtered = filtered.filter((b) => {
        const first = b.FirstName?.toLowerCase() || "";
        const last = b.LastName?.toLowerCase() || "";
        const full = `${first} ${last}`.trim();

        return first.includes(q) || last.includes(q) || full.includes(q);
      });
    }

    // Apply Reg No filter
    if (filterRegNo.trim() !== "") {
      filtered = filtered.filter((b) =>
        b.RegistrationNo?.toLowerCase().includes(filterRegNo.toLowerCase())
      );
    }
    // Apply Date filter
    if (filterDate.trim() !== "") {
      const selectedDate = new Date(filterDate);
      selectedDate.setHours(0, 0, 0, 0);

      filtered = filtered.filter((b) => {
        if (!b.BookingDate) return false;
        const date = new Date(b.BookingDate);
        date.setHours(0, 0, 0, 0);
        return date.getTime() === selectedDate.getTime();
      });
    }

    // Default behaviour: NO filters → show only today + future
    if (!filterName && !filterRegNo && !filterDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      filtered = bookings.filter((b) => {
        if (!b.BookingDate) return false;
        const bookingDate = new Date(b.BookingDate);
        bookingDate.setHours(0, 0, 0, 0);
        return bookingDate >= today;
      });
    }

    // Sort by date (ascending)
    const sortedBookings = filtered.sort(
      (a: IBookingDB, b: IBookingDB) =>
        new Date(a.BookingDate || "").getTime() -
        new Date(b.BookingDate || "").getTime()
    );

    setFilteredBookings(sortedBookings);
    setCurrentPage(1);
  };

  // const viewReports = () => {
  //   // Build query string only with present filters
  //   const params = new URLSearchParams();
  //   if (filterDate.trim() !== "") params.set("date", filterDate);
  //   if (filterRegNo.trim() !== "") params.set("reg", filterRegNo.trim());
  //   const qs = params.toString();
  //   router.push(`/reports${qs ? `?${qs}` : ""}`);
  // };

  const totalPages = Math.ceil(filteredBookings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredBookings.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToFirst = () => setCurrentPage(1);
  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLast = () => setCurrentPage(totalPages);

  const getServiceType = (id: number) => {
    console.log("getServiceType id: ", id);
    const serviceType = serviceTypes.find((st) => st.id === id);
    console.log("getServiceType serviceType: ", serviceType);
    return serviceType ? serviceType.type : "Not found";
  };

  return (
    <div className="p-6 mb-4 max-w-full">
      <h1 className={tableHeadingStyle}>Appointment List</h1>
      <div className="flex items-center justify-start">
        <div className="flex items-center justify-center gap-2 mr-4 border mb-0 border-gray-300 rounded-md px-3 py-3 bg-gray-50">
          <input
            type="checkbox"
            className="h-5 w-5 p-1 bg-gray-400 hover:bg-green-300"
            checked={showAll}   
            onChange={(e) => {
              setShowAll(e.target.checked);
            }}
          />  
          <label className="text-green-600 hover:text-green-900  text-lg font-semibold">Show All</label>
        </div>

        <div className="flex w-[575px] gap-3 items-center justify-start mb-3 border border-gray-300 rounded-md py-2 px-3 bg-gray-50">
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
              className="border border-gray-400 rounded px-3 py-2 text-sm w-40"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Date</label>
            <input
              type="date"
              placeholder="Enter date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="text-gray-400 border border-gray-400 rounded px-3 py-2 text-sm w-40"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Reg. No.</label>
            <input
              type="text"
              placeholder="Enter reg no"
              value={filterRegNo}
              onChange={(e) => setFilterRegNo(e.target.value)}
              className="border border-gray-400 rounded px-3 py-2 text-sm w-30"
            />
          </div>
          <div>
            <button
              onClick={handleFilter}
              className=" bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 mt-6 rounded-md transition"
            >
              Search
            </button>
          </div>
        </div>
        {/* <div>
          <button
            onClick={viewReports}
            className=" bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-2 mt-10 rounded-md transition"
            title="View Reports"
          >
            View Reports
          </button>
        </div> */}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className={tableContainer}>
            <table className={tableStyle}>
              <thead className={theadStyle}>
                <tr>
                  <th className={thStyle}>Id</th>
                  <th className={thStyle}>Date</th>
                  <th className={thStyle}>Time</th>
                  <th className={thStyle}>Title</th>
                  <th className={thStyle}>Name</th>
                  <th className={thStyle}>Email</th>
                  <th className={thStyle}>Postcode</th>
                  <th className={thStyle}>Phone No</th>
                  <th className={thStyle}>Reg. No</th>
                  <th className={thStyle}>Service Type</th>
                  <th className={thStyle}>Comments</th>
                  <th className={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((booking: IBookingDB, index: number) => (
                  <tr
                    key={booking.ID}
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-50 transition duration-150`}
                  >
                    <td className={tdStyle}>{booking.ID}</td>
                    <td className={tdStyle}>
                      {booking.BookingDate
                        ? new Date(booking.BookingDate).toLocaleDateString()
                        : ""}
                    </td>
                    <td className={tdStyle}>{booking.BookingTime}</td>
                    <td className={tdStyle}>{booking.Title}</td>
                    <td className={tdStyle}>
                      {`${booking.FirstName || ""} ${
                        booking.LastName || ""
                      }`.trim()}
                    </td>
                    <td className={tdStyle}>{booking.Email}</td>
                    <td className={tdStyle}>{booking.PostCode}</td>
                    <td className={tdStyle}>{booking.PhoneNo}</td>
                    <td className={tdStyle}>{booking.RegistrationNo}</td>
                    <td className={tdStyle}>
                      {getServiceType(Number(booking.ServiceType))}
                    </td>
                    <td className={tdStyle}>
                      {(booking.Comments || "").length > 15
                        ? `${booking.Comments.slice(0, 15)}...`
                        : booking.Comments}
                    </td>
                    <td className="flex items-center justify-center pt-3">
                      <button onClick={() => onEdit(booking)} title="Edit">
                        <PencilIcon className="h-5 w-5 text-blue-500 p-0.5 border border-gray-400 rounded-sm hover:bg-gray-200 transition duration-350 cursor-pointer" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-center items-center gap-3 flex-wrap">
            <button
              onClick={goToFirst}
              disabled={currentPage === 1}
              className={pagingBtnStyle}
            >
              <ChevronDoubleLeftIcon className="h-4 w-4" />
              First
            </button>

            <button
              onClick={goToPrev}
              disabled={currentPage === 1}
              className={pagingBtnStyle}
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>

            <span className={pagingSpanStyle}>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className={pagingBtnStyle}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>

            <button
              onClick={goToLast}
              disabled={currentPage === totalPages}
              className={pagingBtnStyle}
            >
              Last
              <ChevronDoubleRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingListTable;

// const formStyle =
//   "w-full mx-auto flex flex-col gap-y-4 px-4 py-2 mb-2 shadow rounded  border border-gray-300 rounded";
// const headingStyle =
//   "text-[18px] text-zinc-800 font-[600] leading-[100%] traking-[0%] mb-2 mt-4";
const tableContainer =
  "max-w-full mb-2 overflow-auto h-[500px] bg-white shadow-md rounded-sm border border-gray-200";
const tableHeadingStyle =
  "text-2xl font-bold mb-4 mt-4 text-center text-gray-700 leading-[100%] traking-[0%] ";
const tableStyle =
  "table-auto min-w-[1000px] text-sm text-left text-gray-700 whitespace-nowrap";
const theadStyle = "text-sm text-white pascalcase bg-black sticky top-0 z-10";
const thStyle = "px-2 py-3";
const tdStyle = "px-2 py-3";
const pagingBtnStyle =
  "flex items-center gap-1 px-2 py-2 text-sm font-medium border rounded-md bg-gray-50 text-gray-800 border-gray-400 hover:bg-blue-100 disabled:opacity-50 transition duration-350";
const pagingSpanStyle =
  "text-sm font-semibold gap-1 px-2 py-2 bg-gray-100 text-gray-800  border rounded-md border-gray-400";
// const inputGroupStyle = "flex flex-col gap-2";
// const inputLabelBoxStyle = "flex items-center gap-2";
// const inputStyle =
//   "border shadow rounded py-2 px-3 text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800";
// const errorInputStyle =
//   "border shadow rounded py-2 px-3 text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800 border-red-500 focus:border-red-500 focus:outline-red-500";
// const buttonStyle =
//   "bg-red-500 hover:bg-red-700 text-white text-[18px] font-[600] py-2 px-4 rounded-[22px] mt-4";
// const errorStyle =
//   "text-[16px] font-[400] leading-[100%] traking-[0%] text-red-500";
