import React, { useState, useEffect } from "react";

export const GameTimer = ({ gameState, setGameTime, gameCondition }) => {
  let [seconds, setSeconds] = useState("00");
  let [minutes, setMinutes] = useState("00");
  let [totalSeconds, setTotalSeconds] = useState(0);
  let timer;

  const setTimer = () => {
    setTotalSeconds(++totalSeconds);
    setSeconds(timeFormater(totalSeconds % 60));
    setMinutes(timeFormater(parseInt(totalSeconds / 60)));
  };

  const timeFormater = (time) => {
    const timeString = time + "";
    if (timeString.length < 2) {
      return "0" + timeString;
    } else {
      return timeString;
    }
  };

  useEffect(() => {
    const startTimer = () => {
      if (gameState === "running" && !timer) {
        timer = setInterval(setTimer, 1000);
      } else if (
        (gameState === "off" || gameCondition === "complete") &&
        timer
      ) {
        clearInterval(timer);
      }
      setGameTime(minutes + ":" + seconds);
    };
    startTimer();
  }, [gameState, totalSeconds]);

  return (
    <div>
      <h5>Time:</h5>
      <div>
        <div>{minutes}:</div>
        <div>{seconds}</div>
      </div>
    </div>
  );
};
