import { useState } from "react";
import "./game.css";
import Board from "./../board/Board";
import Modal from './../modal/Modal';
import {calculateWinner} from './../../util/calculateWinner'

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
  const [isGameOver,setIsGameOver] = useState(false);
  const [turnsLeft, setTurnsLeft] = useState(9);

  // Misc variables
  const winningCombination = [];

  // Functions
  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";
  const cellClicked = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      setTurnsLeft(turnsLeft-1);
      const newCellValues = [...cellValues];
      newCellValues[cellIndex] = mark ? "X" : "O";
      const calcResult = calculateWinner(newCellValues,cellIndex,turnsLeft);
      setMark(!mark);
      setCellValues(newCellValues);
      setIsGameOver(calcResult.hasResult);
    }
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
      <Modal isGameOver={isGameOver}/>
    </>
  );
};

export default Game;
