import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import FullDiagnosticHeader from "./FullDiagnosticHeader";
import FullDiagnosticRepair from "./FullDiagnosticRepair";
import FullDiagnosticAdv from "./FullDiagnosticAdv";
import FullDiagnosticSubHeader from "./FullDiagnosticSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function FullDiagnostic() {
  return (
    <div className="flex flex-col gap-8">
      <FullDiagnosticHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <FullDiagnosticSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <FullDiagnosticRepair />
        <FullDiagnosticAdv />
      </div>
    </div>
  );
}

export default FullDiagnostic;
