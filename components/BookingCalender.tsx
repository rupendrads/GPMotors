import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { IDateTime } from "./types";
import "react-day-picker/style.css";

type Props = {
  bookingDateTime: IDateTime;
  updateBookingDate: (date: Date) => void;
};

const BookingCalender = ({ bookingDateTime, updateBookingDate }: Props) => {
  const defaultClassNames = getDefaultClassNames();

  const disabledDays = [{ before: new Date() }, { dayOfWeek: [0] }];

  return (
    <div className="mx-auto mb-2">
      <DayPicker
        animate
        mode="single"
        selected={bookingDateTime.date}
        onSelect={updateBookingDate}
        disabled={disabledDays}
        required
        classNames={{
          root: `${defaultClassNames.root} border border-neutral-300`,
          chevron: `fill-black`,
          month_caption: `flex items-center justify-center h-[2.75rem] text-[14px] font-[600] leading-[100%] traking-[0%] text-zinc-800`,
          day: `text-[12px] font-[600] leading-[100%] traking-[0%] text-lime-700`,
          today: `text-[12px] font-[600] leading-[100%] traking-[0%]`,
          selected: `border-2 border-lime-700`,
        }}
      />
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex items-center gap-2 font-[500] text-[15px] text-lime-700 leading-[100%] traking-[0%]">
          <div className="bg-lime-800 w-[7px] h-[7px] rounded-full"></div>
          <span>Days with available times</span>
        </div>
        <div className="text-[15px] font-[400] text-orange-950 leading-[100%] traking-[0%]">
          {bookingDateTime.date
            ? `${bookingDateTime.date.toLocaleDateString("en-GB", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}`
            : "Pick a day"}
        </div>
      </div>
    </div>
  );
};

export default BookingCalender;
