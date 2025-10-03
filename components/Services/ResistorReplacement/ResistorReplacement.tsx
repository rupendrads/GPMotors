import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import ResistorReplacementHeader from "./ResistorReplacementHeader";
import ResistorReplacementRepair from "./ResistorReplacementRepair";
import ResistorReplacementAdv from "./ResistorReplacementAdv";
import ResistorReplacementSubHeader from "./ResistorReplacementSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function ResistorReplacement() {
  return (
    <div className="flex flex-col gap-8">
      <ResistorReplacementHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <ResistorReplacementSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <ResistorReplacementRepair />
        <ResistorReplacementAdv />
      </div>
    </div>
  );
}

export default ResistorReplacement;
