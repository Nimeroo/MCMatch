import React from "react";

export const GameResults = ({
  gameMoves,
  setGameState,
  gameTime,
  fetchItems,
}) => {

  // Changes win messege depending on how fast game completed //
  const timeSentence = () => {
    if (gameTime[0] && gameTime[1] === "0") {
      return `and only ${gameTime[3] + gameTime[4]} seconds!`;
    } else {
      return `and ${gameTime}`;
    }
  };

  return (
    <div>
      <div>
        You found them all in {gameMoves} moves {timeSentence()}
      </div>
      <button
        onClick={() => {
          setGameState("running");
          fetchItems();
        }}
      >
        Play Again
      </button>
      <button onClick={() => setGameState("off")}>Continue</button>
    </div>
  );
};
