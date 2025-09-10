import Image from "next/image";
import ExpertAdviceImage from "@/images/expert-advice.png";

const LeftPanel = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span
          className="font-[600] md:font-[800] text-[12px] md:text-[22.61px] lg:text-[12px] 
          text-red-500 md:text-slate-400 leading-[18px] tracking-[0.3px] 
          md:leading-[33.92px] md:tracking-[0.57px] lg:leading-[18px] lg:tracking-[0.3px] uppercase"
        >
          Excellence in Every Detail
        </span>
      </div>
      <div
        className="font-[600] text-[27px] md:text-[50.87px] lg:text-[48px] 
      leading-[33.75px] md:leading-[63.59px] lg:leading-[60px] 
      tracking-[-0.68px] md:tracking-[-1.27px] lg:tracking-[-1.2px]"
      >
        <span className="text-zinc-800">Because Your Car Deserves the </span>
        <span className="text-gray-400">Best service</span>
      </div>
      <div
        className="flex flex-col gap-4 text-slate-600
      font-[400] text-[12px] md:text-[22.61px] lg:text-[16px] 
      leading-[19.2px] md:leading-[36.18px] lg:leading-[25.6px] 
      tracking-[-0.3px] md:tracking-[-0.57px] lg:tracking-[-0.4px]"
      >
        <div>
          We treat every vehicle like it’s our own, paying attention to every
          detail, no matter how small.
        </div>
        <div>
          With advanced tools, skilled technicians, and a focus on long-term
          performance, we make sure your car leaves our workshop in peak
          condition.
        </div>
      </div>
      <div
        className="font-[600] text-[14px] md:text-[26.38px] lg:text-[14px] text-zinc-800 
      leading-[14px] md:leading-[26.38px] lg:leading-[14px] 
      tracking-[-0.4px] md:tracking-[-0.75px] lg:tracking-[-0.4px] underline"
      >
        Read and Book Now
      </div>
    </div>
  );
};

const MiddlePanel = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={ExpertAdviceImage}
        alt="Expert Advice Image"
        width={515}
        height={526}
        priority
        className="object-cover"
      />
    </div>
  );
};

const RightPanel = () => {
  const items = [
    {
      id: "01",
      title: "Skilled & Certified Technicians",
      description:
        "Our team is trained to handle all makes and models with precision and care.",
    },
    {
      id: "02",
      title: "Quality Parts & Equipment",
      description:
        "We use only trusted, manufacturer-approved components for lasting performance",
    },
    {
      id: "03",
      title: "Transparent, Honest Service",
      description:
        "Clear communication and fair pricing —no hidden costs or surprises.",
    },
  ];

  return (
    <div className="flex flex-col gap-4 self-center">
      <div className="flex flex-col gap-2">
        <div
          className="font-[700] text-[13.5px] md:text-[25.44px] lg:text-[18px] text-zinc-800 
        leading-[20.25px] md:leading-[38.16px] lg:leading-[27px] 
        tracking-[-0.27px] md:tracking-[-0.51px] lg:tracking-[-0.36px]"
        >
          Trusted Care for Every Vehicle
        </div>
        <div
          className="font-[400] text-[10.5px] md:text-[19.78px] lg:text-[14px] text-slate-500 
        leading-[15.75px] md:leading-[29.68px] lg:leading-[21px] 
        tracking-[-0.3px] md:tracking-[-0.57px] lg:tracking-[-0.4px]"
        >
          At GP Motors, we go beyond simple repairs and a commitment to keeping
          you safe and confident on the road.
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {items.map((item) => {
          return (
            <div key={item.id} className="flex gap-6">
              <div>
                <div
                  className="h-[24px] w-[24px] md:h-[45px] md:w-[45px] lg:h-[32px] lg:w-[32px] 
                flex justify-center items-center bg-slate-200 rounded-full"
                >
                  <span
                    className="font-[600] text-[9px] md:text-[16.96px] lg:text-[12px] 
                  leading-[9.9px] md:leading-[18.65px] lg:leading-[13.2px] 
                  tracking-[-0.3px] md:tracking-[-0.57px] lg:tracking-[-0.4px] text-slate-600"
                  >
                    {item.id}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="font-[600] text-[11.25px] md:text-[21.2px] lg:text-[15px] text-zinc-800 
                leading-[16.88px] md:leading-[31.8px] lg:leading-[22.5px] 
                tracking-[-0.23px] md:tracking-[-0.42px] lg:tracking-[-0.3px]"
                >
                  {item.title}
                </div>
                <div
                  className="font-[300] text-[10.5px] md:text-[19.78px] lg:text-[14px] text-zinc-800 
                leading-[16.8px] md:leading-[31.65px] lg:leading-[22.4px] 
                tracking-[-0.3px] md:tracking-[-0.57px] lg:tracking-[-0.4px]"
                >
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function TopSection() {
  return (
    <div className="grid grid-cols-1 max-lg:gap-8 lg:gap-4 lg:grid-cols-3">
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>
  );
}

export default TopSection;
