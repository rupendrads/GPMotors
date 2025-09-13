"use client";

import { IServiceType, IServiceTypeDB } from "@/components/Appointments/types";
import { person, reminderFilterType } from "./types";
import { useEffect, useState } from "react";
import {
  inputGroupStyle,
  inputLabelBoxStyle,
  inputLabelStyle,
  inputStyle,
  errorStyle,
  errorInputStyle,
} from "@/components/styles";
import { formatDate } from "@/utils/formatter";
import People from "./People";
import Loading from "../Loading";

function Reminder() {
  const [serviceType, setServiceType] = useState<IServiceType>();
  const [serviceTypes, setServiceTypes] = useState<IServiceType[]>([]);
  const [dateRange, setDateRange] = useState<string>("month");
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  const [error, setError] = useState("");
  const [people, setPeople] = useState<person[]>([]);
  const [processing, setProcessing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    const fetchServiceTypes = async () => {
      console.log("fetch - request service types");

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
      setLoading(false);
      setServiceTypes(data);
    };
    fetchServiceTypes();
    setWeekOrMonthRange(29);
  }, []);

  const updateServiceType = (serviceTypeId: number) => {
    const serviceType = serviceTypes.find((st) => st.id === serviceTypeId);
    setServiceType(serviceType);
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("ST", e.target.value);
    setError(e.target.value === "-1" ? "*" : "");
    updateServiceType(Number(e.target.value));
  };

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

  const fetchAppointments = async (filter: reminderFilterType) => {
    const query = `/api/reminder?serviceType=${filter.serviceType}&fromDate='${filter.fromDate}'
    &toDate='${filter.toDate}'`;
    console.log(query);
    const response = await fetch(query, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log("fetch - response appointments", result);

    const people: person[] = [];
    result.map((obj: any) => {
      people.push({
        Id: obj["ID"],
        FirstName: obj["FirstName"],
        LastName: obj["LastName"],
        PhoneNo: obj["PhoneNo"],
        Email: obj["Email"],
        IsChecked: true,
        SmsStatus: "",
        WhatsAppStatus: "",
        EmailStatus: "",
        serviceDate: obj["BookingDate"],
        timeSlot: obj["BookingTime"],
        serviceType: obj["ServiceType"],
        carRegistrationNo: obj["RegistrationNo"],
        bookingId: obj["ID"],
      });
    });
    setFiltering(false);
    setPeople(people);
  };

  const filterAppointments = () => {
    setFiltering(true);
    const filter: reminderFilterType = {
      serviceType: serviceType?.id,
      fromDate: formatDate(fromDate),
      toDate: formatDate(toDate),
    };
    console.log("filter", filter);
    setTimeout(() => {
      fetchAppointments(filter);
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
        <div className="w-full h-[400px] flex flex-1 justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="max-w-[768px] lg:max-w-[1024px] min-h-screen mx-auto pt-8 pr-2 pl-2 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-[18px] font-[400] text-gray-500">
              Appointment Reminder
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
                <label
                  className={error !== "" ? errorStyle : inputLabelStyle}
                  htmlFor="serviceType"
                >
                  Service type
                </label>
                {error !== "" && <span className={errorStyle}>{error}</span>}
              </div>
              <select
                className={error !== "" ? errorInputStyle : inputStyle}
                onChange={handleChange}
                value={serviceType?.id}
              >
                <option value={-1}>Select</option>
                {serviceTypes.map((serviceType) => {
                  return (
                    <option key={serviceType.id} value={serviceType.id}>
                      {serviceType.type}
                    </option>
                  );
                })}
              </select>
            </div>
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
                <option key="week" value="week">
                  Week
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
                onClick={filterAppointments}
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

export default Reminder;
