import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import GasketOverhaulServiceHeader from "./GasketOverhaulServiceHeader";
import GasketOverhaulRepair from "./GasketOverhaulRepair";
import GasketOverhaulServiceAdv from "./GasketOverhaulServiceAdv";
import GasketOverhaulServiceSubHeader from "./GasketOverhaulServiceSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function GasketOverhaulService() {
  return (
    <div className="flex flex-col gap-8">
      <GasketOverhaulServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <GasketOverhaulServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <GasketOverhaulRepair />
        <GasketOverhaulServiceAdv />
      </div>
    </div>
  );
}

export default GasketOverhaulService;
