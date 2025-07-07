"use client";
import MotCheck from "./MotCheck";
import MotAdv from "./MotAdv";
import MotHeader from "./MotHeader";
import MotBookNow from "./MotBookNow";
import MotFaq from "./MotFaq";

function MotService() {
  return (
    <div className="flex flex-col gap-8">
      <MotHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <MotCheck />
        <MotAdv />
        <MotBookNow />
        <MotFaq />
      </div>
    </div>
  );
}

export default MotService;
