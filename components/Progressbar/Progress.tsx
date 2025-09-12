"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  Ref,
  useState,
  useEffect,
} from "react";
import Progressbar from "./Progressbar";

interface Props {
  title: string;
  maxValue: number;
  progressCompleted: () => void;
}

export const Progress = forwardRef<
  { incrementValue: () => void; resetValue: () => void },
  Props
>(
  (
    {
      title,
      maxValue,
      progressCompleted,
    }: { title: string; maxValue: number; progressCompleted: () => void },
    ref: Ref<{ incrementValue: () => void; resetValue: () => void }>
  ) => {
    const [interval, setInterval] = useState(0);
    const [progress, setProgress] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
      const interval = 100 / maxValue;
      setInterval(interval);
      setValue(0);
      setProgress(0);
    }, [maxValue]);

    useImperativeHandle(ref, () => ({
      incrementValue: () => {
        if (value < maxValue) {
          setProgress(progress + interval);
          setValue(value + 1);
        } else {
          progressCompleted();
        }
      },
      resetValue: () => {
        setValue(0);
        setProgress(0);
      },
    }));

    return (
      <Progressbar
        progress={progress}
        currentValue={value}
        maxValue={maxValue}
        title={title}
      />
    );
  }
);

Progress.displayName = "Progress";
export default Progress;
