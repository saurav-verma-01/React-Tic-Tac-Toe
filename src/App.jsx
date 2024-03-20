import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            initialSymbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            initialSymbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelect={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
