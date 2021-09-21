import "./modal.css";
import classNames from "classnames";

const Modal = (props) => {
    const modalClass = classNames({
        'modal-open' : props.isGameOver
    })
  return (
    <div id="modal-overlay" className={modalClass}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span></span>
          </div>
        </div>
        <div id="new-game-container">
          <button id="new-game-button">Start New Game</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
