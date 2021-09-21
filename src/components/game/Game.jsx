import { useState } from "react";
import "./game.css";
import Board from "./../board/Board";
import Modal from './../modal/Modal';

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

  // Misc variables
  const winningCombination = [];

  // Functions
  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";
  const cellClicked = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];
      newCellValues[cellIndex] = mark ? "X" : "O";
      setMark(!mark);
      setCellValues(newCellValues);
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
      <Modal />
    </>
  );
};

export default Game;
