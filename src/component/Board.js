import React, { useState } from "react";
import styled from "styled-components";
import Square from "./Square";

const SquareWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 1rem;
  background-color: rgb(230, 247, 255);
  box-sizing: border-box;
`;

const StatusHeading = styled.div`
  padding: 2rem;
  border: 2px solid black;
  box-shadow: 5px 2px 5px gray;
  border-radius: 5px;
  text-align: center;
  color: black;
`;

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setIsXNext] = useState(true);
  const [playAgain, setPlayAgain] = useState(false);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    console.log("squares are", squares);

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsXNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else if (squares.every((square) => square !== null)) {
    setPlayAgain(!playAgain);
    status = "Its a draw";
  } else {
    status = "Next Player turn  is " + (xIsNext ? "X" : "O");
  }

  const handlePlayAgain = () => {
    setSquares(Array(9).fill(null));
    setPlayAgain(!playAgain);
  };

  return (
    <Wrapper>
      <StatusHeading>
        <b>
          {playAgain ? (
            <button onClick={handlePlayAgain}> Play Again</button>
          ) : (
            status
          )}
        </b>
      </StatusHeading>
      <SquareWrapper>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </SquareWrapper>
      <SquareWrapper>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </SquareWrapper>
      <SquareWrapper>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </SquareWrapper>
    </Wrapper>
  );
};

export default Board;
