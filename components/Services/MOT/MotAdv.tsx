"use client";
import Image from "next/image";
import carImg from "@/images/motservice_red_car.png";

function MotAdv() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-red-500 flex justify-center items-center h-[300px] md:h-[365px] lg:h-[330px]">
        <div className="w-[230px] h-[219px] md:w-[480px] md:h-[170px] flex flex-col gap-6 md:gap-8">
          <div className="font-[500] text-[24px] md:text-[32px]">
            <span className="text-white leading-[1] traking-[0%]">Get </span>
            <span className="text-yellow-300 leading-[1] traking-[0%]">
              Instant Car MOT 4 Certification{" "}
            </span>
            <span className="text-white leading-[1] traking-[0%]">
              After Inspection
            </span>
          </div>
          <div>
            <button
              type="button"
              className="bg-white text-black text-[21px] font-[400] w-[175px] h-[52px] flex justify-center items-center cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="h-[226px] md:h-[365px] lg:h-[330px] relative">
        <Image
          src={carImg}
          alt="car"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}

export default MotAdv;
