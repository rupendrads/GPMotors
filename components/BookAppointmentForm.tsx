"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { bookAppointment } from "@/actions/appointments";
import Alert from "@/components/Alert";

const titles = ["Mr", "Mrs", "Ms"];
const serviceTypes = ["MOT", "Oiling"];

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={buttonStyle} disabled={pending}>
      {pending ? "submitting..." : "submit"}
    </button>
  );
};

function BookAppointmentForm() {
  const [formState, formAction] = useActionState(bookAppointment, {
    message: "",
  });
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    console.log("inside useeffect");
    if (formState && formState.message !== "") {
      handleShowAlert("success", formState.message);
    }
  }, [formState, formState.message]);

  const handleShowAlert = (type: string, message: string) => {
    setAlert({ type, message });
  };

  const handleCloseAlert = () => {
    setAlert({ message: "", type: "" });
  };

  return (
    <form action={formAction} className={formStyle}>
      <h2 className="text-xl capitalize mb-2">Book appointment</h2>
      <div className={inputGroupStyle}>
        <label htmlFor="firstName">Title</label>
        <select name="title" className={inputStyle}>
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
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          defaultValue=""
          required
          className={inputStyle}
        />
      </div>
      <div className={inputGroupStyle}>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          defaultValue=""
          className={inputStyle}
        />
      </div>
      <div className={inputGroupStyle}>
        <label htmlFor="postCode">Post code</label>
        <input
          type="text"
          name="postCode"
          defaultValue=""
          className={inputStyle}
        />
      </div>
      <div className={inputGroupStyle}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          defaultValue=""
          required
          className={inputStyle}
        />
      </div>
      <div className={inputGroupStyle}>
        <label htmlFor="serviceType">Service type</label>
        <select name="serviceType" className={inputStyle} required>
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
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          rows={3}
          defaultValue=""
          className={inputStyle}
        />
      </div>
      <SubmitButton />
      {alert.message !== "" && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={handleCloseAlert}
        />
      )}
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-y-4 shadow rounded p-8";
const inputGroupStyle = "flex flex-col gap-2";
const inputStyle = "border shadow rounded py-2 px-3";
const buttonStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize mt-4";

export default BookAppointmentForm;
