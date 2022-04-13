import "./GameGrid.css";
import React, { useEffect, useState } from "react";

export const GameGrid = ({
  itemList,
  setGameMoves,
  gameMoves,
  setGameCondition,
}) => {
  const [gridItems, setGridItems] = useState([]);
  const [selections, setSelections] = useState([]);

  // Pushes selected items into a seperate list. //
  // Once the seperate list contains at least 2 items both items are compared to check if they're matching //
  const matchChecker = (item, list) => {
    selections.push(item);
    setSelections(selections);
    if (selections.length === 2) {
      if (selections[0].name === selections[1].name) {
        item.isMatched = true;
        list[list.indexOf(selections[0])].isMatched = true;
        setGameMoves(gameMoves + 1);
        setSelections([]);
      } else {
        setGameMoves(gameMoves + 1);
        setSelections([]);
      }
    }
    list.every((item) => item.isMatched === true)
      ? setGameCondition("complete")
      : null;
  };

  useEffect(() => {
    const setItems = () => setGridItems(itemList);
    setItems();
  }, [itemList]);

  return (
    <div className="grid-container">
      {gridItems.map((item) => {
        return (
          <div
            className="item-container"
            onClick={() => {
              if (item.isMatched) {
                return null;
              } else {
                matchChecker(item, gridItems);
              }
            }}
          >
            <img className="item-image" src={item.image} alt={item.name}></img>
          </div>
        );
      })}
    </div>
  );
};