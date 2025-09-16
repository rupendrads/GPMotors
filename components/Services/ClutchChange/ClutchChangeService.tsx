import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import ClutchChangeServiceHeader from "./ClutchChangeServiceHeader";
import ClutchChangeRepair from "./ClutchChangeRepair";
import ClutchChangeServiceSubHeader from "./ClutchChangeServiceSubHeader";
import ClutchChangeServiceAdv from "./ClutchChangeServiceAdv";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function ClutchChangeService() {
  return (
    <div className="flex flex-col gap-8">
      <ClutchChangeServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16"> 
        <ClutchChangeServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <ClutchChangeRepair />
        <ClutchChangeServiceAdv />
      </div>
    </div>
  );
}

export default ClutchChangeService;