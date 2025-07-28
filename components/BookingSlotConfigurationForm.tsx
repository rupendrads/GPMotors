"use client";
import React, { useEffect, useState } from "react";
import Alert from "@/components/Alert";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IBookingConfig {
  officeStartTime: Date;
  officeEndTime: Date;
  noOfEmployees: number;
  slotGap: number;
  maxMOT: number;
}

function BookingConfigurationForm() {
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
    watch,
    control,
  } = useForm<IBookingConfig>({
    defaultValues: {
      officeStartTime: new Date(),
      officeEndTime: new Date(),
    },
  });

  const watchStartTime = watch("officeStartTime");
  const watchEmployees = watch("noOfEmployees");

  const [alert, setAlert] = useState({ message: "", type: "" });
  const handleShowAlert = (type: string, message: string) => {
    setAlert({ type, message });
  };

  useEffect(() => {
    fetch("/api/bookingconfig")
      .then((res) => res.json())
      .then((bookingconfig: IBookingConfig) => {
        if (bookingconfig)
          reset({
            ...bookingconfig,
            officeStartTime: new Date(bookingconfig.officeStartTime),
            officeEndTime: new Date(bookingconfig.officeEndTime),
          });
      })
      .finally(() => setLoading(false));
  }, [reset]);

  const onSave: SubmitHandler<IBookingConfig> = async (
    data: IBookingConfig
  ) => {
    //console.log(data);
    const bookingSlotData = { ...data };
    console.log("Booking configuration", bookingSlotData);
    try {
      const response = await fetch("/api/bookingconfig", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      // handleShowAlert(result["status"], result["message"]);
      // if(result["status"] === "success") {
      // 	reset();
      // }
    } catch (error) {
      console.error(error);
      handleShowAlert("error", "Failed to save booking slot data");
    }
  };

  const handleCloseAlert = () => {
    setAlert({ message: "", type: "" });
  };

  //if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-md w-[500px] flex flex-row justify-center gap-2">
      <form onSubmit={handleSubmit(onSave)}>
        <div className={formStyle}>
          <h2 className={titleStyle}>Booking Configuration</h2>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div>
              <div className={inputGroupStyle}>
                <div className={inputLabelBoxStyle}>
                  <label className={inputLabelStyle} htmlFor="officeStartTime">
                    Office Start Time
                  </label>
                  {errors.officeStartTime && (
                    <span className={errorStyle}>*</span>
                  )}
                </div>
                <Controller
                  name="officeStartTime"
                  control={control}
                  rules={{ required: "Start time is required" }}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={field.onChange}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      className={
                        errors.officeStartTime ? errorInputStyle : inputStyle
                      }
                    />
                  )}
                />
                {errors.officeStartTime && (
                  <span className={errorStyle}>
                    {errors.officeStartTime.message}
                  </span>
                )}
              </div>
              <div className={inputGroupStyle}>
                <div className={inputLabelBoxStyle}>
                  <label className={inputLabelStyle} htmlFor="officeEndTime">
                    Office End Time
                  </label>
                  {errors.officeEndTime && (
                    <span className={errorStyle}>*</span>
                  )}
                </div>
                <Controller
                  name="officeEndTime"
                  control={control}
                  rules={{
                    required: "End time is required",
                    validate: (endTime) =>
                      endTime > watchStartTime ||
                      '"The End time should be after the Start time"',
                  }}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={field.onChange}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      className={
                        errors.officeEndTime ? errorInputStyle : inputStyle
                      }
                    />
                  )}
                />
                {errors.officeEndTime && (
                  <span className={errorStyle}>
                    {errors.officeEndTime.message}
                  </span>
                )}
              </div>
              <div className={inputGroupStyle}>
                <div className={inputLabelBoxStyle}>
                  <label className={inputLabelStyle} htmlFor="noOfEmployees">
                    No Of Employees
                  </label>
                  {errors.noOfEmployees && (
                    <span className={errorStyle}>*</span>
                  )}
                </div>
                <input
                  type="number"
                  className={inputStyle}
                  {...register("noOfEmployees", {
                    required: true,
                    min: { value: 1, message: "Cannot be 0 or negative value" },
                    valueAsNumber: true,
                  })}
                  placeholder="Enter no of employees"
                />
                {errors.noOfEmployees && (
                  <span className={errorStyle}>
                    {errors.noOfEmployees.message}
                  </span>
                )}
              </div>
              <div className={inputGroupStyle}>
                <div className={inputLabelBoxStyle}>
                  <label className={inputLabelStyle} htmlFor="slotGap">
                    Slot Gap (in hours)
                  </label>
                  {errors.slotGap && <span className={errorStyle}>*</span>}
                </div>
                <input
                  type="number"
                  className={inputStyle}
                  {...register("slotGap", {
                    required: true,
                    min: { value: 0, message: "Cannot be negative value" },
                    valueAsNumber: true,
                  })}
                  placeholder="Enter no"
                />
                {errors.slotGap && (
                  <span className={errorStyle}>{errors.slotGap.message}</span>
                )}
              </div>
              <div className={inputGroupStyle}>
                <div className={inputLabelBoxStyle}>
                  <label className={inputLabelStyle} htmlFor="maxMOT">
                    Max MOT
                  </label>
                  {errors.maxMOT && <span className={errorStyle}>*</span>}
                </div>
                <input
                  type="number"
                  className={inputStyle}
                  {...register("maxMOT", {
                    required: true,
                    min: { value: 0, message: "Cannot be negative value" },
                    valueAsNumber: true,
                    validate: (value) =>
                      !watchEmployees ||
                      value <= watchEmployees ||
                      "Max MOT cannot exceed No. of Employees",
                  })}
                  placeholder="Enter no"
                />
                {errors.maxMOT && (
                  <span className={errorStyle}>{errors.maxMOT.message}</span>
                )}
              </div>
              <button
                type="submit"
                className={buttonStyle}
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting ? "Saving..." : "Save"}
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
        </div>
      </form>
    </div>
  );
}

const formStyle =
  "max-w-md w-[500px] flex flex-col gap-y-4 p-4 mt-4 mb-4 shadow rounded  border border-gray-300 rounded";
// const signinHeadingBoxStyle =
//   "flex items-center gap-5 mt-2 p-4 border border-gray-300 rounded";
// const signinHeadingStyle =
//   "text-[14px] text-zinc-800 font-[400] leading-[1.5] traking-[0%]";
const titleStyle =
  "text-[22px] text-zinc-800 font-[600] leading-[100%] traking-[0%] mb-3 mt-2 text-center";
// const headingStyle =
//   "text-[18px] text-zinc-800 font-[600] leading-[100%] traking-[0%] mb-2 mt-4";
const inputGroupStyle = "flex flex-col gap-2 w-full mb-4";
const inputLabelBoxStyle = "flex items-center gap-2 w-full";
const inputLabelStyle =
  "text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800";
const inputStyle =
  "w-full border shadow rounded py-2 px-3 text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800";
const errorInputStyle =
  "w-full border shadow rounded py-2 px-3 text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800 border-red-500 focus:border-red-500 focus:outline-red-500";
const buttonStyle =
  "bg-red-500 hover:bg-red-700 text-white text-[18px] font-[600] py-2 px-4 rounded-[22px] mt-4 w-full";
const errorStyle =
  "max-w-md text-[16px] font-[400] leading-[100%] traking-[0%] text-red-500 text-start";

export default BookingConfigurationForm;
