"use client";
import { ReactNode } from "react";

type MotInspectionCheckType = {
  children: ReactNode;
  title: string;
  content: string;
};

function MOTInspectionCheck({
  title,
  content,
  children,
}: MotInspectionCheckType) {
  return (
    <div className="flex flex-col">
      {children}
      <div className="flex flex-col gap-[16px] p-[45px] bg-zinc-100">
        <div className="text-[20px] lg:text-[28px] font-[500] text-gray-950 leading-[125%] traking-[0%]">
          {title}
        </div>
        <div className="text-[13px] lg:text-[18px] font-[400] text-zinc-400 leading-[160%] traking-[0%]">
          {content}
        </div>
      </div>
    </div>
  );
}

export default MOTInspectionCheck;
