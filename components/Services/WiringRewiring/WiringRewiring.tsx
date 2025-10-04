import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import WiringRewiringHeader from "./WiringRewiringHeader";
import WiringRewiringRepair from "./WiringRewiringRepair";
import WiringRewiringAdv from "./WiringRewiringAdv";
import WiringRewiringSubHeader from "./WiringRewiringSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function WiringRewiring() {
  return (
    <div className="flex flex-col gap-8">
      <WiringRewiringHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <WiringRewiringSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <WiringRewiringRepair />
        <WiringRewiringAdv />
      </div>
    </div>
  );
}

export default WiringRewiring;
