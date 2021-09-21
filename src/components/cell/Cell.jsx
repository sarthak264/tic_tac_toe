import "./cell.css";
import classNames from "classnames";

const Cell = (props) => {
  const cellClasses = classNames({
    cell: true,
    winner: props.highlight == true
  })
  
  const cellContentClasses = classNames({
    'cell-content': true,
    populated: props.value
  })

  return (
    <button className={cellClasses}>
      <span className={cellContentClasses}>{props.value}</span>
    </button>
  );
};

export default Cell;
