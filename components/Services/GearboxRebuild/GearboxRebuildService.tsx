import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import GearboxRebuildServiceHeader from "./GearboxRebuildServiceHeader";
import GearboxRebuildRepair from "./GearboxRebuildRepair";
import GearboxRebuildServiceAdv from "./GearboxRebuildServiceAdv";
import GearboxRebuildServiceSubHeader from "./GearboxRebuildServiceSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function GearboxRebuildService() {
  return (
    <div className="flex flex-col gap-8">
      <GearboxRebuildServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <GearboxRebuildServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <GearboxRebuildRepair />
        <GearboxRebuildServiceAdv />
      </div>
    </div>
  );
}

export default GearboxRebuildService;
