import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelect, turns }) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleSquare = (rowIndex, colIndex) => {
  //   const updatedGameBoard = [
  //     ...gameBoard.map((innerArray) => [...innerArray]),
  //   ];
  //   updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //   setGameBoard(updatedGameBoard);

  //   onSelect();
  // };

  const gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {" "}
                <button onClick={() => onSelect(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>{" "}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
