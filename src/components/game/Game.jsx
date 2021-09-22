import { useState } from "react";
import "./game.css";
import Board from "./../board/Board";
import Modal from "./../modal/Modal";
import { calculateWinner } from "./../../util/calculateWinner";

const Game = () => {
  // useStates
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [mark, setMark] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [turnsLeft, setTurnsLeft] = useState(8);
  const [winner, setWinner] = useState();
  const [winningCombination, setWinningCombination] = useState([]);

  // Functions
  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";
  const cellClicked = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];
      newCellValues[cellIndex] = mark ? "X" : "O";

      const newTurns = turnsLeft - 1;

      const calcResult = calculateWinner(newCellValues, cellIndex, turnsLeft);

      setCellValues(newCellValues);
      setMark(!mark);
      setIsGameOver(calcResult.hasResult);
      setTurnsLeft(newTurns);
      setWinner(calcResult.winner);
      setWinningCombination(calcResult.winnerCombination);
    }
  };
  const restartGame = () => {
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setMark(true);
    setIsGameOver(false);
    setTurnsLeft(8);
    setWinner(undefined);
    setWinningCombination([]);
  };

  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellValues={cellValues}
          winningCombination={winningCombination}
          cellClicked={cellClicked}
        />
      </div>
      <Modal isGameOver={isGameOver} winner={winner} onClick={restartGame} />
    </>
  );
};

export default Game;
