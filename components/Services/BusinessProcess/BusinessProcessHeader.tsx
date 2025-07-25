function BusinessProcessHeader() {
  return (
    <div className={containerStyle}>
      <div className="flex flex-col items-center gap-4 max-w-[210px] md:max-w-[540px] lg:max-w-full">
        <div className={subtitleStyle}>How it works</div>
        <div className={titleStyle}>our business process</div>
      </div>
    </div>
  );
}

const containerStyle = "flex justify-center";

const titleStyle =
  "font-semibold max-md:text-[27px] text-[40px] leading-[100%] tracking-[0%] text-neutral-700 text-center capitalize";

const subtitleStyle =
  "font-[500] text-[20px] leading-[100%] tracking-[0%] text-red-600 text-center capitalize";

export default BusinessProcessHeader;
