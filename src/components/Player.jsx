import React, { useState } from "react";

const Player = ({ initialName, initialSymbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditing = () => {
    setIsEditing((editing) => !editing);
  };
  const handlePlayerName = (e) => {
    setPlayerName(e.target.value);
  };

  let playerNameComp = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameComp = <input value={playerName} onChange={handlePlayerName} />;
  }

  return (
    <li>
      <span className="player">
        {playerNameComp}
        <span className="player-symbol">{initialSymbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
