import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import TimingBeltChangeServiceHeader from "./TimingBeltChangeServiceHeader";
import TimingBeltChangeRepair from "./TimingBeltChangeRepair";
import TimingBeltChangeServiceSubHeader from "./TimingBeltChangeServiceSubHeader";
import TimingBeltChangeServiceAdv from "./TimingBeltChangeServiceAdv";
//import CustomerReviews from "@/components/Services/CustomerReviews/CustomerReviews";


function TimingBeltChangeService() {
  return (
    <div className="flex flex-col gap-8">
      <TimingBeltChangeServiceHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16"> 
        <TimingBeltChangeServiceSubHeader />
        {/* <CustomerReviews /> */}
        <BusinessProcess />
        <TimingBeltChangeRepair />
        <TimingBeltChangeServiceAdv />
      </div>
    </div>
  );
}

export default TimingBeltChangeService;