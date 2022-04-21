import React, { useState, useEffect } from "react";

export const GameLeaderboard = ({ setGameState }) => {
  const [gameData, setGameData] = useState([]);

  // fetches localstorage data //
  useEffect(() => {
    const fetchData = localStorage.getItem("leaderboard");
    setGameData(JSON.parse(fetchData));
  }, []);

  return (
    <div>
      {gameData ? (
        gameData.map((session) => {
          return (
            <div>
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
