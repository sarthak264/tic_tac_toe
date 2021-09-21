import "./board.css";
import Cell from "./../cell/Cell";

const Board = (props) => {
  return (
    <div id="board">
      {props.cellValues.map((item, index) => {
        const highlight = props.winningCombination && 
                          props.winningCombination.indexOf(index) >= 0;
        return (
          <Cell key={index} value={item} highlight={highlight} onClick={() => {props.cellClicked(index)}}/>
        )
      })}
    </div>
  );
};

export default Board;
