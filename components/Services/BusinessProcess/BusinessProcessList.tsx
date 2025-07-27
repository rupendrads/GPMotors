import ProcessItem from "./ProcessItem";
import processList from "./ProcessList";

function BusinessProcessList() {
  return (
    <div className={containerStyle}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 max-md:gap-8 mt-8 justify-between max-w-[210px] md:max-w-[520px] lg:max-w-full">
        {processList.map((item) => {
          return <ProcessItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

const containerStyle = "flex justify-center";

export default BusinessProcessList;
