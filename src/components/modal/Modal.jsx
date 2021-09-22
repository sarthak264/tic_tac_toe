import "./modal.css";
import classNames from "classnames";

const Modal = (props) => {
  const modalClass = classNames({
    "modal-open": props.isGameOver,
  });

  const message = props.winner ? `winner is ${props.winner}` : `It is a tie.`;
  return (
    <div id="modal-overlay" className={modalClass}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span>{message}</span>
          </div>
        </div>
        <div id="new-game-container">
          <button id="new-game-button" onClick={props.onClick}>
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
