import React, { useEffect, useState } from "react";
import "./stopwatch.css";
import { ControlledButtons } from "../controlledButtons/ControlledButtons";
import Timer from "../Timer/Timer";

export const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPausd] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused == false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPausd(false);
  };
  const handlePauseResume = () => {
    setIsPausd(!isPaused);
  };
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="container">
        <div className="stopwatch">
        <Timer time={time} />
      <ControlledButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handleReset={handleReset}
        handlePauseResume={handlePauseResume}
      />
    </div>
    </div>
  );
};
