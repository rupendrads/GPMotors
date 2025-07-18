import { ShieldTick, Calendar } from "iconsax-reactjs";
import {
  headerStyle,
  descriptionStyle,
  listItemStyle,
} from "./MotBookNowStyle";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  header: string;
  description: string;
  listItems: string[];
};

function MotBookNowContent({ header, description, listItems }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={headerStyle}>
        <span>{header}</span>
      </div>
      <div className={descriptionStyle}>
        <span>{description}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          {listItems.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <div>
                {isMobile ? (
                  <ShieldTick size="12" color="#f3e330" variant="Bold" />
                ) : (
                  <ShieldTick size="24" color="#f3e330" variant="Bold" />
                )}
              </div>
              <div className={listItemStyle}>
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-end -mb-1 lg:-mb-3">
          <div className="flex border border-white">
            <button
              type="button"
              className="bg-white text-neutral-900 text-[7.5px] md:text-[9px] lg:text-[16px] font-[500]
            w-[73px] h-[23px] md:w-[86px] md:h-[27px] lg:w-[155px] lg:h-[48px] flex justify-center items-center cursor-pointer"
            >
              <div
                className="flex gap-1 md:gap-2 items-center justify-center cursor-pointer"
                onClick={() => router.push("/book-appointment")}
              >
                {isMobile ? (
                  <Calendar size="10" />
                ) : isTablet ? (
                  <Calendar size="12" />
                ) : (
                  <Calendar size="20" />
                )}
                <span>Book Now</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MotBookNowContent;
