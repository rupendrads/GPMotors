import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import WarningLightHeader from "./WarningLightHeader";
import WarningLightRepair from "./WarningLightRepair";
import WarningLightAdv from "./WarningLightAdv";
import WarningLightSubHeader from "./WarningLightSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function WarningLight() {
  return (
    <div className="flex flex-col gap-8">
      <WarningLightHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <WarningLightSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <WarningLightRepair />
        <WarningLightAdv />
      </div>
    </div>
  );
}

export default WarningLight;
