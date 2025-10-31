import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import MinorResprayHeader from "./MinorResprayHeader";
import MinorResprayRepair from "./MinorResprayRepair";
import MinorResprayAdv from "./MinorResprayAdv";
import MinorRespraySubHeader from "./MinorRespraySubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function MinorRespray() {
  return (
    <div className="flex flex-col gap-8">
      <MinorResprayHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <MinorRespraySubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <MinorResprayRepair />
        <MinorResprayAdv />
      </div>
    </div>
  );
}

export default MinorRespray;
