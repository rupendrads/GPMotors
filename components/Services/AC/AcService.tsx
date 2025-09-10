import AcRepair from "./AcRepair";
import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import HeatProtection from "./AcServiceSubHeader";
import AcServiceHeader from "./AcServiceHeader";
import AcServiceAdv from "./AcServiceAdv";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function AcService() {
  return (
    <div className="flex flex-col gap-8">
      <AcServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <HeatProtection />
        <ExpertAdvice />
        <BusinessProcess />
        <AcRepair />
        <AcServiceAdv />
      </div>
    </div>
  );
}

export default AcService;
