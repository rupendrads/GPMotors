import AcRepair from "@/components/Services/AcRepair/AcRepair";
import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import HeatProtection from "./HeatProtection";

function AcService() {
  return (
    <>
      <HeatProtection />
      <BusinessProcess />
      <AcRepair />
    </>
  );
}

export default AcService;
