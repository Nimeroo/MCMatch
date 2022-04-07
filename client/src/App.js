import "./App.css";
import { useState } from "react";
import { GameTitle } from "./Components/GameTitle/GameTitle";
import { DifficultySelector } from "./Components/DifficultySelector/DifficultySelector";

function App() {
  const [difficulty, setDifficulty] = useState("");

  const preGame = (
    <div>
      <DifficultySelector setDifficulty={setDifficulty} />
      <div>
        <button>Start Game</button>
        <button>Records</button>
      </div>
    </div>
  );

  return (
    <div className="App">
      <GameTitle />
      <div></div>
    </div>
  );
}

export default App;
