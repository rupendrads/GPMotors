"use client";
import { ShieldTick } from "iconsax-reactjs";

const checkData = [
  {
    id: 1,
    line1: "For Smooth Use,",
    line2: "You Can Book A Car Below 3 Years",
  },
  {
    id: 2,
    line1: "Cars Over 3 Years Must Be Taken",
    line2: "For The MOT Check On Time",
  },
  {
    id: 3,
    line1: "For Over 40 Years Old Cars",
    line2: "Car MOT Exemptio Has Been A Must",
  },
  {
    id: 4,
    line1: "Go For Major Changes",
    line2: "Above 40+ Years Old Vehicle",
  },
  {
    id: 5,
    line1: "Hold Car MOT Certificate",
    line2: "For A Safe Drive",
  },
];

function MotCheck() {
  return (
    <div>
      <div className="mb-8 max-lg:text-center">
        <span
          className="font-[600] text-[24px] lg:text-[40px] 
        text-neutral-700 leading-[1.5] traking-[0%] "
        >
          Particulars For Car MOT Check
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4">
        {checkData.map((data, index) => {
          return (
            <div
              key={data.id}
              className={`flex flex-col gap-y-4 bg-red-500 text-white py-6 p-6 max-md:p-8 
                ${
                  index <= 2 ? "md:max-lg:col-span-2" : "md:max-lg:col-span-3"
                }`}
            >
              <div className="h-[32px] w-[32px] bg-red-400 rounded-full flex flex justify-center items-center">
                <ShieldTick size="24" color="#f3e330" variant="Bold" />
              </div>

              <div className="max-w-[248px] md:max-w-[160px] font-[500] text-[18px] lg:text-[22px]">
                <span className="text-yellow-300 leading-[25px] traking-[0%]">
                  {data.line1}{" "}
                </span>
                <span className="leading-[25px] traking-[0%]">
                  {data.line2}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MotCheck;
