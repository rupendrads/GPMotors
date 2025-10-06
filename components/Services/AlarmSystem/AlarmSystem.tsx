import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import AlarmSystemHeader from "./AlarmSystemHeader";
import AlarmSystemRepair from "./AlarmSystemRepair";
import AlarmSystemAdv from "./AlarmSystemAdv";
import AlarmSystemSubHeader from "./AlarmSystemSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function AlarmSystem() {
  return (
    <div className="flex flex-col gap-8">
      <AlarmSystemHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <AlarmSystemSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <AlarmSystemRepair />
        <AlarmSystemAdv />
      </div>
    </div>
  );
}

export default AlarmSystem;
