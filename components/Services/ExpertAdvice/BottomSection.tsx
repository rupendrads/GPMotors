function BottomSection() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-8 bg-red-500 text-white 
    px-[16px] md:px-[48px] lg:px-[8px] 
    py-[24px] md:py-[48px] lg:py-[16px] rounded-[8px]"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center lg:px-[8px] max-lg:gap-2">
          <div
            className="font-[600] text-[16.14px] md:text-[35.64px] lg:text-[24px] 
          leading-[20.17px] md:leading-[44.55px] lg:leading-[33.75px] 
          tracking-[-0.4px] md:tracking-[-0.89px] lg:tracking-[-0.68px]"
          >
            Need Expert Advice on Your Car Service?
          </div>
          <div
            className="font[400] text-[8.37px] md:text-[18.48px] lg:text-[12px] 
          leading-[13.39px] md:leading-[29.57px] lg:leading-[22.4px] 
          tracking-[-0.24px] md:tracking-[-0.53px] lg:tracking-[-0.4px] text-slate-300"
          >
            Our friendly team is here to help. Call now for instant assistance
            and expert recommendations.
          </div>
        </div>
      </div>
      <div
        className="flex max-lg:flex-col max-lg:flex-col-reverse 
      lg:items-center justify-center gap-[24px] md:gap-[48px] lg:gap-[8px]"
      >
        <div className="lg:mr-[16px]">
          <button
            className="w-[142px] h-[48px] md:w-[187px] md:h-[66px] lg:w-[142px] lg:h-[48px]
          bg-white text-black rounded-[8px] font-[600] 
          text-[14px] md:text-[18.48px] lg:text-[14px] 
          leading-[14px] md:leading-[18.48px] lg:leading-[14px] 
          tracking-[-0.28px] md:tracking-[-0.37px] lg:tracking-[-0.28px]"
          >
            Request a Call
          </button>
        </div>
        <div className="flex flex-col gap-1 md:gap-3 lg:gap-1">
          <div
            className="font-[600] text-[17.53px] md:text-[38.72px] lg:text-[22px] 
          leading-[19.28px] md:leading-[42.59px] lg:leading-[24.2px] 
          tracking-[-0.32px] md:tracking-[-0.7px] lg:tracking-[-0.4px] 
          flex lg:justify-center max-md:text-yellow-300"
          >
            +44 (0) 20 1234 5678
          </div>
          <div
            className="font-[400] text-[8.25px] md:text-[18.22px] lg:text-[12px] 
          leading-[4.95px] md:leading-[10.93px] lg:leading-[13.2px] 
          tracking-[-0.15px] md:tracking-[-0.33px] lg:tracking-[-0.4px] 
          text-slate-300 flex lg:justify-center"
          >
            Available 7 days a week
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
