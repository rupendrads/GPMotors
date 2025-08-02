import AcRepair from "@/components/Services/AcRepair/AcRepair";
import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import HeatProtection from "./HeatProtection";
import AcServiceAdv from "./AcServiceAdv";

function AcService() {
  return (
    <>
      <HeatProtection />
      <BusinessProcess />
      <AcRepair />
      <AcServiceAdv />
    </>
  );
}

export default AcService;
