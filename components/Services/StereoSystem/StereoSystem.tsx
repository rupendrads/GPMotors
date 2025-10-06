import BusinessProcess from "@/components/Services/BusinessProcess/BusinessProcess";
import StereoSystemHeader from "./StereoSystemHeader";
import StereoSystemRepair from "./StereoSystemRepair";
import StereoSystemAdv from "./StereoSystemAdv";
import StereoSystemSubHeader from "./StereoSystemSubHeader";
import ExpertAdvice from "../ExpertAdvice/ExpertAdvice";

function StereoSystem() {
  return (
    <div className="flex flex-col gap-8">
      <StereoSystemHeader />
      <div className="flex flex-col gap-8 mx-8 md:mx-16">
        <StereoSystemSubHeader />
        <ExpertAdvice />
        <BusinessProcess />
        <StereoSystemRepair />
        <StereoSystemAdv />
      </div>
    </div>
  );
}

export default StereoSystem;
