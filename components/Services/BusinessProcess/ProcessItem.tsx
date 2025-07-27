import Image from "next/image";

type itemType = {
  id: number;
  title1: string;
  title2: string;
  description: string;
  imageUrl: string;
};

function ProcessItem({ item }: { item: itemType }) {
  return (
    <div className={containerStyle}>
      <div className={numberBoxStyle}>
        <div className={numberStyle}>{item.id}</div>
        <div className={iconBoxStyle}>
          <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] relative mt-[24px]">
            <Image
              src={item.imageUrl}
              alt={item.title1.concat(item.title2)}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className={titleStyle}>
        <span className="text-center">{item.title1}</span>
        <span className="text-center">{item.title2}</span>
      </div>
      <div className={descriptionStyle}>{item.description}</div>
    </div>
  );
}

const containerStyle =
  "max-w-[210px] lg:max-w-[260px] flex flex-col items-center gap-4";

const numberBoxStyle =
  "w-[112px] h-[127px] lg:w-[149px] lg:h-[164px] flex flex-col items-center";
const numberStyle =
  "w-[45px] h-[45px] lg:w-[61px] lg:h-[61px] rounded rounded-full bg-neutral-800 font-[700] text-[24px] lg:text-[32px] text-white flex justify-center items-center z-1";
const iconBoxStyle =
  "w-[112px] h-[112px] lg:w-[149px] lg:h-[149px] bg-red-500 mt-[-30px] lg:mt-[-46px] z-0 rounded-full flex justify-center items-center";

const titleStyle =
  "font-[600] text-[18px] lg:text-[24px] leading-[100%] tracking-[0%] capitalize text-neutral-700 min-h-[54px] flex flex-col justify-center items-center gap-1";

const descriptionStyle =
  "max-w-[210px] lg:max-w-[260px] h-[45px] font-[400] text-[9px] lg:text-[12px] leading-[100%] tracking-[-4%] text-zinc-400 text-center";

export default ProcessItem;
