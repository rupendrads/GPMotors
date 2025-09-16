"use client";

import LoanImage from "@/images/loan.png";
import RateImage from "@/images/rate.png";
import PolicyImage from "@/images/policy.png";
import Image, { StaticImageData } from "next/image";
import { Calendar } from "iconsax-reactjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  imageData: StaticImageData;
  altText: string;
  title: string;
  desc: string;
}

const data = {
  loan: {
    title: "Best Prices",
    desc: "All mechanical services are available at affordable rates ",
  },
  rate: {
    title: "100% Guarantee",
    desc: "All of our repairs and services come with a guarantee period",
  },
  policy: {
    title: "Certified Mechanics",
    desc: "All of our mechanics are qualified and are regularly trained.",
  },
};

const ServiceHeader: React.FC<Props> = ({
  imageData,
  altText,
  title,
  desc,
}) => {
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const splitIndex = title.indexOf("GP");

  const titlePart1 = title.slice(0, splitIndex);
  const titlePart2 = title.slice(splitIndex);

  return (
    <div className={containerStyle}>
      <div className="w-full h-[662px] relative">
        <Image
          src={imageData}
          alt={altText}
          layout="fill"
          objectFit="cover"
          priority
          z-0="true"
        />
        <div className="absolute w-full h-full flex pl-[5%] md:pl-[10%] pt-[20px] md:pt-[100px]">
          <div className="flex flex-col">
            <div className="w-[270px] h-[220px] md:w-[680px] md:h-[120px] lg:w-[820px] lg:h-[144px]">
              <span className={titlePart1Style}>{titlePart1}</span>
              <span className={titlePart2Style}>{titlePart2}</span>
            </div>
            <div className="w-[270px] h-[280px] md:w-[562px] md:h-[200px] lg:w-[840px] lg:h-[130px]">
              <span className="font-[400] text-[16.5px] md:text-[20px] lg:text-[18px] leading-[1.2] tracker=[0%] capitalize text-white">
                {desc}
              </span>
            </div>
            <button
              className="w-[155px] h-[48px] bg-red-500 text-white 
              flex justify-center items-center gap-2 cursor-pointer z-10"
              onClick={() => router.push("/book-appointment")}
            >
              <Calendar size="20" />
              <span className="font-[500] text-[16px]">Book Now</span>
            </button>
          </div>
        </div>
        <div className="w-full h-full pr-[2%] pl-[2%] absolute flex flex-col justify-end">
          <div className={lprBoxStyle}>
            <div className={lprItemBoxStyle}>
              <div className="flex items-center">
                {isDesktop ? (
                  <Image src={LoanImage} height={64} width={64} alt={altText} />
                ) : (
                  <Image src={LoanImage} height={48} width={48} alt={altText} />
                )}
              </div>
              <div className={lprTitleDescBoxStyle}>
                <div className={lrpTitleStyle}>{data.loan.title}</div>
                <div className={lprDescStyle}>{data.loan.desc}</div>
              </div>
            </div>
            <div className={lprItemBoxStyle}>
              <div className="flex items-center">
                {isDesktop ? (
                  <Image src={RateImage} height={64} width={64} alt={altText} />
                ) : (
                  <Image src={RateImage} height={48} width={48} alt={altText} />
                )}
              </div>
              <div className={lprTitleDescBoxStyle}>
                <div className={lrpTitleStyle}>{data.rate.title}</div>
                <div className={lprDescStyle}>{data.rate.desc}</div>
              </div>
            </div>
            <div className={lprItemBoxStyle}>
              <div className="flex items-center">
                {isDesktop ? (
                  <Image
                    src={PolicyImage}
                    height={64}
                    width={64}
                    alt={altText}
                  />
                ) : (
                  <Image
                    src={PolicyImage}
                    height={48}
                    width={48}
                    alt={altText}
                  />
                )}
              </div>
              <div className={lprTitleDescBoxStyle}>
                <div className={lrpTitleStyle}>{data.policy.title}</div>
                <div className={lprDescStyle}>{data.policy.desc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle = "w-full h-[902px] md:h-[842px] lg:h-[812px]";

const titlePart1Style =
  "font-[700] text-[32px] md:text-[40px] lg:text-[48px] leading-[1.4] tracker=[0%] capitalize text-white";
const titlePart2Style =
  "font-[700] text-[32px] md:text-[40px] lg:text-[48px] leading-[1.4] tracker=[0%] capitalize text-yellow-300";

const lprBoxStyle =
  "md:max-lg:w-[725px] md:max-lg:self-center h-[322px] md:h-[225px] bg-red-500 mb-[-240px] md:mb-[-180px] lg:mb-[-150px] z-10 grid md:grid-cols-2 lg:grid-cols-3 place-items-center";
const lprItemBoxStyle =
  "flex gap-4 lg:gap-2 w-[277px] lg:w-[330px] h-[80px] lg:h-[140px] items-center justify-center";

const lprTitleDescBoxStyle =
  "flex flex-col gap-1 text-white w-[200px] lg:w-[235px]";

const lrpTitleStyle =
  "font-[800] text-[15px] lg:text-[20px] uppercase leading-[1.2] tracker-[0%]";

const lprDescStyle =
  "w-[220px] lg:w-[240px] font-[400] text-[12px] lg:text-[16px] leading-[16.5px] lg:leading-[22px]";

export default ServiceHeader;
