import AcRepair from "@/components/Services/AcRepair/AcRepair";
import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import HeatProtection from "./HeatProtection";
import AcServiceHeader from "./AcServiceHeader";
import AcServiceAdv from "./AcServiceAdv";

function AcService() {
  return (
    <div className="flex flex-col gap-8">
      <AcServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <HeatProtection />
        <BusinessProcess />
        <AcRepair />
        <AcServiceAdv />
      </div>
    </div>
  );
}

export default AcService;
