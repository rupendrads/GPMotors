"use client";
import { useState } from "react";
import BookingService from "./BookingService";
import ChangeService from "./ChangeService";
//import ChangeBookingDateTime from "./ChangeBookingDateTime";
import {
  IDateTime,
  IBookingConfig,
  IBookingFilled,
  IBookingSlots,
  IServiceType,
  IFormInput,
} from "./types";

import BookingDateTime from "./BookingDateTime";
import { getDisabledDates, getUpdatedTimeSlots } from "./calc";
import BookingClientDetails from "./BookingClientDetails";

type Props = {
  stepIndex: number;
  moveToNextStep: () => void;
  changeStepIndex: (index: number) => void;
  bookingConfig: IBookingConfig;
  serviceTypes: IServiceType[];
  bookingTimeSlots: IBookingSlots[];
  changeBookingTimeSlots: (timeSlots: IBookingSlots[]) => void;
  resetBookingTimeSlots: (slotLimit: number) => void;
  bookingFilled: IBookingFilled[];
  cBookingId?: number;
};

const BookAppointmentForm = ({
  stepIndex,
  moveToNextStep,
  changeStepIndex,
  bookingConfig,
  serviceTypes,
  bookingTimeSlots,
  changeBookingTimeSlots,
  resetBookingTimeSlots,
  bookingFilled,
  cBookingId,
}: Props) => {
  const [serviceType, setServiceType] = useState<IServiceType>();
  const [bookingDateTime, setBookingDateTime] = useState<IDateTime>({
    date: undefined,
    time: "",
  });
  const [clientDetails, setClientDetails] = useState<IFormInput>();
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);

  console.log("Client Booking ID:", cBookingId);

  const getSlotsLimit = (serviceType: IServiceType) => {
    return serviceType.logic === 1
      ? bookingConfig.limitPerSlot
      : bookingConfig.noOfEmployees;
  };

  const updateServiceType = (serviceTypeId: number) => {
    const serviceType = serviceTypes.find((st) => st.id === serviceTypeId);
    console.log("st service type", serviceType);
    console.log("st booking date", bookingDateTime.date);
    setServiceType(serviceType);
    if (serviceType) {
      const slotLimit = bookingConfig.noOfEmployees;
      const logicSlotLimit =
        serviceType.logic === 1 ? bookingConfig.limitPerSlot : 0;
      getSlotsLimit(serviceType);
      const disabledDates = getDisabledDates(
        bookingFilled,
        bookingTimeSlots,
        slotLimit,
        logicSlotLimit,
        serviceType.logic === 1
      );
      console.log("disabledDates", disabledDates);
      setDisabledDates(disabledDates);

      if (bookingDateTime.date !== undefined) {
        updateBookingTimeSlots(bookingDateTime.date, serviceType);
        setBookingDateTime({ ...bookingDateTime, time: "" });
        moveToNextStep();
      } else {
        moveToNextStep();
      }
    }
  };

  const updateBookingDate = (date: Date) => {
    updateBookingTimeSlots(date, serviceType);
    setBookingDateTime({ date: date, time: "" });
  };

  const updateBookingTime = (time: string) => {
    setBookingDateTime({ ...bookingDateTime, time: time });
    return moveToNextStep();
  };

  const updateBookingTimeSlots = (
    date: Date,
    serviceType: IServiceType | undefined
  ) => {
    console.log("st service type:", serviceType);
    if (serviceType) {
      const slotLimit = bookingConfig.noOfEmployees;
      const logicSlotLimit =
        serviceType.logic === 1 ? bookingConfig.limitPerSlot : 0;
      const updatedTimeSlots = getUpdatedTimeSlots(
        date,
        bookingFilled,
        bookingTimeSlots,
        slotLimit,
        logicSlotLimit,
        serviceType.logic === 1
      );
      if (updatedTimeSlots.length === 0) {
        resetBookingTimeSlots(slotLimit);
      } else {
        changeBookingTimeSlots(updatedTimeSlots);
      }
    }
  };

  const resetServiceType = () => {
    setServiceType(undefined);
  };
  const resetBookingDateTime = () => {
    setBookingDateTime({
      date: undefined,
      time: "",
    });
  };

  const updateClientDetails = (clientDetails: IFormInput, index: number) => {
    setClientDetails(clientDetails);
    changeStepIndex(index);
  };

  return (
    <div className="w-full md:w-[500px] lg:w-[900px] mx-auto flex flex-1 flex-col gap-2">
      {stepIndex === 1 && (
        <div className={formStyle}>
          <BookingService
            serviceType={serviceType}
            serviceTypes={serviceTypes}
            updateServiceType={updateServiceType}
          />
        </div>
      )}
      {stepIndex === 2 && (
        <div className="w-full lg:w-[500px] mx-auto">
          <div className={formStyle}>
            <ChangeService
              stepIndex={1}
              changeStepIndex={changeStepIndex}
              serviceType={serviceType?.type}
            />
            <BookingDateTime
              bookingDateTime={bookingDateTime}
              updateBookingDate={updateBookingDate}
              updateBookingTime={updateBookingTime}
              bookingTimeSlots={bookingTimeSlots}
              disabledDates={disabledDates}
            />
          </div>
        </div>
      )}
      {stepIndex === 3 && (
        <div className="w-full lg:w-[500px] mx-auto">
          <div className={formStyle}>
            <BookingClientDetails
              serviceType={serviceType}
              bookingDateTime={bookingDateTime}
              resetServiceType={resetServiceType}
              resetBookingDateTime={resetBookingDateTime}
              clientDetails={clientDetails}
              updateClientDetails={updateClientDetails}
              cBookingId={cBookingId} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

const formStyle =
  "w-full mx-auto flex flex-col gap-y-4 p-4 mt-2 mb-2 shadow rounded  border border-gray-300 rounded";

export default BookAppointmentForm;
