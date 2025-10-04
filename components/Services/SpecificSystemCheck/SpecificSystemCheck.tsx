import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import SpecificSystemCheckHeader from "./SpecificSystemCheckHeader";
import SpecificSystemCheckRepair from "./SpecificSystemCheckRepair";
import SpecificSystemCheckAdv from "./SpecificSystemCheckAdv";
import SpecificSystemCheckSubHeader from "./SpecificSystemCheckSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function SpecificSystemCheck() {
  return (
    <div className="flex flex-col gap-8">
      <SpecificSystemCheckHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <SpecificSystemCheckSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <SpecificSystemCheckRepair />
        <SpecificSystemCheckAdv />
      </div>
    </div>
  );
}

export default SpecificSystemCheck;
