"use client";
import Image from "next/image";
import motServiceHeaderImage from "@/images/motservice_header.png";
import motServiceHeaderMdImage from "@/images/motservice_header_md.jpg";
import ResponsiveImage from "@/components/ResponsiveImage";

function MotHeader() {
  const desktopImage = (
    <Image
      src={motServiceHeaderImage}
      alt="mot service"
      layout="fill"
      objectFit="cover"
      priority
      className="rounded z-0"
    />
  );

  const tabletImage = (
    <Image
      src={motServiceHeaderMdImage}
      alt="mot service"
      layout="fill"
      objectFit="cover"
      priority
      className="rounded z-0"
    />
  );

  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-[600px] relative">
        <ResponsiveImage
          desktopImage={desktopImage}
          tabletImage={tabletImage}
          mobileImage={tabletImage}
        />
        <div className="z-10 absolute w-[200px] md:w-[466px] lg:w-[640px] top-[20%] left-[10%] max-md:left-[15%] max-lg:left-[30%] pt-10 gap-y-8 flex flex-col">
          <div className="leading-[2] traking-[0%]">
            <span className="text-[36px] lg:text-[64px] font-[700] text-white leading-[100%] traking-[0%]">
              Fail-Proof Car{" "}
              <span className="text-yellow-300">MOT Service</span> In One Go
            </span>
          </div>
          <div className="flex gap-8 max-md:flex-col max-md:items-center">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white text-[16px] font-[500] w-[155px] h-[48px] flex justify-center items-center"
            >
              Book Now
            </button>
            <div className="flex max-md:h-[45px] h-[48px] max-md:w-[120px] w-[165px]">
              <div className="w-[41px] bg-indigo-900 rounded-l-lg flex flex-col justify-center items-center gap-1">
                <div className="rounded-full border border-dotted border-yellow-300 h-[12px] w-[12px]"></div>
                <div className="font-[500] text-[12px] text-white">UK</div>
              </div>
              <div className="bg-white grow-1 rounded-r-lg flex justify-center items-center">
                <span className="font-[400] text-[12px] max-md:text-[10px] text-zinc-500">
                  MOT Checker
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotHeader;
