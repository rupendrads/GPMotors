import {
  convertMinutesToTime,
  convertTimeToMinutes,
  countOccurrences,
} from "@/utils/calc";
import {
  IBookingConfig,
  IBookingDB,
  IBookingFilled,
  IBookingSlots,
} from "./types";
import { formatDate } from "@/utils/formatter";
import { getAllFutureDatesInMonth } from "@/utils/calender";

const getNoOfSlots = (
  officeEndTime: string,
  officeStartTime: string,
  slotGap: number
) => {
  const endTimeMinutes = convertTimeToMinutes(officeEndTime);
  console.log("endTimeMinutes", endTimeMinutes);
  const startTimeMinutes = convertTimeToMinutes(officeStartTime);
  console.log("startTimeMinutes", startTimeMinutes);
  const totalMinutes = endTimeMinutes - startTimeMinutes;
  console.log("totalMinutes", totalMinutes);
  const slotGapMinutes = slotGap * 60;
  console.log("slotGapMinutes", slotGapMinutes);
  const noOfSlots = Math.floor(totalMinutes / slotGapMinutes);
  console.log("noOfSlots", noOfSlots);
  return noOfSlots;
};

export const getBookingTimes = ({
  officeStartTime,
  officeEndTime,
  noOfEmployees,
  slotGap,
  limitPerSlot,
}: IBookingConfig) => {
  console.log("maxMotPerSlot", limitPerSlot);
  console.log("noOfEmployees", noOfEmployees);

  const noOfSlots = getNoOfSlots(officeEndTime, officeStartTime, slotGap);
  console.log("noOfSlots", noOfSlots);

  const bookingTimeSlots: IBookingSlots[] = [];

  let startMinutes = convertTimeToMinutes(officeStartTime);
  for (let i = 0; i < noOfSlots; i++) {
    if (i > 0) {
      startMinutes = startMinutes + slotGap * 60;
    }
    bookingTimeSlots.push({
      time: convertMinutesToTime(startMinutes),
      slots: noOfEmployees,
    });
  }
  console.log("bookingTimeSlots", bookingTimeSlots);
  return bookingTimeSlots;
};

export const getUpdatedTimeSlots = (
  date: Date,
  bookingFilled: IBookingFilled[],
  bookingSlots: IBookingSlots[],
  slotLimit: number
) => {
  const bookingFilledForSelectedDate: IBookingFilled = bookingFilled.find(
    (bf) => formatDate(new Date(bf.date.toString())) === formatDate(date)
  ) as IBookingFilled;

  const updatedTimeSlots: IBookingSlots[] = [];
  if (bookingFilledForSelectedDate) {
    bookingSlots.map((bs) => {
      const count = countOccurrences(
        bookingFilledForSelectedDate.times,
        bs.time
      );
      updatedTimeSlots.push({
        time: bs.time,
        slots: slotLimit - count,
      });
    });
  }
  return updatedTimeSlots;
};

export const getDisabledDates = (
  bookingFilled: IBookingFilled[],
  bookingSlots: IBookingSlots[],
  slotLimit: number
) => {
  const disabledDates: Date[] = [];
  let updatedTimeSlots: IBookingSlots[] = [];

  bookingFilled.map((booking) => {
    updatedTimeSlots = [];
    bookingSlots.map((bs) => {
      const count = countOccurrences(booking.times, bs.time);
      updatedTimeSlots.push({
        time: bs.time,
        slots: slotLimit - count,
      });
    });
    const utsFiltered = updatedTimeSlots.filter((uts) => uts.slots > 0);
    if (utsFiltered.length === 0) {
      disabledDates.push(new Date(booking.date.toString()));
    }
  });

  return disabledDates;
};

export const getBookingsAvailable = (bookings: IBookingDB[]) => {
  const filledBooking: IBookingFilled[] = [];
  const datesInMonth = getAllFutureDatesInMonth({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  console.log("datesInMonth", datesInMonth);

  datesInMonth.map((date) => {
    console.log("booking data date", date);
    const data = bookings.filter(
      (b) => formatDate(new Date(b.BookingDate as Date)) === formatDate(date)
    );
    console.log("booking data filtered", data);
    const timeSlots: string[] = [];
    if (data.length > 0) {
      data.map((item) => {
        timeSlots.push(item.BookingTime);
      });
      filledBooking.push({
        date: data[0].BookingDate as Date,
        times: timeSlots,
      });
    }
  });
  return filledBooking;
};
