"use client";

import * as Progress from "@radix-ui/react-progress";
import "./ProgressbarStyle.css";

function Progressbar({
  progress,
  currentValue = 0,
  maxValue = 100,
  title = "",
}: {
  progress: number;
  currentValue: number;
  maxValue: number;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-gray-700">
        {currentValue} of {maxValue} completed{" "}
        {title != "" ? (
          <span className="font-[400] bg-gray-600 text-white px-[5px] py-[3px] ml-[10px] rounded">
            {title}
          </span>
        ) : (
          ""
        )}
      </div>
      <Progress.Root className="ProgressRoot" value={progress}>
        <Progress.Indicator
          className="ProgressIndicator"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
    </div>
  );
}

export default Progressbar;
