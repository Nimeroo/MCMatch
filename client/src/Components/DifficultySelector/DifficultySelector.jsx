import React from "react";

export const DifficultySelector = ({ setDifficulty }) => {
  return (
    <div>
      <div onClick={() => setDifficulty("Easy")}>
        <h3>Easy</h3>
        <h5>(8 Pairs)</h5>
      </div>
      <div onClick={() => setDifficulty("Intermediate")}>
        <h3>Intermediate</h3>
        <h5>(16 Pairs)</h5>
      </div>
      <div onClick={() => setDifficulty("Hard")}>
        <h3>Hard</h3>
        <h5>(32 Pairs)</h5>
      </div>
    </div>
  );
};
