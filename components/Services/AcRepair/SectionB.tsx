"use client";

import { ShieldTick } from "iconsax-reactjs";
import { useState, useEffect } from "react";

type Props = {
  listItems: string[];
};

function SectionB({ listItems }: Props) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[252px] lg:w-[340px] flex flex-col gap-6 md:gap-10">
        {listItems.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <div>
              {isDesktop ? (
                <ShieldTick size="24" color="#f3e330" variant="Bold" />
              ) : (
                <ShieldTick size="18" color="#f3e330" variant="Bold" />
              )}
            </div>
            <div className="font-[400] text-[13.5px] lg:text-[18px] text-white capitalize leading-[100%] traking-[0%]">
              <span>{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionB;
