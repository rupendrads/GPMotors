'use client'
import { IBookingDB } from './Appointments/types';
import React, { useEffect, useState } from 'react'; 

function BookingListTable() {

  const [bookings, setBookings] = useState<IBookingDB[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="p-6 max-w-full">
      <h1 className={tableHeadingStyle}>Booking List</h1>
       {loading ? (
        <p>Loading...</p>
      ) : (
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
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-blue-50 transition duration-150`}
                >
                  <td className={tdStyle}>{index + 1}</td>
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
                  <td className={tdStyle}>{booking.Comments.length > 30 ? `${booking.Comments.slice(0, 40)}...`: booking.Comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default BookingListTable;

const formStyle =
  "w-full mx-auto flex flex-col gap-y-4 px-4 py-2 mb-2 shadow rounded  border border-gray-300 rounded";
const headingStyle =
  "text-[18px] text-zinc-800 font-[600] leading-[100%] traking-[0%] mb-2 mt-4";
const tableContainer = "max-w-full overflow-auto h-[500px] bg-white shadow-md rounded-lg border border-gray-200";
const tableHeadingStyle = "text-2xl font-bold mb-4 mt-4 text-center text-gray-700 leading-[100%] traking-[0%] ";
const tableStyle  = "table-auto min-w-[1000px] text-sm text-left text-gray-700 whitespace-nowrap";
const theadStyle = "text-sm text-white uppercase bg-gray-400 sticky top-0 z-10";
const thStyle = "px-3 py-3"
const tdStyle = "px-3 py-3"
const inputGroupStyle = "flex flex-col gap-2";
const inputLabelBoxStyle = "flex items-center gap-2";
const inputStyle =
  "border shadow rounded py-2 px-3 text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800";
const errorInputStyle =
  "border shadow rounded py-2 px-3 text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800 border-red-500 focus:border-red-500 focus:outline-red-500";
const buttonStyle =
  "bg-red-500 hover:bg-red-700 text-white text-[18px] font-[600] py-2 px-4 rounded-[22px] mt-4";
const errorStyle =
  "text-[16px] font-[400] leading-[100%] traking-[0%] text-red-500";
