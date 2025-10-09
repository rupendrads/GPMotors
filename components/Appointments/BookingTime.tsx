import { formatTime } from "@/utils/formatter";
import { IBookingSlots, IDateTime } from "./types";

type Props = {
  bookingDateTime: IDateTime;
  updateBookingTime: (time: string) => void;
  bookingTimeSlots: IBookingSlots[];
};

const BookingTime = ({
  bookingDateTime,
  updateBookingTime,
  bookingTimeSlots,
}: Props) => {
  return (
    <div className="w-full grid grid-cols-3 gap-3">
      {bookingTimeSlots.map((timeSlot) => {
        return (
          <div
            key={timeSlot.time}
            className={`flex flex-col justify-center gap-1 mt-1 ${
              bookingDateTime.date === undefined
                ? "opacity-50 pointer-events-none"
                : ""
            }`}
          >
            <button
              className={
                bookingDateTime.time === timeSlot.time
                  ? "bg-green-500 text-white hover:cursor-pointer text-[18px] font-[600] py-1 px-4 rounded"
                  : `hover:bg-green-500 hover:cursor-pointer text-[18px] font-[600] py-1 px-4 rounded ${
                      timeSlot.slots === 0
                        ? "opacity-60 pointer-events-none bg-red-500 hover:bg-red-500"
                        : ""
                    }`
              }
              onClick={() => updateBookingTime(timeSlot.time)}
            >
              {formatTime(timeSlot.time)}
            </button>
            <div className="w-full text-sm text-zinc-900 flex justify-center">
              <div
                className={`rounded border border-zinc-700 w-[24px] h-[24px] flex justify-center items-center ${
                  timeSlot.slots === 0 ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                {timeSlot.slots}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookingTime;
