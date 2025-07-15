"use client";
import MotCheck from "./MotCheck";
import MotInspectionCheckList from "./MotInspectionCheckList";
import MotAdv from "./MotAdv";
import MotHeader from "./MotHeader";
import MotBookNow from "./MotBookNow";
import MotFaq from "./MotFaq";
import MotVideo from "./MotVideo";

function MotService() {
  return (
    <div className="flex flex-col gap-8">
      <MotHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <MotCheck />
        <MotInspectionCheckList />
        <MotAdv />
        <MotVideo />
        <MotBookNow />
        <MotFaq />
      </div>
    </div>
  );
}

export default MotService;
