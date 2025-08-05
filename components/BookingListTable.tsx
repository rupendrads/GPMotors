'use client'
import { IBookingDB } from './Appointments/types';
import React, { useEffect, useState } from 'react'; 
import { useRouter } from "next/navigation";
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  PencilIcon,
} from '@heroicons/react/24/solid';

const ITEMS_PER_PAGE = 10;

function BookingListTable() {

  const [bookings, setBookings] = useState<IBookingDB[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const onEdit = (booking: IBookingDB) => {
    console.log("Editing Booking ID:", booking.ID);
    router.push(`/book-appointment/bookingform?id=${booking.ID}`);
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/booking');
        const bookingData = await response.json();
        console.error(bookingData);
        setBookings(bookingData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const totalPages = Math.ceil(bookings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = bookings.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToFirst = () => setCurrentPage(1);
  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLast = () => setCurrentPage(totalPages);

  return (
    <div className="p-6 mb-4 max-w-full">
      <h1 className={tableHeadingStyle}>Booking List</h1>
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
                    <th className={thStyle}>First Name</th>
                    <th className={thStyle}>Last Name</th>
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
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      } hover:bg-blue-50 transition duration-150`}
                    >
                      <td className={tdStyle}>{booking.ID}</td>
                      <td className={tdStyle}>{booking.BookingDate ? new Date(booking.BookingDate).toLocaleDateString() : ''}</td>
                      <td className={tdStyle}>{booking.BookingTime}</td>
                      <td className={tdStyle}>{booking.Title}</td>
                      <td className={tdStyle}>{booking.FirstName}</td>
                      <td className={tdStyle}>{booking.LastName}</td>
                      <td className={tdStyle}>{booking.Email}</td>
                      <td className={tdStyle}>{booking.PostCode}</td>
                      <td className={tdStyle}>{booking.PhoneNo}</td>
                      <td className={tdStyle}>{booking.RegistrationNo}</td>
                      <td className={tdStyle}>{booking.ServiceType}</td>
                      <td className={tdStyle}>{(booking.Comments || "").length > 15 ? `${booking.Comments.slice(0, 15)}...`: booking.Comments}</td>
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
  )
}

export default BookingListTable;


// const formStyle =
//   "w-full mx-auto flex flex-col gap-y-4 px-4 py-2 mb-2 shadow rounded  border border-gray-300 rounded";
// const headingStyle =
//   "text-[18px] text-zinc-800 font-[600] leading-[100%] traking-[0%] mb-2 mt-4";
const tableContainer = "max-w-full mb-2 overflow-auto h-[500px] bg-white shadow-md rounded-sm border border-gray-200";
const tableHeadingStyle = "text-2xl font-bold mb-4 mt-4 text-center text-gray-700 leading-[100%] traking-[0%] ";
const tableStyle  = "table-auto min-w-[1000px] text-sm text-left text-gray-700 whitespace-nowrap";
const theadStyle = "text-sm text-white uppercase bg-black sticky top-0 z-10";
const thStyle = "px-2 py-3"
const tdStyle = "px-2 py-3"
const pagingBtnStyle = "flex items-center gap-1 px-2 py-2 text-sm font-medium border rounded-md bg-gray-50 text-gray-800 border-gray-400 hover:bg-blue-100 disabled:opacity-50 transition duration-350";
const pagingSpanStyle = "text-sm font-semibold gap-1 px-2 py-2 bg-gray-100 text-gray-800  border rounded-md border-gray-400";
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
