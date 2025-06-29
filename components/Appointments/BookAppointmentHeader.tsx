"use client";

type Props = {
  stepIndex: number;
};

function BookAppointmentHeader(props: Props) {
  return (
    <div className={containerStyle}>
      <header className={headerStyle}>
        <button className={buttonStyle}>
          {props.stepIndex > 1 ? (
            <span className="material-icons w-[26px] h-[26px] border rounded-full">
              check_small
            </span>
          ) : (
            <span className={numberStyle}>1</span>
          )}
          <span>What</span>
        </button>
        <button className={buttonStyle} disabled={props.stepIndex === 1}>
          {props.stepIndex > 2 ? (
            <span className="material-icons w-[26px] h-[26px] border rounded-full">
              check_small
            </span>
          ) : (
            <span className={numberStyle}>2</span>
          )}
          <span>When</span>
        </button>
        <button className={buttonStyle} disabled={props.stepIndex !== 3}>
          <span className={numberStyle}>3</span>
          <span>Who</span>
        </button>
      </header>
    </div>
  );
}

const containerStyle =
  "w-full h-[50px] bg-neutral-800  flex justify-center items-center";
const headerStyle = "flex gap-8";
const buttonStyle =
  "text-yellow-300 text-[18px] font-[500] flex gap-2 disabled:text-yellow-700 disabled:cursor-not-allowed";
const numberStyle =
  "w-[26px] h-[26px] rounded-full border flex justify-center items-center";

export default BookAppointmentHeader;
