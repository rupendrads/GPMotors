"use client";
import { useState } from "react";

import BookAppointmentForm from "./BookAppointmentForm";
import BookAppointmentHeader from "./BookAppointmentHeader";
import BookAppointmentFooter from "./BookAppointmentFooter";

function BookAppointment() {
  const [stepIndex, setStepIndex] = useState(1);

  const changeStepIndex = (index: number) => {
    setStepIndex(index);
  };

  const moveToNextStep = () => {
    setStepIndex(stepIndex + 1);
  };

  return (
    <>
      <BookAppointmentHeader
        stepIndex={stepIndex}
        changeStepIndex={changeStepIndex}
      />
      <BookAppointmentForm
        stepIndex={stepIndex}
        moveToNextStep={moveToNextStep}
      />
      <BookAppointmentFooter />
    </>
  );
}

export default BookAppointment;
