"use client";
import { useState } from "react";
import Alert from "@/components/Alert";
import { useForm } from "react-hook-form";
//import { searchPostcodeSuggestions } from "@/app/api/postcode";
//import { PostcodeResult } from "@/app/types/postcodetype";

const titles = ["Mr", "Mrs", "Ms"];
const serviceTypes = ["MOT", "Oiling"];

const PHONE_REGEX_VALIDATION =
  /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+441\s?\d{3}|\(?01\d{3}\)?)\s?\d{5})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
// For Example, Mob No.is
// 04474474859

const POSTCODE_REGEX_VALIDATION =
  /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$/;

// For Example, PostCode is
// PO19 8DJ
//OL14 5ET

const VEHICLE_REGISTRATION_REGEX_VALIDATION =
  /(^[A-Z]{2}[0-9]{2}\s?[A-Z]{3}$)|(^[A-Z][0-9]{1,3}[A-Z]{3}$)|(^[A-Z]{3}[0-9]{1,3}[A-Z]$)|(^[0-9]{1,4}[A-Z]{1,2}$)|(^[0-9]{1,3}[A-Z]{1,3}$)|(^[A-Z]{1,2}[0-9]{1,4}$)|(^[A-Z]{1,3}[0-9]{1,3}$)|(^[A-Z]{1,3}[0-9]{1,4}$)|(^[0-9]{3}[DX]{1}[0-9]{3}$)/;
//For Example, Reg No is
//AB51ABC

interface IFormInput {
  title: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  postCode: string;
  contactNo: string;
  serviceType: string;
  serviceDate: string;
  creationDate: string;
  registrationNo: string;
  remarks: string;
}

function ClientDetailForm() {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
    // setValue,
    // watch,
  } = useForm<IFormInput>();

  const [alert, setAlert] = useState({ message: "", type: "" });
  const handleShowAlert = (type: string, message: string) => {
    setAlert({ type, message });
  };

  const onSubmit = async (data: IFormInput) => {
    console.log(data);
    const clientData = { ...data };
    console.log("ClientData", clientData);
    try {
      const response = await fetch("/api/clientdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Title: clientData.title,
          FirstName: clientData.firstName,
          LastName: clientData.lastName,
          Address1: clientData.address1,
          Address2: clientData.address2,
          PostCode: clientData.postCode,
          ContactNo: clientData.contactNo,
          ServiceType: clientData.serviceType,
          ServiceDate: clientData.serviceDate,
          CreationDate: clientData.creationDate,
          RegistrationNo: clientData.registrationNo,
          Remarks: clientData.remarks,
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
      handleShowAlert("error", "Failed to submit client data");
    }
  };

  const handleCloseAlert = () => {
    setAlert({ message: "", type: "" });
  };

  return (
    <div className=" w-full flex flex-row justify-center gap-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={formStyle}>
          <h2 className={titleStyle}>Client Information</h2>
          <label className={headingStyle}>Your details</label>
          <div className={inputGroupStyle}>
            <label className={inputLabelStyle} htmlFor="title">
              Title
            </label>
            <select {...register("title")} className={inputStyle}>
              {titles.map((title) => {
                return (
                  <option key={title} value={title}>
                    {" "}
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
              type="text"
              className={errors.firstName ? errorInputStyle : inputStyle}
              {...register("firstName", {
                required: true,
                minLength: 3,
                maxLength: 255,
              })}
              placeholder="Your Firstname"
            />
            {errors.firstName && (
              <span className={errorStyle}>
                Should be at least 3 characters
              </span>
            )}
          </div>

          <div className={inputGroupStyle}>
            <div className={inputLabelBoxStyle}>
              <label htmlFor="lastName">Last name</label>
              {errors.lastName && <span className={errorStyle}>*</span>}
            </div>
            <input
              type="text"
              className={errors.lastName ? errorInputStyle : inputStyle}
              {...register("lastName", {
                required: true,
                minLength: 3,
                maxLength: 255,
              })}
              placeholder="Your Lastname"
            />
            {errors.lastName && (
              <span className={errorStyle}>
                Should be at least 3 characters
              </span>
            )}
          </div>

          <label className={headingStyle}>Contact details</label>

          <div className={inputGroupStyle}>
            <label className={inputLabelStyle} htmlFor="address1">
              Address1
            </label>
            <input
              type="text"
              className={inputStyle}
              {...register("address1", { maxLength: 255 })}
              placeholder="Your Address or postcode"
            />
          </div>

          <div className={inputGroupStyle}>
            <label className={inputLabelStyle} htmlFor="address2">
              Address2
            </label>
            <input
              type="text"
              className={inputStyle}
              {...register("address2", { maxLength: 255 })}
              placeholder="Your Address"
            />
          </div>

          <div className={inputGroupStyle}>
            <div className={inputLabelBoxStyle}>
              <label
                className={errors.firstName ? errorStyle : inputLabelStyle}
                htmlFor="postCode"
              >
                Post code
              </label>
              {errors.postCode && <span className={errorStyle}>*</span>}
            </div>
            <input
              type="text"
              className={inputStyle}
              {...register("postCode", {
                required: true,
                pattern: POSTCODE_REGEX_VALIDATION,
              })}
              placeholder="Your Postcode"
            />
            {errors.postCode && (
              <span className={errorStyle}>Use proper PostCode format</span>
            )}
          </div>
          <div className={inputGroupStyle}>
            <label className={inputLabelStyle} htmlFor="contactNo">
              Contact No
            </label>
            <input
              type="text"
              className={inputStyle}
              {...register("contactNo", {
                pattern: PHONE_REGEX_VALIDATION,
              })}
              placeholder="Your ContactNo"
            />
            {errors.contactNo && (
              <span className={errorStyle}>Use proper Mobile No format</span>
            )}
          </div>

          <label className={headingStyle}>Service details</label>

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
              <option value="Service">Select</option>
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
            <label className={inputLabelStyle} htmlFor="serviceDate">
              Service Date
            </label>
            <input
              type="date"
              className={inputStyle}
              {...register("serviceDate", { valueAsDate: true })}
              placeholder="Enter Date"
            />
          </div>

          <div className={inputGroupStyle}>
            <label className={inputLabelStyle} htmlFor="creationDate">
              Creation Date
            </label>
            <input
              type="date"
              className={inputStyle}
              {...register("creationDate", { valueAsDate: true })}
              placeholder="Enter Date"
            />
          </div>
          <div className={inputGroupStyle}>
            <div className={inputLabelBoxStyle}>
              <label
                htmlFor="registrationNo"
                className={errors.registrationNo ? errorStyle : inputLabelStyle}
              >
                Vehicle Registration No
              </label>
              {errors.registrationNo && <span className={errorStyle}>*</span>}
            </div>
            <input
              type="text"
              className={errors.registrationNo ? errorInputStyle : inputStyle}
              {...register("registrationNo", {
                required: true,
                pattern: VEHICLE_REGISTRATION_REGEX_VALIDATION,
              })}
              placeholder="Your Vehicle No"
            />
            {errors.registrationNo && (
              <span className={errorStyle}>Use proper Reg No format</span>
            )}
          </div>

          <div className={inputGroupStyle}>
            <label className={inputLabelStyle} htmlFor="remarks">
              Remarks
            </label>
            <textarea
              className={inputStyle}
              {...register("remarks", { maxLength: 1000 })}
              rows={3}
              placeholder="Your Remarks Here..."
            />
          </div>

          <button
            type="submit"
            className={buttonStyle}
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {alert.message !== "" && (
            <Alert
              message={alert.message}
              type={alert.type}
              onClose={handleCloseAlert}
            />
          )}
        </div>
      </form>
    </div>
  );
}

const formStyle =
  "max-w-lg w-[500px] flex flex-col gap-y-4 p-4 mt-2 mb-2 shadow rounded  border border-gray-300 rounded";
// const signinHeadingBoxStyle =
//   "flex items-center gap-5 mt-2 p-4 border border-gray-300 rounded";
// const signinHeadingStyle =
//   "text-[14px] text-zinc-800 font-[400] leading-[1.5] traking-[0%]";
const titleStyle =
  "text-[22px] text-zinc-800 font-[600] leading-[100%] traking-[0%] mb-2 mt-4 text-center";
const headingStyle =
  "text-[18px] text-zinc-800 font-[600] leading-[100%] traking-[0%] mb-2 mt-4";
// const inputGroupRowStyle = "flex flex-row gap-x-8";
// const inputGroupStyle1 = "flex flex-col w-1/2 gap-2";
const inputGroupStyle = "flex flex-col gap-2";
const inputLabelBoxStyle = "flex items-center gap-2";
const inputLabelStyle =
  "text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800";
const inputStyle =
  "border shadow rounded py-2 px-3 text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800";
const errorInputStyle =
  "border shadow rounded py-2 px-3 text-[16px] font-[400] leading-[100%] traking-[0%] text-neutral-800 border-red-500 focus:border-red-500 focus:outline-red-500";
// const ulStyle =
//   "border border-gray-100 shadow rounded py-2 px-2 text-[14px] font-[400] leading-[100%] traking-[0%] max-h-[150px] text-neutral-600 list-none overflow-y-auto";
// const listStyle =
//   "border-b border-gray-50 py-1 cursor-pointer px-2 text-[14px] font-[400] leading-[100%] traking-[0%]  text-neutral-500 ";
const buttonStyle =
  "bg-red-500 hover:bg-red-700 text-white text-[18px] font-[600] py-2 px-4 rounded-[22px] mt-4";
const errorStyle =
  "text-[16px] font-[400] leading-[100%] traking-[0%] text-red-500";
// const calenderLabelStyle =
//   "text-[18px] font-[600] leading-[100%] traking-[0%] text-zinc-600";
// const timeButtonStyle =
//   "hover:bg-red-400 hover:cursor-pointer text-[18px] font-[600] py-2 px-4 rounded mt-4";

export default ClientDetailForm;

{
  /* 
	const inputStyle =
  "border border-gray-300 shadow rounded py-2 px-3 text-[16px] font-[400] leading-[100%] traking-[0%] text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"; 
*/
}

//https://account.ideal-postcodes.co.uk/tokens
