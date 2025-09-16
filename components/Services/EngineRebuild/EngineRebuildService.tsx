import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import EngineRebuildServiceHeader from "./EngineRebuildServiceHeader";
import EngineRebuildRepair from "./EngineRebuildRepair";
import EngineRebuildServiceAdv from "./EngineRebuildServiceAdv";
import EngineRebuildServiceSubHeader from "./EngineRebuildServiceSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function EngineRebuildService() {
  return (
    <div className="flex flex-col gap-8">
      <EngineRebuildServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <EngineRebuildServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <EngineRebuildRepair />
        <EngineRebuildServiceAdv />
      </div>
    </div>
  );
}

export default EngineRebuildService;
