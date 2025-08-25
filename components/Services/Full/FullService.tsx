import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import FullServiceHeader from "./FullServiceHeader";
import FullRepair from "./FullRepair";
import FullServiceSubHeader from "./FullServiceSubHeader";
import FullServiceAdv from "./FullServiceAdv";
//import CustomerReviews from "@/components/Services/CustomerReviews/CustomerReviews";


function FullService() {
  return (
    <div className="flex flex-col gap-8">
      <FullServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16"> 
        <FullServiceSubHeader />
        {/* <CustomerReviews /> */}
        <BusinessProcess />
        <FullRepair />
        <FullServiceAdv />
      </div>
    </div>
  );
}

export default FullService;