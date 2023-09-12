import React from "react";
import classes from "./Maincard.module.css";
import { useLoaderData } from "react-router-dom";

function Maincard(props) {

  return (
    <div className={classes.box}>
      <div className={classes.cardhead}>
        <img className={classes.profilepic} src={props.image} alt="" />
        <p>{props.name}</p>
      </div>
      <h2>time allowed</h2>
      <h2>{props.time}</h2>
    </div>
  );
}

export default Maincard;
