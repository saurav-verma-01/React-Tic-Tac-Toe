import React from "react";

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li
          key={`Square${turn.square.row}_${turn.square.col}_${turn.player}`}
        >{`${turn.player} Selected [${turn.square.row},${turn.square.col}]`}</li>
      ))}
    </ol>
  );
};

export default Log;
