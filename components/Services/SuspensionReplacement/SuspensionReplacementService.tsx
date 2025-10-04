import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import SuspensionReplacementServiceHeader from "./SuspensionReplacementServiceHeader";
import SuspensionReplacementRepair from "./SuspensionReplacementRepair";
import SuspensionReplacementServiceAdv from "./SuspensionReplacementServiceAdv";
import SuspensionReplacementServiceSubHeader from "./SuspensionReplacementServiceSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function SuspensionReplacementService() {
  return (
    <div className="flex flex-col gap-8">
      <SuspensionReplacementServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <SuspensionReplacementServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <SuspensionReplacementRepair />
        <SuspensionReplacementServiceAdv />
      </div>
    </div>
  );
}

export default SuspensionReplacementService;
