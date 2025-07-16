'use client'
import { IClientDetailDB } from './Appointments/types';
import React, { useEffect, useState } from 'react'; 
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/solid';

const ITEMS_PER_PAGE = 10;

function ClientDetailListTable() {

  const [clientdetails, setClientDetails] = useState<IClientDetailDB[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCDetails = async () => {
      try {
        const response = await fetch('/api/clientdetail');
        const clientData = await response.json();
        console.error(clientData);
        setClientDetails(clientData);
      } catch (error) {
        console.error('Error fetching client details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCDetails();
  }, []);

  const totalPages = Math.ceil(clientdetails.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = clientdetails.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToFirst = () => setCurrentPage(1);
  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLast = () => setCurrentPage(totalPages);

  return (
      <div className="p-6 mb-4 max-w-full">
        <h1 className={tableHeadingStyle}>Client  Detail  List</h1>
          {loading ? (
            <p>Loading...</p> 
          ) : (
            <div>
              <div className={tableContainer}>
                <table className={tableStyle}>
                  <thead className={theadStyle}>
                    <tr>
                      <th className={thStyle}>Id</th>
                      <th className={thStyle}>Title</th>
                      <th className={thStyle}>FirstName</th>
                      <th className={thStyle}>LastName</th>
                      <th className={thStyle}>Address1</th>
                      <th className={thStyle}>Address2</th>
                      <th className={thStyle}>PostCode</th>
                      <th className={thStyle}>ContactNo</th>
                      <th className={thStyle}>ServiceType</th>
                      <th className={thStyle}>ServiceDate</th>
                      <th className={thStyle}>CreationDate</th>
                      <th className={thStyle}>Reg. No</th>
                      <th className={thStyle}>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((client, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-200 ${
                          index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        } hover:bg-blue-50 transition duration-150`}
                      >
                        <td className={tdStyle}>{index + 1}</td>
                        <td className={tdStyle}>{client.Title}</td>
                        <td className={tdStyle}>{client.FirstName}</td>
                        <td className={tdStyle}>{client.LastName}</td>
                        <td className={tdStyle}>{client.Address1.length > 15 ? `${client.Address1.slice(0, 15)}...`: client.Address1}</td>
                        <td className={tdStyle}>{client.Address2}</td>
                        <td className={tdStyle}>{client.PostCode}</td>
                        <td className={tdStyle}>{client.ContactNo}</td>
                        <td className={tdStyle}>{client.ServiceType}</td>
                        <td className={tdStyle}>{client.ServiceDate ? new Date(client.ServiceDate).toLocaleDateString() : ''}</td>
                        <td className={tdStyle}>{client.CreationDate ? new Date(client.CreationDate).toLocaleDateString() : ''}</td>
                        <td className={tdStyle}>{client.RegistrationNo}</td>
                        <td className={tdStyle}>{client.Remarks.length > 15 ? `${client.Remarks.slice(0, 15)}...`: client.Remarks}</td>
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

export default ClientDetailListTable;

const formStyle =
  "w-full mx-auto flex flex-col gap-y-4 px-4 py-2 mb-2 shadow rounded  border border-gray-300 rounded";
const headingStyle =
  "text-[18px] text-zinc-800 font-[600] leading-[100%] traking-[0%] mb-2 mt-4";
const tableContainer = "max-w-full mb-2 overflow-auto h-[500px] bg-white shadow-md rounded-sm border border-gray-200";
const tableHeadingStyle = "text-2xl font-bold mb-4 mt-4 text-center text-gray-700 leading-[100%] traking-[0%] ";
const tableStyle  = "table-auto min-w-[1000px] text-sm text-left text-gray-700 whitespace-nowrap";
const theadStyle = "text-sm text-white uppercase bg-black sticky top-0 z-10";
const thStyle = "px-2 py-3"
const tdStyle = "px-2 py-3"
const pagingBtnStyle = "flex items-center gap-1 px-2 py-2 text-sm font-medium border rounded-md bg-gray-50 text-gray-800 border-gray-400 hover:bg-blue-100 disabled:opacity-50 transition duration-350";
const pagingSpanStyle = "text-sm font-semibold gap-1 px-2 py-2 bg-gray-100 text-gray-800  border rounded-md border-gray-400";
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