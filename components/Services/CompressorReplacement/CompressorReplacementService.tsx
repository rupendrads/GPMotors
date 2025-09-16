import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import CompressorReplacementServiceHeader from "./CompressorReplacementServiceHeader";
import CompressorReplacementRepair from "./CompressorReplacementRepair";
import CompressorReplacementServiceAdv from "./CompressorReplacementServiceAdv";
import CompressorReplacementServiceSubHeader from "./CompressorReplacementServiceSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function CompressorReplacementService() {
  return (
    <div className="flex flex-col gap-8">
      <CompressorReplacementServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <CompressorReplacementServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <CompressorReplacementRepair />
        <CompressorReplacementServiceAdv />
      </div>
    </div>
  );
}

export default CompressorReplacementService;
