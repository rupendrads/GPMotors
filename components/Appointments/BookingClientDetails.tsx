import { useForm } from "react-hook-form";
import Alert from "@/components/Alert";
import { formatDate } from "@/utils/formatter";
import { inputLabelStyle } from "./styles";
import { IDateTime, IFormInput, IServiceType } from "./types";
import { useState } from "react";
import ChangeBookingDateTime from "./ChangeBookingDateTime";
import ChangeService from "./ChangeService";
import { useRouter } from "next/navigation";
import { initEmailJS, sendAutoReplyEmail } from "@/app/lib/emailService";
import getEmailTemplate, { emailParams } from "./emailTemplate";

type Props = {
  serviceType: IServiceType | undefined;
  bookingDateTime: IDateTime;
  resetServiceType: () => void;
  resetBookingDateTime: () => void;
  clientDetails: IFormInput | undefined;
  updateClientDetails: (clientDetails: IFormInput, index: number) => void;
};

const titles = ["Mr", "Mrs", "Ms"];

const BookingClientDetails = ({
  serviceType,
  bookingDateTime,
  resetServiceType,
  resetBookingDateTime,
  clientDetails,
  updateClientDetails,
}: Props) => {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { ...clientDetails },
  });
  const router = useRouter();

  const handleShowAlert = (type: string, message: string) => {
    setAlert({ type, message });
  };

  const handleCloseAlert = () => {
    setAlert({ message: "", type: "" });
    router.push("/");
  };

  const resetForm = () => {
    reset();
    resetBookingDateTime();
    resetServiceType();
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
          ServiceType: serviceType?.id,
          Comments: bookingData.comments,
          PhoneNo: bookingData.phoneNo,
        }),
      });

      const result = await response.json();
      console.log("insert appointment result", result);
      handleShowAlert(result["status"], result["message"]);
      if (result["status"] === "success") {
        const bookingId = result["results"]["insertId"];
        console.log("insert appointment id", bookingId);
        resetForm();
        try {
          const emailParams: emailParams = {
            companyName: "GP Motors",
            clientName: bookingData.firstName + " " + bookingData.lastName,
            serviceDate: formatDate(bookingDateTime.date),
            timeSlot: bookingDateTime.time,
            serviceType: serviceType?.type as string,
            carRegistrationNo: bookingData.registrationNo,
            bookingId: bookingId,
            companyContactNo: "0208 943 4103",
            websiteUrl: "https://gpmotorstedd.co.uk/",
            year: new Date().getFullYear().toString(),
            logoUrl:
              "https://ik.imagekit.io/enxjuklx6/Group%2054.png?updatedAt=1750399283384",
          };
          const emailTemplate = getEmailTemplate(emailParams);
          initEmailJS();
          sendAutoReplyEmail({
            to_name: "Admin",
            to_email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL as string,
            reply_subject: "booking appointment confirmation",
            reply_message_html: emailTemplate,
          });
        } catch (error) {
          console.log("email error", error);
        }
      }
    } catch (error) {
      console.error(error);
      handleShowAlert("error", "Failed to book appointment");
    }
  };

  const stepIndexChanged = (index: number) => {
    updateClientDetails(getValues(), index);
  };

  return (
    <>
      <ChangeService
        stepIndex={1}
        changeStepIndex={stepIndexChanged}
        serviceType={serviceType?.type}
      />
      <ChangeBookingDateTime
        stepIndex={2}
        changeStepIndex={stepIndexChanged}
        bookingDateTime={bookingDateTime}
      />
      <form onSubmit={handleSubmit(bookAppointment)}>
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
          <div className={inputGroupStyle}>
            <div className={inputLabelBoxStyle}>
              <label
                className={errors.phoneNo ? errorStyle : inputLabelStyle}
                htmlFor="phoneNo"
              >
                Phone No
              </label>
            </div>
            <input
              {...register("phoneNo", {
                maxLength: 255,
              })}
              defaultValue=""
              className={errors.phoneNo ? errorInputStyle : inputStyle}
            />
          </div>
          <label className={headingStyle}>Service details</label>
          <div className={inputGroupStyle}>
            <div className={inputLabelBoxStyle}>
              <label
                className={errors.registrationNo ? errorStyle : inputLabelStyle}
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
        </div>
        {alert.message !== "" && (
          <Alert
            message={alert.message}
            type={alert.type}
            onClose={handleCloseAlert}
          />
        )}
      </form>
    </>
  );
};

const formStyle =
  "w-full mx-auto flex flex-col gap-y-4 px-4 py-2 mb-2 shadow rounded  border border-gray-300 rounded";
const signinHeadingBoxStyle =
  "flex items-center gap-5 py-2 px-4 border border-gray-300 rounded";
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

export default BookingClientDetails;
