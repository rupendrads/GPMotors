import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import AlternatorReplacementServiceHeader from "./AlternatorReplacementServiceHeader";
import AlternatorReplacementRepair from "./AlternatorReplacementRepair";
import AlternatorReplacementServiceAdv from "./AlternatorReplacementServiceAdv";
import AlternatorReplacementServiceSubHeader from "./AlternatorReplacementServiceSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function AlternatorReplacementService() {
  return (
    <div className="flex flex-col gap-8">
      <AlternatorReplacementServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <AlternatorReplacementServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <AlternatorReplacementRepair />
        <AlternatorReplacementServiceAdv />
      </div>
    </div>
  );
}

export default AlternatorReplacementService;
