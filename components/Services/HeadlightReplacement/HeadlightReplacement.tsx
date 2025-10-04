import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import HeadlightReplacementHeader from "./HeadlightReplacementHeader";
import HeadlightReplacementRepair from "./HeadlightReplacementRepair";
import HeadlightReplacementAdv from "./HeadlightReplacementAdv";
import HeadlightReplacementSubHeader from "./HeadlightReplacementSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function HeadlightReplacement() {
  return (
    <div className="flex flex-col gap-8">
      <HeadlightReplacementHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <HeadlightReplacementSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <HeadlightReplacementRepair />
        <HeadlightReplacementAdv />
      </div>
    </div>
  );
}

export default HeadlightReplacement;
