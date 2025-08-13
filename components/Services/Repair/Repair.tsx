"use client";

import Image, { StaticImageData } from "next/image";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import { titleDesc } from "./types";

interface Props {
  imageData: StaticImageData;
  altText: string;
  titleDescriptions: titleDesc[];
  listItems: string[];
}

const Repair: React.FC<Props> = ({
  imageData,
  altText,
  titleDescriptions,
  listItems,
}) => {
  return (
    <div className="mt-8 border-red-800 w-full">
      <div className="w-full h-[1100px] md:h-[600px] lg:h-[750px] relative">
        <Image
          src={imageData}
          alt={altText}
          layout="fill"
          objectFit="cover"
          priority
          z-0="true"
        />
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 z-10 absolute">
          <SectionA titleDescriptions={titleDescriptions} />
          <SectionB listItems={listItems} />
        </div>
      </div>
    </div>
  );
};

export default Repair;
