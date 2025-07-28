"use client";

function SectionA() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className={boxStyle}>
        <span className="font-[700] text-[27px] lg:text-[40px] text-white capitalize leading-[120%] tracker-[0%]">
          What Does GP Motors Offer Under Car Air Conditioning Repair?
        </span>
      </div>
      <div className={boxStyle}>
        <span className="font-[500] text-[12px] text-white capitalize leading-[100%] tracker-[0%] text-[sky-100]">
          When you book vehicle air conditioning services in London at LMS, our
          specialists offer a set of diverse car AC repair services, including:
        </span>
      </div>
      <div className={boxStyle}>
        <div className="w-[266px] lg:w-[340px]">
          <span className="w-[340px] font-[700] text-[16px] capitalize leading-[100%] tracker-[0%] text-yellow-300">
            How Much Does Car AC Repair Cost at GP Motors?
          </span>
        </div>
      </div>
      <div className={boxStyle}>
        <span className="font-[500] text-[12px] lg:text-[16px] capitalize leading-[100%] tracker-[0%] text-sky-100">
          On average, car AC repair costs around £50 – £200 for leak repairs in
          London, UK. At London Motor Sports, you can get car AC compressor
          repair services for £400 – £1000. The cost for AC condenser repair is
          £200 – £550. If you need Aircon regas services, you can get them for
          £50 – £250. However, these price brackets could vary based on your
          car’s air conditioning system condition, life, and make and model.
        </span>
      </div>
    </div>
  );
}

const boxStyle = "w-[252px] md:w-[300px] lg:w-[500px] lg:pl-[70px]";

export default SectionA;
