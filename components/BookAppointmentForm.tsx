"use client";

import { useState } from "react";
import Alert from "@/components/Alert";
import { useForm } from "react-hook-form";

type Props = {
  stepIndex: number;
  moveToNextStep: () => void;
};

const titles = ["Mr", "Mrs", "Ms"];
const serviceTypes = ["MOT", "Oiling"];

interface IFormInput {
  title: string;
  firstName: string;
  lastName: string;
  postCode: string;
  email: string;
  registrationNo: string;
  serviceType: string;
  comments: string;
}

function BookAppointmentForm(prop: Props) {
  console.log("step: ", prop.stepIndex);
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleShowAlert = (type: string, message: string) => {
    setAlert({ type, message });
  };

  const bookAppointment = async (data: IFormInput) => {
    console.log(data);
    const bookingData = { ...data };
    console.log("bookingData", bookingData);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          BookingDate: "2025-06-05",
          BookingTime: "17:30:00",
          Title: bookingData.title,
          FirstName: bookingData.firstName,
          LastName: bookingData.lastName,
          Email: bookingData.email,
          PostCode: bookingData.postCode,
          RegistrationNo: bookingData.registrationNo,
          ServiceType: bookingData.serviceType,
          Comments: bookingData.comments,
        }),
      });

      const result = await response.json();
      console.log(result);
      handleShowAlert(result["status"], result["message"]);
      if (result["status"] === "success") {
        reset();
      }
    } catch (error) {
      console.error(error);
      handleShowAlert("error", "Failed to book appointment");
    }
  };

  const handleCloseAlert = () => {
    setAlert({ message: "", type: "" });
  };

  return (
    <div className="w-[500px] flex flex-col gap-2">
      <form onSubmit={handleSubmit(bookAppointment)}>
        {prop.stepIndex === 1 && (
          <div className={formStyle}>
            <div>
              <div>
                <label className={calenderLabelStyle}>Select a date</label>
              </div>
            </div>
            <div>
              <label className={calenderLabelStyle}>Select a time</label>
              <br />
              <button className={timeButtonStyle} onClick={prop.moveToNextStep}>
                9:30
              </button>
            </div>
          </div>
        )}
        {prop.stepIndex === 2 && (
          <div className={formStyle}>
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
                {errors.registrationNo && <span className={errorStyle}>*</span>}
              </div>
              <input
                {...register("registrationNo", {
                  required: true,
                  maxLength: 255,
                })}
                defaultValue=""
                className={errors.registrationNo ? errorInputStyle : inputStyle}
              />
            </div>
            <div className={inputGroupStyle}>
              <div className={inputLabelBoxStyle}>
                <label
                  className={errors.serviceType ? errorStyle : inputLabelStyle}
                  htmlFor="serviceType"
                >
                  Service type
                </label>
                {errors.serviceType && <span className={errorStyle}>*</span>}
              </div>
              <select
                {...register("serviceType", { required: true })}
                className={errors.serviceType ? errorInputStyle : inputStyle}
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
              {formState.isSubmitting ? "Confirming..." : "Confirm appointment"}
            </button>
            {alert.message !== "" && (
              <Alert
                message={alert.message}
                type={alert.type}
                onClose={handleCloseAlert}
              />
            )}
          </div>
        )}
      </form>
    </div>
  );
}

const formStyle =
  "max-w-lg flex flex-col gap-y-4 p-4 mt-2 shadow rounded  border border-gray-300 rounded";
const signinHeadingBoxStyle =
  "flex items-center gap-5 mt-2 p-4 border border-gray-300 rounded";
const signinHeadingStyle =
  "text-[14px] text-zinc-800 font-[400] leading-[1.5] traking-[0%]";
const headingStyle =
  "text-[18px] text-zinc-800 font-[600] leading-[100%] traking-[0%] mb-2 mt-4";
const inputGroupStyle = "flex flex-col gap-2";
const inputLabelBoxStyle = "flex items-center gap-2";
const inputLabelStyle =
  "text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800";
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
  "hover:bg-red-400 hover:cursor-pointer text-[18px] font-[600] py-2 px-4 rounded mt-4";

export default BookAppointmentForm;
