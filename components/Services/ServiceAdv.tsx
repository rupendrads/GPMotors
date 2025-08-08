"use client";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

interface Props {
  imageData: StaticImageData;
  altText: string;
  title: string;
}

const ServiceAdv: React.FC<Props> = ({ imageData, altText, title }) => {
  const router = useRouter();

  return (
    <div className="w-full pl-4 pr-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-red-500 flex justify-center items-center h-[168px] md:h-[226px] lg:h-[330px]">
          <div className="w-[230px] h-[95px] md:w-[294px] md:h-[127px] lg:w-[450px] lg:h-[170px] flex flex-col gap-6 lg:gap-8 pl-8">
            <div className="font-[500] text-[16px] md:text-[21px] lg:text-[32px]">
              <span className="text-white leading-[1] traking-[0%]">
                {title}
              </span>
            </div>
            <div>
              <button
                type="button"
                className="bg-white text-black text-[12px] md:text-[21px] font-[400] w-[100px] h-[30px] md:w-[131px] md:h-[39px] lg:w-[175px] lg:h-[52px] flex justify-center items-center cursor-pointer"
                onClick={() => router.push("/book-appointment")}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="h-[284px] md:h-[226px] lg:h-[330px] relative">
          <Image
            src={imageData}
            alt={altText}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceAdv;
