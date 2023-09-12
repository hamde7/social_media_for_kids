import classes from './Xo.module.css';
const Square = ({ clickedArray, handleClick }) => {
  return (
    <div className={classes.board}>
      {
      clickedArray.map((item, index) => {
        if (item == "") {
          return (
            <div
              key={index}
              className={classes.square}
              onClick={() => handleClick(index) } 
            >
              {item}
            </div>
          );
        } else {
          return (
            <div key={index} className={`${classes.square} ${classes.clicked}`}>
              {item}
            </div>
          );
        }
      })
      }
    </div>
    
  );
};
export default Square;