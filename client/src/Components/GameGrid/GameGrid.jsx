import "./GameGrid.css";
import React, { useEffect, useState } from "react";

export const GameGrid = ({
  itemList,
  setGameMoves,
  gameMoves,
  setGameCondition,
  setGameState,
  newSession,
}) => {
  const [gridItems, setGridItems] = useState([]);
  const [selections, setSelections] = useState([]);

  const selectedItemStyle = (item) => {
    if (item.isMatched === true || selections.includes(item)) {
      return "grid-block__uncovered";
    } else return "grid-block__covered";
  };

  // Pushes selected items into a seperate list. //
  // Once the seperate list contains at least 2 items both items are compared to check if they're matching //
  const matchChecker = (item, list) => {
    if (selections.length === 0) {
      selections.push(item);
    } else if (selections.length === 2) {
      return;
    } else if (item !== selections[0]) {
      selections.push(item);
    } else return;
    setSelections(selections);
    if (selections.length === 2) {
      if (selections[0].name === selections[1].name) {
        item.isMatched = true;
        list[list.indexOf(selections[0])].isMatched = true;
        setGameMoves(gameMoves + 1);
        setTimeout(() => setSelections([]), 1000);
      } else {
        setGameMoves(gameMoves + 1);
        setTimeout(() => setSelections([]), 1000);
      }
    }
    if (list.every((item) => item.isMatched === true)) {
      setGameCondition("complete");
      newSession();
      setGameState("results");
    } else {
      return;
    }
  };

  useEffect(() => {
    setGameCondition("incomplete");
    setGameMoves(0);
  }, []);

  useEffect(() => {
    setGridItems(itemList);
  }, [itemList]);

  return (
    <div className="grid-block">
      {gridItems.map((item) => {
        return (
          <div
            onClick={() => {
              if (item.isMatched) {
                return;
              } else {
                matchChecker(item, gridItems);
              }
            }}
          >
            <div className={selectedItemStyle(item)}></div>
            <div className="grid-block__item">
              <img
                className="grid-block__item__image"
                src={item.image}
                alt={item.name}
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};
