import "./App.css";
import { useState } from "react";
import { gameItems } from "./Util/gameItems";
import { gameConfig } from "./Util/gameGenerator";
import { sessionSave } from "./Util/sessionSave";
import { GameTitle } from "./Components/GameTitle/GameTitle";
import { GameTimer } from "./Components/GameTimer/GameTimer";
import { GameGrid } from "./Components/GameGrid/GameGrid";
import { GameResults } from "./Components/GameResults/GameResults";
import { DifficultySelector } from "./Components/DifficultySelector/DifficultySelector";
import { GameLeaderboard } from "./Components/GameLeaderboard/GameLeaderboard";

function App() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [gameState, setGameState] = useState("off");
  const [gameCondition, setGameCondition] = useState("incomplete");
  const [itemList, setItemList] = useState([]);
  const [gameMoves, setGameMoves] = useState(0);
  const [gameTime, setGameTime] = useState("");
  const [sortedBy, setSortedBy] = useState("");
  const [sortList, setSortList] = useState(false);

  const fetchItems = () => {
    const items = gameConfig(gameItems, difficulty);
    setItemList(items);
  };

  // Saves game data inside of an object upon finding all matches //
  const newSession = () => {
    const session = {
      difficulty: difficulty,
      time: gameTime,
      moves: gameMoves,
    };
    sessionSave(session);
  };

  // Pre-game screen //
  const preGame = (
    <div className="pre-game-block">
      <h1 className="pre-game-block__heading">
        Select a difficulty and start matching
      </h1>
      <DifficultySelector
        setDifficulty={setDifficulty}
        difficulty={difficulty}
      />
      <div className="pre-game-block__buttons">
        <button
          onClick={() => {
            setGameState("running");
            fetchItems();
          }}
        >
          Start Game
        </button>
        <button onClick={() => setGameState("records")}>Records</button>
      </div>
    </div>
  );

  // In-game screen //
  const inGame = (
    <div className="in-game-block">
      <div className="in-game-block__heading">
        <GameTimer
          gameState={gameState}
          setGameTime={setGameTime}
          gameCondition={gameCondition}
        />
        <h5>Moves: {gameMoves}</h5>
      </div>
      <div className="in-game-block__main">
        <GameGrid
          difficulty={difficulty}
          itemList={itemList}
          setGameMoves={setGameMoves}
          gameMoves={gameMoves}
          setGameCondition={setGameCondition}
          setGameState={setGameState}
          newSession={newSession}
        />
      </div>
      <button
        onClick={() => {
          setGameState("off");
          setSortList(false);
        }}
      >
        Exit Game
      </button>
    </div>
  );

  // Post-game screen //
  const postGame = (
    <div>
      <GameResults
        gameMoves={gameMoves}
        setGameState={setGameState}
        gameTime={gameTime}
        setGameCondition={setGameCondition}
        fetchItems={fetchItems}
      />
    </div>
  );

  const leaderboard = (
    <div
      onClick={() =>
        sortList === false ? setSortList(true) : setSortList(false)
      }
    >
      Sort <img src="./Assets/big-chest.png"></img>
      {sortList ? (
        <ul>
          <li onClick={() => setSortedBy("newest")}>Newest to Oldest</li>
          <li onClick={() => setSortedBy("oldest")}>Oldest to Newest</li>
          <li onClick={() => setSortedBy("bestTime")}>Best Time</li>
          <li onClick={() => setSortedBy("worstTime")}>Worst Time</li>
          <li onClick={() => setSortedBy("bestMoves")}>Least Moves</li>
          <li onClick={() => setSortedBy("worstMoves")}>Most Moves</li>
        </ul>
      ) : null}
      <GameLeaderboard setGameState={setGameState} sortedBy={sortedBy} />
      <button onClick={() => setGameState("off")}>Go back</button>
    </div>
  );

  const gameStatus = () => {
    if (gameState === "off") {
      return preGame;
    } else if (gameState === "running") {
      return inGame;
    } else if (gameState === "results") {
      return postGame;
    } else if (gameState === "records") {
      return leaderboard;
    }
  };

  return (
    <div className="App">
      <GameTitle />
      <div className="game-block">{gameStatus()}</div>
    </div>
  );
}

export default App;
