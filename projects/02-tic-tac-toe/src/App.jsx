import "./App.css";

import confetti from "canvas-confetti";
import Square from "./components/Square";

import { useState } from "react";
import { TURNS } from "./constants";
import { WinnerModal } from "./components/WinnerModal";
import { checkEndGame, checkWinnerFrom } from "./logic/board";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem("board");
    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem("turn");
    return turnFromLocalStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", turn);

    const newWinner = checkWinnerFrom(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(null);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} onResetGame={resetGame} />
    </main>
  );
}

export default App;
