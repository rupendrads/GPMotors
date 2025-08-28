import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import IntermediateServiceHeader from "./IntermediateServiceHeader";
import IntermediateRepair from "./IntermediateRepair";
import IntermediateServiceSubHeader from "./IntermediateServiceSubHeader";
import IntermediateServiceAdv from "./IntermediateServiceAdv";
//import CustomerReviews from "@/components/Services/CustomerReviews/CustomerReviews";


function IntermediateService() {
  return (
    <div className="flex flex-col gap-8">
      <IntermediateServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16"> 
        <IntermediateServiceSubHeader />
        {/* <CustomerReviews /> */}
        <BusinessProcess />
        <IntermediateRepair />
        <IntermediateServiceAdv />
      </div>
    </div>
  );
}

export default IntermediateService;