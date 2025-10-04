import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import TransmissionServiceHeader from "./TransmissionServiceHeader";
import TransmissionServiceSubHeader from "./TransmissionServiceSubHeader";
import TransmissionRepair from "./TransmissionRepair";
import TransmissionServiceAdv from "./TransmissionServiceAdv";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function TransmissionService() {
  return (
    <div className="flex flex-col gap-8">
      <TransmissionServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16"> 
        <TransmissionServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <TransmissionRepair />
        <TransmissionServiceAdv />
      </div>
    </div>
  );
}

export default TransmissionService;