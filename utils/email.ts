import { initEmailJS, sendAutoReplyEmail } from "@/app/lib/emailService";

export interface sendEmailParams {
  to_name: string;
  to_email: string;
  reply_subject: string;
  reply_message_html: string;
}

const sendEmail = (sendEmailParams: sendEmailParams) => {
  try {
    initEmailJS();
    sendAutoReplyEmail({
      to_name: sendEmailParams.to_name,
      to_email: sendEmailParams.to_email,
      reply_subject: sendEmailParams.reply_subject,
      reply_message_html: sendEmailParams.reply_message_html,
    });
  } catch (error) {
    console.log("email error", error);
  }
};

export default sendEmail;
