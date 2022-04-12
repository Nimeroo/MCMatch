import "./App.css";
import { useState } from "react";
import { gameItems } from "./Util/gameItems";
import { gameConfig } from "./Util/gamegenerator";
import { GameTitle } from "./Components/GameTitle/GameTitle";
import { GameGrid } from "./Components/GameGrid/GameGrid";
import { DifficultySelector } from "./Components/DifficultySelector/DifficultySelector";

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [gameState, setGameState] = useState("off");
  const [itemList, setItemList] = useState([]);

  const fetchItems = async () => {
    const items = await gameConfig(gameItems, difficulty);
    setItemList(items);
    console.log(itemList);
  };

  // Pre-game screen //
  const preGame = (
    <div>
      <DifficultySelector setDifficulty={setDifficulty} fetchItems={fetchItems} />
      <div>
        <button
          onClick={() => {
            setGameState("running");
            fetchItems(); 
          }}
        >
          Start Game
        </button>
        <button>Records</button>
      </div>
    </div>
  );

  // In-game screen //
  const inGame = (
    <div>
      <div>
        <GameGrid difficulty={difficulty} itemList={itemList} />
      </div>
      <button onClick={() => setGameState("off")}>Exit Game</button>
    </div>
  );

  const gameStatus = () => {
    if (gameState === "off") {
      return preGame;
    } else if (gameState === "running") {
      return inGame;
    }
  };

  return (
    <div className="App">
      <GameTitle />
      <div>{gameStatus()}</div>
    </div>
  );
}

export default App;
