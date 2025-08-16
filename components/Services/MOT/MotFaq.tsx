"use client";
import AccordionC from "@/components/AccordionC/Accordionc";
import faqData from "./faq";
import { useEffect, useState } from "react";

const faqHeaderSection1 = "Frequently Asked ";
const faqHeaderSection2 = "Question";
const faqDescription = `Have some questions before you get started? Check out our FAQs below or call us (+62) 9027829192`;

function MotFaq() {
  const [isDesktop, setIsDesktop] = useState(false);
  const len = faqData.length / 2;
  const faqCol1 = faqData.slice(0, len);
  const faqCol2 = faqData.slice(len);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={pageContainerStyle}>
      <div className="flex justify-center">
        <div className={faqHeaderContainerStyle}>
          <div className={faqHeaderTitleStyle}>
            <span>{faqHeaderSection1}</span>
            <span className="bg-lime-800 text-white">{faqHeaderSection2}</span>
          </div>
          <div className={faqHeaderDescriptionStyle}>
            <span>{faqDescription}</span>
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 ${
          isDesktop ? "gap-8" : ""
        }`}
      >
        {isDesktop ? (
          <>
            <div>
              <AccordionC data={faqCol1} />
            </div>
            <div>
              <AccordionC data={faqCol2} />
            </div>
          </>
        ) : (
          <div>
            <AccordionC data={faqData} />
          </div>
        )}
      </div>
    </div>
  );
}

const pageContainerStyle = "my-8 flex flex-col gap-8 z-70";
const faqHeaderContainerStyle =
  "max-md:w-[224px] w-[550px] flex flex-col gap-3";
const faqHeaderTitleStyle =
  "font-[600] text-[24px] md:text-[40px] leading-[38px] md:leading-[62px] traking-[0%] max-sm:text-center";
const faqHeaderDescriptionStyle =
  "font-[400] max-md:text-[10px] text-[16px] text-neutral-500 text-center max-md:leading-[20px] leading-[30px] traking-[0.5%]";

export default MotFaq;
