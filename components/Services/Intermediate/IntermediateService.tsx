import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import IntermediateServiceHeader from "./IntermediateServiceHeader";
import IntermediateRepair from "./IntermediateRepair";
import IntermediateServiceSubHeader from "./IntermediateServiceSubHeader";
import IntermediateServiceAdv from "./IntermediateServiceAdv";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function IntermediateService() {
  return (
    <div className="flex flex-col gap-8">
      <IntermediateServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16"> 
        <IntermediateServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <IntermediateRepair />
        <IntermediateServiceAdv />
      </div>
    </div>
  );
}

export default IntermediateService;