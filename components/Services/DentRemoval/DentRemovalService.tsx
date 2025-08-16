import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import DentRemovalServiceHeader from "./DentRemovalServiceHeader";
import DentRepair from "./DentRepair";
import DentRemovalServiceAdv from "./DentRemovalServiceAdv";
import DentRemovalServiceSubHeader from "./DentRemovalServiceSubHeader";
//import CustomerReviews from "@/components/Services/CustomerReviews/CustomerReviews";


function DentRemovalService() {
  return (
    <div className="flex flex-col gap-8">
      <DentRemovalServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <DentRemovalServiceSubHeader />
        {/* <CustomerReviews /> */}
        <BusinessProcess />
        <DentRepair />
        <DentRemovalServiceAdv />
      </div>
    </div>
  );
}

export default DentRemovalService;
