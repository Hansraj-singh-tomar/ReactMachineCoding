import React, { useState, useRef } from "react";

const StopWatch2 = () => {
  const [time, setTime] = useState(null);
  const [now, setNow] = useState(null);

  const intervalRef = useRef(null);

  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let timePassed = (time - now) / 1000;

  return (
    <div>
      <h1>Desing Stop Watch</h1>
      <h2>Stopwatch: {timePassed.toFixed(3)}</h2>
      <h3>{Date.now()}</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default StopWatch2;
