"use client";

import { person, reminderFilterType } from "./types";
import { useEffect, useState } from "react";
import {
  inputGroupStyle,
  inputLabelBoxStyle,
  inputLabelStyle,
  inputStyle,
  // errorStyle,
  // errorInputStyle,
} from "@/components/styles";
import { formatDate } from "@/utils/formatter";
import People from "./People";
import Loading from "../Loading";

function MOTReminder() {
  const [dateRange, setDateRange] = useState<string>("month");
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  //const [error, setError] = useState("");
  const [people, setPeople] = useState<person[]>([]);
  const [processing, setProcessing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    setWeekOrMonthRange(29);
    setLoading(false);
  }, []);

  const setDayRange = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    console.log("from date", tomorrow);
    console.log("to date", tomorrow);
    setFromDate(tomorrow);
    setToDate(tomorrow);
  };

  const setWeekOrMonthRange = (days: number) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const toDate = new Date();
    toDate.setDate(tomorrow.getDate() + days);
    console.log("from date", tomorrow);
    console.log("to date", toDate);
    setFromDate(tomorrow);
    setToDate(toDate);
  };

  const handleDateRangeChange = (value: string) => {
    setDateRange(value);
    if (value === "day") {
      setDayRange();
    } else if (value === "week") {
      setWeekOrMonthRange(6);
    } else {
      setWeekOrMonthRange(29);
    }
  };

  const fetchClients = async (filter: reminderFilterType) => {
    const query = `/api/mot-reminder?fromDate='${filter.fromDate}'
    &toDate='${filter.toDate}'`;
    console.log(query);
    const response = await fetch(query, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log("fetch - response clients", result);

    const people: person[] = [];
    // eslint-disable-next-line
    result.map((obj: any) => {
      people.push({
        Id: obj["ID"],
        FirstName: obj["FirstName"],
        LastName: obj["LastName"],
        PhoneNo: obj["ContactNo"],
        Address1: obj["Address1"],
        Address2: obj["Address2"],
        PostCode: obj["PostCode"],
        IsChecked: true,
        SmsStatus: "",
        WhatsAppStatus: "",
        serviceDate: obj["ServiceDate"],
        CreationDate: obj["CreationDate"],
        serviceType: obj["ServiceType"],
        carRegistrationNo: obj["RegistrationNo"],
      });
    });
    setFiltering(false);
    setPeople(people);
  };

  const filterClients = () => {
    setFiltering(true);
    const filter: reminderFilterType = {
      fromDate: formatDate(fromDate),
      toDate: formatDate(toDate),
    };
    console.log("filter", filter);
    setTimeout(() => {
      fetchClients(filter);
    }, 5000);
  };

  const processingStart = () => {
    setProcessing(true);
  };

  const processingCompleted = () => {
    setProcessing(false);
  };

  return (
    <>
      {loading ? (
        <div className="w-full min-h-[calc(100vh-14rem)] flex flex-1 justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="max-w-[768px] lg:max-w-[1024px] min-h-screen mx-auto pt-8 pr-2 pl-2 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-[18px] font-[400] text-gray-500">
              MOT Reminder
            </span>
            <hr className="text-gray-300" />
          </div>
          <div
            className={`grid lg:grid-cols-3 gap-4 ${
              processing === true && "pointer-events-none opacity-25"
            }`}
          >
            <div className={inputGroupStyle}>
              <div className={inputLabelBoxStyle}>
                <label className={inputLabelStyle} htmlFor="dateRange">
                  Date range
                </label>
              </div>
              <select
                className={inputStyle}
                onChange={(e) => handleDateRangeChange(e.target.value)}
                value={dateRange}
              >
                <option key="month" value="month">
                  Month
                </option>
                <option key="day" value="day">
                  Day
                </option>
              </select>
            </div>
            <div className="flex">
              <button
                type="button"
                className="w-full bg-red-500 text-white text-[18px] font-[400] py-1 px-4 mb-1 rounded 
            hover:cursor-pointer self-end"
                onClick={filterClients}
              >
                Filter
              </button>
            </div>
          </div>
          <People
            filtering={filtering}
            people={people}
            processing={processing}
            processingStart={processingStart}
            processingCompleted={processingCompleted}
          />
        </div>
      )}
    </>
  );
}

export default MOTReminder;
