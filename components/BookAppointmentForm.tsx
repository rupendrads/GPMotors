"use client";

import { bookAppointment } from "@/actions/appointments";

const titles = ["Mr", "Mrs", "Ms"];

function BookAppointmentForm() {
  return (
    <form action={bookAppointment} className={formStyle}>
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
          required
          className={inputStyle}
        />
      </div>
      <div className={inputGroupStyle}>
        <label htmlFor="postCode">Post code</label>
        <input
          type="text"
          name="postCode"
          defaultValue=""
          required
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
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          rows={3}
          defaultValue=""
          required
          className={inputStyle}
        />
      </div>
      <button type="submit" className={buttonStyle}>
        submit
      </button>
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-y-4 shadow rounded p-8";
const inputGroupStyle = "flex flex-col gap-2";
const inputStyle = "border shadow rounded py-2 px-3";
const buttonStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize mt-4";

export default BookAppointmentForm;
