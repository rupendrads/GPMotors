"use client";
import { sendSms } from "@/utils/webex";

function WebExTest() {
  return (
    <button
      className="cursor-pointer"
      onClick={() =>
        sendSms("+447919453190", "+442089434103", "Hello from React!")
      }
    >
      Send SMS
    </button>
  );
}

export default WebExTest;
