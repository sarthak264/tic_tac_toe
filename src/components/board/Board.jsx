import "./board.css";
import Cell from "./../cell/Cell";

const Board = () => {
  const cellValues = ['X','X','X','X','O','X','O','',''];
  const winningCombination = [0,4,8];

  return (
    <div id="board">
      {cellValues.map((item, index) => {
        const highlight = winningCombination && 
                          winningCombination.indexOf(index) >= 0;
        return (
          <Cell key={index} value={item} highlight={highlight} />
        )
      })}
    </div>
  );
};

export default Board;
