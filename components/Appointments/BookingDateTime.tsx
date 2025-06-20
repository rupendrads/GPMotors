import BookingCalender from "./BookingCalender";
import BookingTime from "./BookingTime";
import { IBookingSlots, IDateTime } from "./types";

type Props = {
  bookingDateTime: IDateTime;
  updateBookingDate: (date: Date) => void;
  updateBookingTime: (time: string) => void;
  bookingTimeSlots: IBookingSlots[];
  disabledDates: Date[];
};

const BookingDateTime = ({
  bookingDateTime,
  updateBookingDate,
  updateBookingTime,
  bookingTimeSlots,
  disabledDates,
}: Props) => {
  return (
    <>
      <div>
        <div>
          <label className={calenderLabelStyle}>Select a date</label>
        </div>
        <BookingCalender
          bookingDateTime={bookingDateTime}
          updateBookingDate={updateBookingDate}
          disabledDates={disabledDates}
        />
      </div>
      <div>
        <label className={calenderLabelStyle}>Select a time</label>
        <BookingTime
          bookingDateTime={bookingDateTime}
          updateBookingTime={updateBookingTime}
          bookingTimeSlots={bookingTimeSlots}
        />
      </div>
    </>
  );
};

const calenderLabelStyle =
  "text-[18px] font-[600] leading-[100%] traking-[0%] text-zinc-600";

export default BookingDateTime;
