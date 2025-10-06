import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import ElectricalDiagnosticHeader from "./ElectricalDiagnosticHeader";
import ElectricalDiagnosticRepair from "./ElectricalDiagnosticRepair";
import ElectricalDiagnosticAdv from "./ElectricalDiagnosticAdv";
import ElectricalDiagnosticSubHeader from "./ElectricalDiagnosticSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function ElectricalDiagnostic() {
  return (
    <div className="flex flex-col gap-8">
      <ElectricalDiagnosticHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <ElectricalDiagnosticSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <ElectricalDiagnosticRepair />
        <ElectricalDiagnosticAdv />
      </div>
    </div>
  );
}

export default ElectricalDiagnostic;
