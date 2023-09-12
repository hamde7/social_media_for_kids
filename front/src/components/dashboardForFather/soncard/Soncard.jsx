import React, { useState } from "react";
import classes from "./Soncard.module.css";

function Soncard(props) {
  function hundleClick(){
    let info ={
        "minute":props.minute,
        "name" : props.name,
        "id" :props.id,
        "photo" : props.photo
    }
    props.setInfo(info)
}
  
  return (
    <div className={classes.minicard}  onClick={hundleClick}>
      <img className={classes.profilepic} src={props.photo} />
      <p className={classes.minicardtext}>{props.name}</p>
    </div>
  );
}

export default Soncard;
