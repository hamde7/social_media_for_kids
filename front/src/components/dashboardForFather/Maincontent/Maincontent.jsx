import React from "react";
import Maincard from "../Maincard/Maincard";
// import classes from "./Maincontent.module.css";
import Seenposts from "../seenposts/Seenposts";
import Classification from "../classification/classification";

function Maincontent(props) {
  return (
    <div>
      <Maincard name={props.details.name} time={props.details.minute} image={props.details.photo} />
      <Seenposts postInfo={props.details.value} />
      <Classification id={props.details.id}/>
    </div>
  );
}

export default Maincontent;
