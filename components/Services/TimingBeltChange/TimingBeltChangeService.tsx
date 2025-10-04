import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import TimingBeltChangeServiceHeader from "./TimingBeltChangeServiceHeader";
import TimingBeltChangeRepair from "./TimingBeltChangeRepair";
import TimingBeltChangeServiceSubHeader from "./TimingBeltChangeServiceSubHeader";
import TimingBeltChangeServiceAdv from "./TimingBeltChangeServiceAdv";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function TimingBeltChangeService() {
  return (
    <div className="flex flex-col gap-8">
      <TimingBeltChangeServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16"> 
        <TimingBeltChangeServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <TimingBeltChangeRepair />
        <TimingBeltChangeServiceAdv />
      </div>
    </div>
  );
}

export default TimingBeltChangeService;