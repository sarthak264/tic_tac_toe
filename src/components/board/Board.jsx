import "./board.css";
import Cell from "./../cell/Cell";

const Board = () => {
  return (
    <div id="board">
      <Cell value="X" highlight={true}/>
      <Cell value="X" highlight={true}/>
      <Cell value="X" highlight={true}/>
      <Cell value="X" highlight={false}/>
      <Cell value="O" highlight={false}/>
      <Cell value="X" highlight={false}/>
      <Cell value="O" highlight={false}/>
      <Cell value="" highlight={false}/>
      <Cell value="" highlight={false}/>
    </div>
  );
};

export default Board;
