"use client";

import MotBookNow1 from "./MotBookNow1";
import MotBookNow2 from "./MotBookNow2";

function MotBookNow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px] md:h-[360px] lg:h-[460px]">
      <MotBookNow1 />
      <MotBookNow2 />
    </div>
  );
}

export default MotBookNow;
