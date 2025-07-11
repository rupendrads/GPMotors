"use client";

import { useState, useEffect, ChangeEvent, FormEvent, useRef } from "react";
import {
  initEmailJS,
  sendContactUsEmail,
  sendAutoReplyEmail,
} from "../lib/emailService";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function EmailSender() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string>("");

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
      await sendContactUsEmail({
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      });

      await sendAutoReplyEmail({
        to_name: form.name,
        to_email: form.email,
        reply_subject: `Re: ${form.subject}`,
        reply_message_html: `
          <p>Hi ${form.name},</p>
          <p>Thanks for reaching out! We’ve received your message:</p>
          <blockquote>${form.message}</blockquote>
          <p>We’ll get back to you shortly.</p>
          <p>Best regards,<br/>The Team</p>
        `,
      });

      setStatus("✅ Emails sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
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
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            type="text"
            required
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            required
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Subject</label>
          <input
            name="subject"
            type="text"
            required
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {loading ? "Sending…" : "Send Message"}
        </button>
      </form>

      {status && (
        <div
          className={`mt-4 p-3 rounded ${
            status.startsWith("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </div>
      )}
    </div>
  );
}
