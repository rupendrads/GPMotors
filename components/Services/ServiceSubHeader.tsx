"use client";

import Image, { StaticImageData } from "next/image";

interface Props {
  imageData: StaticImageData;
  altText: string;
  title: string;
  desc: string[];
}

const ServiceSubHeader: React.FC<Props> = ({
  imageData,
  altText,
  title,
  desc,
}) => {
  return (
    <div className="mt-8 w-full grid max-md:grid-cols-1 max-md:gap-8 grid-cols-2">
      <div className="flex flex-col gap-8 max-md:items-center">
        <div className="w-[258px] md:w-[331px] lg:w-[480px] ">
          <span className="font-[600] text-[27px] lg:text-[40px] capitalize leading-[1.2] tracker-[0%] text-neutral-700">
            {title}
          </span>
        </div>
        <div className="w-[258px] md:w-[331px] lg:w-[480px] flex flex-col gap-8 font-[400] text-[12px] lg:text-[18px] capitalize leading-[1.2] tracker-[0%] text-neutral-500">
          {desc.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
      <div className={imageWrapperStyle}>
        <Image
          src={imageData}
          alt={altText}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

const imageWrapperStyle =
  "w-[305px] lg:w-[480px] h-[355px] md:h-[448px] lg:h-[656px] relative max-md:m-auto md:ml-auto";

export default ServiceSubHeader;
