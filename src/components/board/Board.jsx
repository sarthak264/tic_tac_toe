import "./board.css";
import Cell from "./../cell/Cell";

const Board = () => {
  const cellValues = ['X','X','X','X','O','X','O','',''];
  return (
    <div id="board">
      {cellValues.map((item, index) => {
        return (
          <Cell key={index} value={item} highlight={false} />
        )
      })}
    </div>
  );
};

export default Board;
