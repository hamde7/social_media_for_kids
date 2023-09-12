import classes from './Xo.module.css';
import { useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";
import Modal from "./Modal";
const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const Xo = () => {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  let Timeout ;  
  const newGame = () => {
    setGrid(Array(9).fill(INITIAL));
    setGameFinished(false);
    setDraw(false);
  };
  let  handleBot = () => {
    Timeout = setTimeout(() => {
    let x = [] ;
    grid.map((item , index) => {
       if(item === "") x.push(index);
    })
    let id = x[parseInt(Math.random() * 10) % x.length]; 
    console.log(gameFinished + " " + x.length);
    setGrid( grid.map((item, index) => {
      if (index === id) {
          if(player)
          return X_PLAYER ;
          else
          return O_PLAYER ; 
      } else {
        return item;
      }
    })
    );
    setPlayer(!player) ; 
   }, 500)
  };
  const handleClick = (id) => {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return X_PLAYER;
          } else {
            return O_PLAYER;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
};
 
  const isGameOver = () => {
    if (!gameFinished) {
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === X_PLAYER &&
          grid[winCombination[i][1]] === X_PLAYER &&
          grid[winCombination[i][2]] === X_PLAYER
        ) {
          setGameFinished(true);
          return true ;
        }
      }
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === O_PLAYER &&
          grid[winCombination[i][1]] === O_PLAYER &&
          grid[winCombination[i][2]] === O_PLAYER
        ) {
          setGameFinished(true);
          return true ;
        }
      }
      if (!grid.includes(INITIAL)) {
        setDraw(true);
        setGameFinished(true);
        return false;
      }
    }
    return false;
  };
  return (
    <div className={classes.App}>
      {
        <div className={classes.playerTurn}>
          Turn player: {player ? X_PLAYER : O_PLAYER}
        </div>
      }
      {
        isGameOver() 
      }
      {
       gameFinished && (
        <Modal>
         <EndGame
           newGame={newGame}
           player={player ? player : !player}
           draw={draw}
           X_PLAYER={X_PLAYER}
           O_PLAYER={O_PLAYER}
         />
        </Modal>
       )
      }
      {
        gameFinished && ( clearTimeout(Timeout) 
       )
      }
      {
        !gameFinished && player && (
           handleBot()
        )
      }
      {
        !gameFinished && (
         <Square clickedArray={grid} handleClick={handleClick} />    
        )
      }
      
    </div>
  );
};
export default Xo;