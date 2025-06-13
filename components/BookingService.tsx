"use client";

import { useState } from "react";
import Image from "next/image";
import bookingServiceImg from "@/images/bookingservice.png";

type Props = {
  serviceType: string;
  updateServiceType: (serviceType: string) => void;
};

const BookingService = ({ serviceType, updateServiceType }: Props) => {
  const [error, setError] = useState("");
  const serviceTypes = [
    "Car repair",
    "Engine repair",
    "Oil change",
    "Car wash",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setError(e.target.value === "" ? "*" : "");
    updateServiceType(e.target.value);
  };

  return (
    <div className="w-full grid lg:grid-cols-2 gap-4 lg:gap-20">
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
          value={serviceType}
        >
          <option value="">Select</option>
          {serviceTypes.map((serviceType) => {
            return (
              <option key={serviceType} value={serviceType}>
                {serviceType}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <Image
          src={bookingServiceImg}
          alt="car service"
          priority
          className="object-cover rounded"
        />
      </div>
    </div>
  );
};

const inputGroupStyle = "flex flex-col gap-2";
const inputLabelBoxStyle = "flex items-center gap-2";
const inputLabelStyle =
  "text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800";
const errorStyle =
  "text-[16px] font-[400] leading-[100%] traking-[0%] text-red-500";
const inputStyle =
  "border shadow rounded py-2 px-3 text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800";
const errorInputStyle =
  "border shadow rounded py-2 px-3 text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800 border-red-500 focus:border-red-500 focus:outline-red-500";

export default BookingService;
