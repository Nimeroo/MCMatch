import React, { useState, useEffect } from "react";

export const GameTimer = ({ gameState }) => {
  let [seconds, setSeconds] = useState("00");
  let [minutes, setMinutes] = useState("00");
  let totalSeconds = 0;
  
  const setTimer = () => {
    ++totalSeconds;
    setSeconds(timeFormater(totalSeconds % 60));
    setMinutes(timeFormater(parseInt(totalSeconds / 60)));
  }
  
  const timeFormater = (time) => {
    const timeString = time + "";
    if (timeString.length < 2) {
      return "0" + timeString;
    } else {
      return timeString;
    }
  }
  useEffect(() => {
    const startTimer = () => {
      if (gameState === "running") setInterval(setTimer, 1000);
    };
    startTimer();
  }, [gameState]);

  return (
    <div>
      <div>{minutes}:</div>
      <div>{seconds}</div>
    </div>
  );
};
