import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import ClutchReplacementServiceHeader from "./ClutchReplacementServiceHeader";
import ClutchReplacementRepair from "./ClutchReplacementRepair";
import ClutchReplacementServiceAdv from "./ClutchReplacementServiceAdv";
import ClutchReplacementServiceSubHeader from "./ClutchReplacementServiceSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function ClutchReplacementService() {
  return (
    <div className="flex flex-col gap-8">
      <ClutchReplacementServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <ClutchReplacementServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <ClutchReplacementRepair />
        <ClutchReplacementServiceAdv />
      </div>
    </div>
  );
}

export default ClutchReplacementService;
