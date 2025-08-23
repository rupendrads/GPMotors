import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import CoolantChangeServiceHeader from "./CoolantChangeServiceHeader";
import CoolantChangeRepair from "./CoolantChangeRepair";
import CoolantChangeServiceSubHeader from "./CoolantChangeServiceSubHeader";
import CoolantChangeServiceAdv from "./CoolantChangeServiceAdv";
//import CustomerReviews from "@/components/Services/CustomerReviews/CustomerReviews";


function CoolantChangeService() {
  return (
    <div className="flex flex-col gap-8">
      <CoolantChangeServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16"> 
        <CoolantChangeServiceSubHeader />
        {/* <CustomerReviews /> */}
        <BusinessProcess />
        <CoolantChangeRepair />
        <CoolantChangeServiceAdv />
      </div>
    </div>
  );
}

export default CoolantChangeService;