import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelect, activePlayerSymbol }) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSquare = (rowIndex, colIndex) => {
    const updatedGameBoard = [
      ...gameBoard.map((innerArray) => [...innerArray]),
    ];
    updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    setGameBoard(updatedGameBoard);

    onSelect();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {" "}
                <button onClick={() => handleSquare(rowIndex, colIndex)}>
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
