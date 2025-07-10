import { formatDateLongWeek } from "@/utils/formatter";
import { inputLabelStyle, changeBoxStyle, changeButtonStyle } from "./styles";
import { IDateTime } from "./types";

const ChangeBookingDateTime = ({
  stepIndex,
  changeStepIndex,
  bookingDateTime,
}: {
  stepIndex: number;
  changeStepIndex: (index: number) => void;
  bookingDateTime: IDateTime;
}) => {
  return (
    <div className={changeBoxStyle}>
      <div>
        <label className={inputLabelStyle}>
          {formatDateLongWeek(bookingDateTime.date)}
        </label>
      </div>
      <div>
        <button
          className={changeButtonStyle}
          onClick={() => changeStepIndex(stepIndex)}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default ChangeBookingDateTime;
