import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import BrakeFluidServiceHeader from "./BrakeFluidServiceHeader";
import BrakeFluidServiceSubHeader from "./BrakeFluidServiceSubHeader";
import BrakeFluidReplace from "./BrakeFluidReplace";
import BrakeFluidServiceAdv from "./BrakeFluidServiceAdv";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function BrakeFluidService() {
  return (
    <div className="flex flex-col gap-8">
      <BrakeFluidServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <BrakeFluidServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <BrakeFluidReplace />
        <BrakeFluidServiceAdv />
      </div>
    </div>
  );
}

export default BrakeFluidService;
