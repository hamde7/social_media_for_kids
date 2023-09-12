import classes from './Xo.module.css';
const EndGame = ({ newGame, player, draw, X_PLAYER, O_PLAYER }) => {
    return (
      <div className={classes.endGameScreen}>
        {!draw && (
          <div className={classes.winText}>
            Player {player ? O_PLAYER : X_PLAYER} Win!
          </div>
        )}
        {draw && <div className={classes.winText}>Draw</div>}
        <div className={classes.btn}>
         <button className={classes.btn1} onClick={newGame}>
          New Game
         </button>
         <button className={classes.btn2} onClick={newGame}>
          Cancel
         </button>
        </div>
      </div>
    );
  };
  export default EndGame;