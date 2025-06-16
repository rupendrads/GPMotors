"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BookingService from "./BookingService";
import BookingCalender from "./BookingCalender";
import ChangeService from "./ChangeService";
import ChangeBookingDateTime from "./ChangeBookingDateTime";
import Alert from "@/components/Alert";
import { formatDate, formatTime } from "@/utils/formatter";
import { IDateTime, IFormInput, IBookingConfig } from "./types";
import { inputLabelStyle } from "./styles";
import { convertMinutesToTime, convertTimeToMinutes } from "@/utils/calc";
import { useRouter } from "next/navigation";

type Props = {
  stepIndex: number;
  moveToNextStep: () => void;
  changeStepIndex: (index: number) => void;
  bookingConfig: IBookingConfig;
};

const titles = ["Mr", "Mrs", "Ms"];

const BookAppointmentForm = ({
  stepIndex,
  moveToNextStep,
  changeStepIndex,
  bookingConfig,
}: Props) => {
  console.log("step: ", stepIndex);
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const router = useRouter();
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [serviceType, setServiceType] = useState<string>("");
  const [bookingDateTime, setBookingDateTime] = useState<IDateTime>({
    date: undefined,
    time: "",
  });

  const getNoOfSlots = () => {
    const endTimeMinutes = convertTimeToMinutes(bookingConfig.officeEndTime);
    console.log("endTimeMinutes", endTimeMinutes);
    const startTimeMinutes = convertTimeToMinutes(
      bookingConfig.officeStartTime
    );
    console.log("startTimeMinutes", startTimeMinutes);
    const totalMinutes = endTimeMinutes - startTimeMinutes;
    console.log("totalMinutes", totalMinutes);
    const slotGapMinutes = bookingConfig.slotGap * 60;
    console.log("slotGapMinutes", slotGapMinutes);
    const noOfSlots = Math.floor(totalMinutes / slotGapMinutes);
    console.log("noOfSlots", noOfSlots);
    return noOfSlots;
  };

  const getBookingTimes = () => {
    const bookingTimes: string[] = [];

    let startMinutes = convertTimeToMinutes(bookingConfig.officeStartTime);
    for (let i = 0; i < noOfSlots; i++) {
      if (i > 0) {
        startMinutes = startMinutes + bookingConfig.slotGap * 60;
      }
      bookingTimes.push(convertMinutesToTime(startMinutes));
    }
    return bookingTimes;
  };

  const noOfSlots = getNoOfSlots();
  console.log("noOfSlots", noOfSlots);
  const bookingTimes: string[] = getBookingTimes();
  console.log("bookingTimes", bookingTimes);

  const handleShowAlert = (type: string, message: string) => {
    setAlert({ type, message });
  };

  const bookAppointment = async (data: IFormInput) => {
    console.log(data);
    const bookingData = { ...data };
    console.log("bookingData", bookingData);
    console.log("bookingDateTime", bookingDateTime);
    console.log("formatted bookingDate", formatDate(bookingDateTime.date));
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          BookingDate: formatDate(bookingDateTime.date),
          BookingTime: bookingDateTime.time,
          Title: bookingData.title,
          FirstName: bookingData.firstName,
          LastName: bookingData.lastName,
          Email: bookingData.email,
          PostCode: bookingData.postCode,
          RegistrationNo: bookingData.registrationNo,
          ServiceType: serviceType,
          Comments: bookingData.comments,
        }),
      });

      const result = await response.json();
      console.log(result);
      handleShowAlert(result["status"], result["message"]);
      if (result["status"] === "success") {
        reset();
        setBookingDateTime({
          date: undefined,
          time: "",
        });
        setServiceType("");
      }
    } catch (error) {
      console.error("error", error);
      handleShowAlert("error", "Failed to book appointment");
    }
  };

  const handleCloseAlert = () => {
    setAlert({ message: "", type: "" });
    router.push("/");
  };

  const updateServiceType = (serviceType: string) => {
    console.log("service type", serviceType);
    setServiceType(serviceType);
    if (serviceType !== "") moveToNextStep();
  };

  const updateBookingDate = (date: Date) => {
    console.log("selected date", date);
    setBookingDateTime({ date: date, time: "" });
  };

  const updateBookingTime = (time: string) => {
    setBookingDateTime({ ...bookingDateTime, time: time });
    return moveToNextStep();
  };

  return (
    <div className="w-full md:w-[500px] lg:w-[900px] mx-auto flex flex-1 flex-col gap-2">
      <form onSubmit={handleSubmit(bookAppointment)}>
        {stepIndex === 1 && (
          <div className={formStyle}>
            <BookingService
              serviceType={serviceType}
              updateServiceType={updateServiceType}
            />
          </div>
        )}
        {stepIndex === 2 && (
          <div className="w-full lg:w-[500px] mx-auto">
            <div className={formStyle}>
              <ChangeService
                stepIndex={1}
                changeStepIndex={changeStepIndex}
                serviceType={serviceType}
              />
              <div>
                <div>
                  <label className={calenderLabelStyle}>Select a date</label>
                </div>
                <BookingCalender
                  bookingDateTime={bookingDateTime}
                  updateBookingDate={updateBookingDate}
                />
              </div>
              <div>
                <label className={calenderLabelStyle}>Select a time</label>
                <div className="w-full grid grid-cols-3 gap-2">
                  {bookingTimes.map((time) => {
                    return (
                      <button
                        key={time}
                        className={
                          bookingDateTime.time === time
                            ? selectedTimeButtonStyle
                            : timeButtonStyle
                        }
                        onClick={() => updateBookingTime(time)}
                      >
                        {formatTime(time)}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
        {stepIndex === 3 && (
          <div className="w-full lg:w-[500px] mx-auto">
            <div className={formStyle}>
              <ChangeService
                stepIndex={1}
                changeStepIndex={changeStepIndex}
                serviceType={serviceType}
              />
              <ChangeBookingDateTime
                stepIndex={2}
                changeStepIndex={changeStepIndex}
                bookingDateTime={bookingDateTime}
              />
              <div className={signinHeadingBoxStyle}>
                <span className="material-icons">person</span>
                <label className={signinHeadingStyle}>
                  Do you already have an account? Sign in to retrieve your
                  information and to manage your appoints online.
                </label>
              </div>
              <label className={headingStyle}>Your details</label>
              <div className={inputGroupStyle}>
                <label className={inputLabelStyle} htmlFor="title">
                  Title
                </label>
                <select {...register("title")} className={inputStyle}>
                  {titles.map((title) => {
                    return (
                      <option key={title} value={title}>
                        {title}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={inputGroupStyle}>
                <div className={inputLabelBoxStyle}>
                  <label
                    className={errors.firstName ? errorStyle : inputLabelStyle}
                    htmlFor="firstName"
                  >
                    First name
                  </label>
                  {errors.firstName && <span className={errorStyle}>*</span>}
                </div>
                <input
                  {...register("firstName", { required: true, maxLength: 255 })}
                  defaultValue=""
                  className={errors.firstName ? errorInputStyle : inputStyle}
                />
              </div>
              <div className={inputGroupStyle}>
                <label className={inputLabelStyle} htmlFor="lastName">
                  Last name
                </label>
                <input
                  {...register("lastName", { maxLength: 255 })}
                  defaultValue=""
                  className={inputStyle}
                />
              </div>
              <label className={headingStyle}>Contact details</label>
              <div className={inputGroupStyle}>
                <label className={inputLabelStyle} htmlFor="postCode">
                  Post code
                </label>
                <input
                  {...register("postCode", { maxLength: 255 })}
                  defaultValue=""
                  className={inputStyle}
                />
              </div>
              <div className={inputGroupStyle}>
                <div className={inputLabelBoxStyle}>
                  <label
                    className={errors.email ? errorStyle : inputLabelStyle}
                    htmlFor="email"
                  >
                    Email
                  </label>
                  {errors.email && (
                    <span className={errorStyle}>(Invalid email)</span>
                  )}
                </div>
                <input
                  {...register("email", {
                    maxLength: 255,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  })}
                  defaultValue=""
                  className={errors.email ? errorInputStyle : inputStyle}
                />
              </div>
              <label className={headingStyle}>Service details</label>
              <div className={inputGroupStyle}>
                <div className={inputLabelBoxStyle}>
                  <label
                    className={
                      errors.registrationNo ? errorStyle : inputLabelStyle
                    }
                    htmlFor="registrationNo"
                  >
                    Registration no
                  </label>
                  {errors.registrationNo && (
                    <span className={errorStyle}>*</span>
                  )}
                </div>
                <input
                  {...register("registrationNo", {
                    required: true,
                    maxLength: 255,
                  })}
                  defaultValue=""
                  className={
                    errors.registrationNo ? errorInputStyle : inputStyle
                  }
                />
              </div>

              <div className={inputGroupStyle}>
                <label className={inputLabelStyle} htmlFor="comments">
                  Comments
                </label>
                <textarea
                  {...register("comments", { maxLength: 1000 })}
                  rows={3}
                  defaultValue=""
                  className={inputStyle}
                />
              </div>
              <button
                type="submit"
                className={buttonStyle}
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting
                  ? "Confirming..."
                  : "Confirm appointment"}
              </button>
              {alert.message !== "" && (
                <Alert
                  message={alert.message}
                  type={alert.type}
                  onClose={handleCloseAlert}
                />
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

const formStyle =
  "w-full mx-auto flex flex-col gap-y-4 p-4 mt-2 mb-2 shadow rounded  border border-gray-300 rounded";
const signinHeadingBoxStyle =
  "flex items-center gap-5 mt-2 p-4 border border-gray-300 rounded";
const signinHeadingStyle =
  "text-[14px] text-zinc-800 font-[400] leading-[1.5] traking-[0%]";
const headingStyle =
  "text-[18px] text-zinc-800 font-[600] leading-[100%] traking-[0%] mb-2 mt-4";
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

const calenderLabelStyle =
  "text-[18px] font-[600] leading-[100%] traking-[0%] text-zinc-600";
const timeButtonStyle =
  "hover:bg-red-500 hover:cursor-pointer text-[18px] font-[600] py-2 px-4 rounded mt-4";
const selectedTimeButtonStyle =
  "bg-red-500 text-white hover:cursor-pointer text-[18px] font-[600] py-2 px-4 rounded mt-4";

export default BookAppointmentForm;

