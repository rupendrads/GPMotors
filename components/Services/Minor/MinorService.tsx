import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import MinorServiceHeader from "./MinorServiceHeader";
import MinorRepair from "./MinorRepair";
import MinorServiceSubHeader from "./MinorServiceSubHeader";
import MinorServiceAdv from "./MinorServiceAdv";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function MinorService() {
  return (
    <div className="flex flex-col gap-8">
      <MinorServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16"> 
        <MinorServiceSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <MinorRepair />
        <MinorServiceAdv />
      </div>
    </div>
  );
}

export default MinorService;