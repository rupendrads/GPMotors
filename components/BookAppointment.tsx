"use client";
import { useState } from "react";
import BookAppointmentForm from "./BookAppointmentForm";
import BookAppointmentHeader from "./BookAppointmentHeader";
import BookAppointmentFooter from "./BookAppointmentFooter";
import { IBookingConfig } from "./types";

function BookAppointment() {
  const [stepIndex, setStepIndex] = useState(1);
  const [bookingConfig, setBookingConfig] = useState<IBookingConfig>({
    officeStartTime: "09:00:00",
    officeEndTime: "18:00:00",
    noOfEmployees: 4,
    slotGap: 2,
    maxMotPerSlot: 1,
  });

  const changeStepIndex = (index: number) => {
    setStepIndex(index);
  };

  const moveToNextStep = () => {
    setStepIndex(stepIndex + 1);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <BookAppointmentHeader
        stepIndex={stepIndex}
        changeStepIndex={changeStepIndex}
      />
      <BookAppointmentForm
        stepIndex={stepIndex}
        moveToNextStep={moveToNextStep}
        changeStepIndex={changeStepIndex}
        bookingConfig={bookingConfig}
      />
      <BookAppointmentFooter />
    </div>
  );
}

export default BookAppointment;
