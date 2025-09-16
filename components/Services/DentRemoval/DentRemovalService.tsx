import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import DentRemovalServiceHeader from "./DentRemovalServiceHeader";
import DentRepair from "./DentRepair";
import DentRemovalServiceAdv from "./DentRemovalServiceAdv";
import DentRemovalServiceSubHeader from "./DentRemovalServiceSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function DentRemovalService() {
  return (
    <div className="flex flex-col gap-8">
      <DentRemovalServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <DentRemovalServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <DentRepair />
        <DentRemovalServiceAdv />
      </div>
    </div>
  );
}

export default DentRemovalService;
