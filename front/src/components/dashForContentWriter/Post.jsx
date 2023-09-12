import classes from "./Post.module.css";
import { useState, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
// import { animated } from "react-spring";
//import axios from "axios";
export default function Post({ postID, author, body, ImageForPost }) {
  const [isVisible, setIsVisible] = useState(true);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {isVisible && (
        <div className={classes.Post}>
          <img src={ImageForPost} />
          <p className={classes.pHeight}>
            {showMore ? body : body.substring(0, 150) + "..."}
          </p>
          <button
            className={classes.showMore}
            onClick={() => setShowMore(!showMore)}
          >
            Show {showMore ? "less" : "More"}
          </button>
          <div className={classes.dflex}>
            
          </div>
        </div>
      )}
    </>
  );
}
