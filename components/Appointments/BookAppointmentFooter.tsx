"use client";

function BookAppointmentFooter() {
  return (
    <div className={containerStyle}>
      <footer className={footerStyle}>
        <span>Didnt find a timeslot that suits you?</span>
        <span className="font-[500] text-yellow-300">View stores nearby</span>
      </footer>
    </div>
  );
}

const containerStyle = "w-full h-[80px] bg-neutral-800 flex items-center p-4";
const footerStyle =
  "w-[500px] mx-auto flex flex-col text-white text-[17px] font-[400]";

export default BookAppointmentFooter;
