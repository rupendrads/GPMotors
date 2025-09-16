import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import BrakeDiscReplacementServiceHeader from "./BrakeDiscReplacementServiceHeader";
import BrakeDiscReplacementServiceSubHeader from "./BrakeDiscReplacementServiceSubHeader";
import BrakeDiscReplacementRepair from "./BrakeDiscReplacementRepair";
import BrakeDiscReplacementServiceAdv from "./BrakeDiscReplacementServiceAdv";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function BrakeDiskReplacementService() {
  return (  
    <div className="flex flex-col gap-8">
      <BrakeDiscReplacementServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <BrakeDiscReplacementServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <BrakeDiscReplacementRepair />
        <BrakeDiscReplacementServiceAdv />
      </div>
    </div>
  );
}

export default BrakeDiskReplacementService;
