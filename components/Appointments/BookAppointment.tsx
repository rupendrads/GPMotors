"use client";
import { useEffect, useState } from "react";
import BookAppointmentForm from "./BookAppointmentForm";
import BookAppointmentHeader from "./BookAppointmentHeader";
import BookAppointmentFooter from "./BookAppointmentFooter";
import {
  IBookingFilled,
  IBookingConfig,
  IBookingSlots,
  IServiceType,
  IServiceTypeDB,
  IBookingDB,
} from "./types";
import { getBookingsAvailable, getBookingTimes } from "./calc";
import Loading from "../Loading";
import { useSearchParams } from "next/navigation";

function BookAppointment() {
  const [stepIndex, setStepIndex] = useState(1);
  const [bookingConfig, setBookingConfig] = useState<IBookingConfig>();
  const [serviceTypes, setServiceTypes] = useState<IServiceType[]>([]);
  const [bookingTimeSlots, setBookingTimeSlots] = useState<IBookingSlots[]>([]);
  const [bookingFilled, setBookingFilled] = useState<IBookingFilled[]>([]);

  const [loading, setLoading] = useState(true);

  const [isEdit, setIsEdit] = useState(false);
  const [appointment, setAppointment] = useState<IBookingDB>();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log("id", id);

  useEffect(() => {
    try {
      const fetchAppointment = async () => {
        console.log("fetch -request appointment");
        const response = await fetch(`/api/booking/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        console.log("fetch - response appointment", result);
        setAppointment({
          ...result,
          BookingDate: new Date(result["BookingDate"]),
        });
      };

      const fetchData = async () => {
        console.log("fetch -request bookings");
        const response = await fetch("/api/booking/futures", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        console.log("fetch - response bookings", result);

        if (id !== null) {
          fetchAppointment();
          setIsEdit(true);
          setStepIndex(2);
        }

        setLoading(false);

        const filledBookings = getBookingsAvailable(result);
        console.log("fetch - booking data filled", filledBookings);
        setBookingFilled(filledBookings);
      };

      const fetchServiceTypes = async () => {
        console.log("fetch - request service types");

        const response = await fetch("/api/servicetypes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        console.log("fetch - response service types", result);
        const data: IServiceType[] = [];
        result.map((serviceType: IServiceTypeDB) => {
          data.push({
            id: serviceType.ID,
            type: serviceType.Type,
            logic: serviceType.Logic,
          });
        });
        console.log("fetch - service types data", data);
        setServiceTypes(data);
        fetchData();
      };

      const fetchBookingConfig = async () => {
        console.log("fetch - request booking config");

        const response = await fetch("/api/bookingconfig", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        console.log("fetch - response booking config", result);
        const bookinConfigData = {
          officeStartTime: result[0]["OfficeStartTime"],
          officeEndTime: result[0]["OfficeEndTime"],
          noOfEmployees: result[0]["NoOfEmployees"],
          slotGap: result[0]["SlotGap"],
          limitPerSlot: result[0]["LimitPerSlot"],
        };
        console.log("fetch - booking config data", bookinConfigData);
        setBookingConfig(bookinConfigData);
        setBookingTimeSlots(getBookingTimes(bookinConfigData));

        fetchServiceTypes();
      };

      fetchBookingConfig();
    } catch (error) {
      console.log("fetch error:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeStepIndex = (index: number) => {
    setStepIndex(index);
  };

  const moveToNextStep = () => {
    setStepIndex(stepIndex + 1);
  };

  const changeBookingTimeSlots = (timeSlots: IBookingSlots[]) => {
    setBookingTimeSlots(timeSlots);
  };

  const resetBookingTimeSlots = (slotLimit: number) => {
    setBookingTimeSlots((prevState) => {
      const newState = prevState.map((ts) => {
        return { time: ts.time, slots: slotLimit };
      });
      return newState;
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {loading ? (
        <div className="w-full h-[400px] flex flex-1 justify-center items-center">
          <Loading />
        </div>
      ) : (
        <>
          <BookAppointmentHeader stepIndex={stepIndex} />
          <BookAppointmentForm
            stepIndex={stepIndex}
            moveToNextStep={moveToNextStep}
            changeStepIndex={changeStepIndex}
            bookingConfig={bookingConfig as IBookingConfig}
            serviceTypes={serviceTypes}
            bookingTimeSlots={bookingTimeSlots}
            changeBookingTimeSlots={changeBookingTimeSlots}
            resetBookingTimeSlots={resetBookingTimeSlots}
            bookingFilled={bookingFilled}
            isEdit={isEdit}
            appointment={appointment}
          />
          <BookAppointmentFooter />
        </>
      )}
    </div>
  );
}

export default BookAppointment;
