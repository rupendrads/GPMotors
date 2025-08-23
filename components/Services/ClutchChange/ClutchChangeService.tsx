import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import ClutchChangeServiceHeader from "./ClutchChangeServiceHeader";
import ClutchChangeRepair from "./ClutchChangeRepair";
import ClutchChangeServiceSubHeader from "./ClutchChangeServiceSubHeader";
import ClutchChangeServiceAdv from "./ClutchChangeServiceAdv";
//import CustomerReviews from "@/components/Services/CustomerReviews/CustomerReviews";


function ClutchChangeService() {
  return (
    <div className="flex flex-col gap-8">
      <ClutchChangeServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16"> 
        <ClutchChangeServiceSubHeader />
        {/* <CustomerReviews /> */}
        <BusinessProcess />
        <ClutchChangeRepair />
        <ClutchChangeServiceAdv />
      </div>
    </div>
  );
}

export default ClutchChangeService;