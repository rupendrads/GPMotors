"use client";
import { useState, useEffect } from "react";
import Alert from "@/components/Alert";
import { useForm } from "react-hook-form";
import { IClientFormInput } from "./Appointments/types";
import { useRouter } from "next/navigation";
//import { searchPostcodeSuggestions } from "@/app/api/postcode";
//import { PostcodeResult } from "@/app/types/postcodetype";

const titles = ["Mr", "Mrs", "Ms"];
const serviceTypes = ["MOT", "Oiling"];

const PHONE_REGEX_VALIDATION =
  /^(0\d{10}|44\d{9,11})$/;
  // /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+441\s?\d{3}|\(?01\d{3}\)?)\s?\d{5})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;

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

interface ClientDetailFormProps {
  clientId?: number;
}

function ClientDetailForm({ clientId }: ClientDetailFormProps) {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IClientFormInput>();

  const [alert, setAlert] = useState({ message: "", type: "" });
  const handleShowAlert = (type: string, message: string) => {
    setAlert({ type, message });
  };
  const router = useRouter();

  useEffect(() => {
    if (clientId) {
      fetch(`/api/clientdetail/${clientId}`)
        .then((res) => res.json())
        .then((data) => {
          reset({
            title: data.Title,
            firstName: data.FirstName,
            lastName: data.LastName,
            address1: data.Address1,
            address2: data.Address2,
            postCode: data.PostCode,
            contactNo: data.ContactNo,
            serviceType: data.ServiceType,
            serviceDate: data.ServiceDate?.split("T")[0],
            creationDate: data.CreationDate?.split("T")[0],
            registrationNo: data.RegistrationNo,
            remarks: data.Remarks,
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId]);

  const onSubmit = async (clientData: IClientFormInput) => {
    try {
      const url = clientId
        ? `/api/clientdetail/${clientId}`
        : "/api/clientdetail";
      const method = clientId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...clientData, Id: clientId }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      
      handleShowAlert(result["status"], result["message"]);

      if (!clientId && result["status"] === "success") {
        reset();
      }

      if (result["status"] === "success") {
      setTimeout(() => {
        router.push(`/admin/client-detail-list`);
      }, 1000);
    }
    } catch (error) {
      console.log(error);
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
          <h2 className={titleStyle}>
            {clientId ? "Edit Client" : "New Client"}
          </h2>
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
                required: false,
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
                className={errors.postCode ? errorStyle : inputLabelStyle}
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
                required: false,
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
                required: true,
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
              {serviceTypes.map((serviceType) => {
                return (
                  <option key={serviceType} value={serviceType}>
                    {" "}
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
              {...register("serviceDate", { 
                required: true, 
                valueAsDate: true 
              })}
              placeholder="Enter Date"
            />
            {errors.serviceDate && (
              <span className={errorStyle}>Select Service Date</span>
            )}
          </div>

          <div className={inputGroupStyle}>
            <label className={inputLabelStyle} htmlFor="creationDate">
              Creation Date
            </label>
            <input
              type="date"
              className={inputStyle}
              {...register("creationDate", { 
                required: true, 
                valueAsDate: true 
              })}
              placeholder="Enter Date"
            />
            {errors.creationDate && (
              <span className={errorStyle}>Select Creation Date</span>
            )}
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
                required: false,
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
              {...register("remarks", { 
                required: false,
                maxLength: 1000 })}
              rows={3}
              placeholder="Your Remarks Here..."
            />
          </div>

          <button
            type="submit"
            className={buttonStyle}
            disabled={formState.isSubmitting}
          >
            {isSubmitting ? "Submitting..." : clientId ? "Update" : "Save"}
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
const titleStyle =
  "text-[22px] text-zinc-800 font-[600] leading-[100%] traking-[0%] mb-2 mt-4 text-center";
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

export default ClientDetailForm;