import React, { useState, useEffect } from "react";
import "./GameLeaderboard.css"

export const GameLeaderboard = ({ sortedBy }) => {
  const [gameData, setGameData] = useState([]);

  // fetches localstorage data //
  useEffect(() => {
    const dataSort = () => {
      let sortedArray = JSON.parse(localStorage.getItem("leaderboard"));
      switch (sortedBy) {
        case "newest":
          sortedArray = structuredClone(gameData);
          break;
        case "oldest":
          sortedArray.reverse();
          break;
        case "bestTime":
          sortedArray.sort((a, b) => parseInt(a.time[0] + a.time[1] + a.time[3] + a.time[4]) - parseInt(b.time[0] + b.time[1] + b.time[3] + b.time[4]));
          break;
        case "worstTime":
          sortedArray.sort((a, b) => parseInt(b.time[0] + b.time[1] + b.time[3] + b.time[4]) - parseInt(a.time[0] + a.time[1] + a.time[3] + a.time[4]));
          break;
        case "bestMoves":
          sortedArray.sort((a, b) => parseInt(a.moves) - parseInt(b.moves));
          break;
        case "worstMoves":
          sortedArray.sort((a, b) => parseInt(b.moves) - parseInt(a.moves));
          break;
        default:
          break;
      }
      setGameData(sortedArray);
    };
    dataSort();
  }, [sortedBy, gameData]);

  return (
    <div className="leaderboard-block">
      {gameData ? (
        gameData.map((session) => {
          return (
            <div className="leaderboard-block__stats">
              <h2>{session.difficulty}</h2>
              <h4>{session.moves}</h4>
              <h4>{session.time}</h4>
            </div>
          );
        })
      ) : (
        <h1>Win a game to see how well you did here!</h1>
      )}
    </div>
  );
};
