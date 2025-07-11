import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export function initEmailJS(): void {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    console.warn("Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
    return;
  }
  emailjs.init(publicKey);
}

async function sendEmail<T extends object>(
  serviceId: string,
  templateId: string,
  templateParams: T
): Promise<EmailJSResponseStatus> {
  if (!serviceId || !templateId) {
    throw new Error("EmailJS SERVICE_ID or TEMPLATE_ID not defined");
  }
  const res = await emailjs.send(serviceId, templateId, templateParams as Record<string, unknown>);
  if (res.status !== 200) {
    throw new Error(`EmailJS error: ${res.text}`);
  }
  return res;
}

/** CONTACT-US*/
export interface ContactUsParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string; 
  to_email: string;
}

export async function sendContactUsEmail(
  params: Omit<ContactUsParams, "to_email">
): Promise<EmailJSResponseStatus> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!;
  const to_email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL!;
  return sendEmail(serviceId, templateId, { ...params, to_email });
}

/** AUTO-REPLY*/
export interface AutoReplyParams {
  to_name: string;
  to_email: string;
  reply_subject: string;
  reply_message_html: string; 
}

export async function sendAutoReplyEmail(
  params: AutoReplyParams
): Promise<EmailJSResponseStatus> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!;
  if (!params.to_email) {
    throw new Error("AutoReplyParams.to_email is empty");
  }
  return sendEmail(serviceId, templateId, params);
}
