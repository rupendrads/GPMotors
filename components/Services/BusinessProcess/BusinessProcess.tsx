import BusinessProcessHeader from "./BusinessProcessHeader";
import BusinessProcessList from "./BusinessProcessList";

function BusinessProcess() {
  return (
    <div className="grid gap-8 mt-8">
      <BusinessProcessHeader />
      <BusinessProcessList />
    </div>
  );
}

export default BusinessProcess;
