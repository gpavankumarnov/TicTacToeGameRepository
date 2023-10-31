import React, { useState } from "react";
import Board from "./component/Board";
const Game = () => {
  const [history, setHistory] = useState(Array(9).fill(null));

  return (
    <div>
      <Board />
    </div>
  );
};

export default Game;
