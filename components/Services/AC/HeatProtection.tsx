"use client";
import Image from "next/image";
import HeatProtectionImage from "@/images/heat-protection.png";

function HeatProtection() {
  return (
    <div className="mt-8 w-full grid max-md:grid-cols-1 max-md:gap-8 grid-cols-2">
      <div className="flex flex-col gap-8 max-md:items-center">
        <div className="w-[258px] md:w-[331px] lg:w-[480px] ">
          <span className="font-[600] text-[27px] lg:text-[40px] capitalize leading-[1.2] tracker-[0%] text-neutral-700">
            Dont Let the Outside Heat Inside with Car AC Repair in London
          </span>
        </div>
        <div className="w-[258px] md:w-[331px] lg:w-[480px] flex flex-col gap-8 font-[400] text-[12px] lg:text-[18px] capitalize leading-[1.2] tracker-[0%] text-neutral-500">
          <div>
            Do you want to make your car slightly more comfortable, especially
            in the summer? It is impossible without a well-maintained car air
            conditioning system. If your car AC has stopped working or decreased
            efficiency due to prolonged use, don’t worry; GP motors offers
            detailed car AC repair services in London, UK.
          </div>
          <div>
            Whether you need to service your car’s AC or entire repairs, London
            Motor Sports is a reliable automotive garage for all air
            conditioning repairs. At LMS, we have modern tools and technologies
            for auto HVAC repair. So, we can overtake the repairs and
            maintenance of all types of cars.
          </div>
          <div>
            A well-maintained car AC keeps the car’s interior cool and helps
            reduce moisture in the air. Moreover, by maintaining or servicing
            your car AC on time or regularly, you can keep foul odours away from
            your car. 
          </div>
        </div>
      </div>
      <div className={imageWrapperStyle}>
        <Image
          src={HeatProtectionImage}
          alt="Heat Protection"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}

const imageWrapperStyle =
  "w-[305px] lg:w-[480px] h-[355px] md:h-[448px] lg:h-[656px] relative max-md:m-auto md:ml-auto";

export default HeatProtection;
