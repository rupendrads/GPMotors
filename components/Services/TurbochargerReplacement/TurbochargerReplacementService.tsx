import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import TurbochargerReplacementServiceHeader from "./TurbochargerReplacementServiceHeader";
import TurbochargerReplacementRepair from "./TurbochargerReplacementRepair";
import TurbochargerReplacementServiceAdv from "./TurbochargerReplacementServiceAdv";
import TurbochargerReplacementServiceSubHeader from "./TurbochargerReplacementServiceSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function TurbochargerReplacementService() {
  return (
    <div className="flex flex-col gap-8">
      <TurbochargerReplacementServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <TurbochargerReplacementServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <TurbochargerReplacementRepair />
        <TurbochargerReplacementServiceAdv />
      </div>
    </div>
  );
}

export default TurbochargerReplacementService;
