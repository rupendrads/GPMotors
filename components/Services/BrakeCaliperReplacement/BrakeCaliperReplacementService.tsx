import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import BrakeCaliperReplacementServiceHeader from "./BrakeCaliperReplacementServiceHeader";
import BrakeCaliperReplacementRepair from "./BrakeCaliperReplacementRepair";
import BrakeCaliperReplacementServiceAdv from "./BrakeCaliperReplacementServiceAdv";
import BrakeCaliperReplacementServiceSubHeader from "./BrakeCaliperReplacementServiceSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function BrakeCaliperReplacementService() {
  return (
    <div className="flex flex-col gap-8">
      <BrakeCaliperReplacementServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <BrakeCaliperReplacementServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <BrakeCaliperReplacementRepair />
        <BrakeCaliperReplacementServiceAdv />
      </div>
    </div>
  );
}

export default BrakeCaliperReplacementService;
