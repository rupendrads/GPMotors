"use client";

import { useState, useEffect, ChangeEvent, FormEvent, useRef } from "react";
import {
  initEmailJS,
  sendContactUsEmail,
} from "../lib/emailService";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
     const combinedMessage = `${form.message}\n\nPhone: ${form.phone}`;
    await sendContactUsEmail({
      from_name: `${form.firstName} ${form.lastName}`,
      from_email: form.email,
      subject: form.subject,
      message: combinedMessage,
    });

    //   await sendAutoReplyEmail({
    //     to_name: `${form.firstName} ${form.lastName}`,
    //     to_email: form.email,
    //     reply_subject: `Re: ${form.subject}`,
    //     reply_message_html: `
    //       <p>Hi ${form.firstName},</p>
    //       <p>Thanks for reaching out! We’ve received your message:</p>
    //       <blockquote>${form.message}</blockquote>
    //       <p>We’ll get back to you shortly.</p>
    //       <p>Best regards,<br/>The Team</p>
    //     `,
    //   });

      setStatus("✅ Email sent!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
      formRef.current?.reset();
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        setStatus(`❌ ${error.message || "Failed to send emails."}`);
      } else {
        console.error("Caught an unknown type of error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full md:w-2/3 p-8 bg-white flex flex-col gap-6"
    >
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-[#428DCA] outline-none pb-1 text-sm"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-[#428DCA] outline-none pb-1 text-sm"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-[#428DCA] outline-none pb-1 text-sm"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-[#428DCA] outline-none pb-1 text-sm"
            placeholder="+1 012 3456 789"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-xs font-semibold text-gray-700 mb-2">
          Select Subject?
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-1 text-xs font-medium text-gray-700">
            <input
              type="radio"
              name="subject"
              value="General Inquiry"
              checked={form.subject === "General Inquiry"}
              onChange={handleChange}
              className="accent-[#428DCA]"
            />
            General Inquiry
          </label>
          <label className="flex items-center gap-1 text-xs font-medium text-gray-700">
            <input
              type="radio"
              name="subject"
              value="General Inquiry"
              checked={form.subject === "General Inquiry"}
              onChange={handleChange}
              className="accent-[#428DCA]"
            />
           Feedback
          </label>
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={2}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full border h-20 border-gray-300 focus:border-[#428DCA] outline-none pb-1 text-sm"
          placeholder="Write your message..."
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#F44336] hover:bg-[#d32f2f] text-white font-semibold py-2 px-8 rounded transition text-base disabled:opacity-50"
        >
          {loading ? "Sending…" : "Send Message"}
        </button>
      </div>
      {status && (
        <div
          className={`mt-2 p-2 rounded text-xs ${
            status.startsWith("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </div>
      )}
    </form>
  );
}
