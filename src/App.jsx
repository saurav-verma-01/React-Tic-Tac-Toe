import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" initialSymbol="X" />
          <Player initialName="Player 2" initialSymbol="O" />
        </ol>
        <h1>GAME BOARD</h1>
      </div>
    </main>
  );
}

export default App;
