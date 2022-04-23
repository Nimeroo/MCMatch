import React from "react";
import "./DifficultySelector.css";

export const DifficultySelector = ({ setDifficulty, difficulty }) => {

  // Changes class name for selected difficulty // 
  const selectedCardStyle = (className) => {
    if (difficulty === "Easy") {
      if (className[className.length - 1] === "y") {
        return className + "--selected";
      } else return className;
    }
    if (difficulty === "Intermediate") {
      if (className[className.length - 1] === "e") {
        return className + "--selected";
      } else return className;
    }
    if (difficulty === "Hard") {
      if (className[className.length - 1] === "d") {
        return className + "--selected";
      } else return className;
    }
  };

  return (
    <div className="difficulties">
      <div
        className={selectedCardStyle("difficulties__card-easy")}
        onClick={() => setDifficulty("Easy")}
      >
        <div className="difficulties__card__container">
          <h3 className="difficulties__card__title">Easy</h3>
          <h5 className="difficulties__card__note">(8 Pairs)</h5>
        </div>
      </div>
      <div
        className={selectedCardStyle("difficulties__card-intermediate")}
        onClick={() => setDifficulty("Intermediate")}
      >
        <div className="difficulties__card__container">
          <h3 className="difficulties__card__title">Intermediate</h3>
          <h5 className="difficulties__card__note">(16 Pairs)</h5>
        </div>
      </div>
      <div
        className={selectedCardStyle("difficulties__card-hard")}
        onClick={() => setDifficulty("Hard")}
      >
        <div className="difficulties__card__container">
          <h3 className="difficulties__card__title">Hard</h3>
          <h5 className="difficulties__card__note">(32 Pairs)</h5>
        </div>
      </div>
    </div>
  );
};
