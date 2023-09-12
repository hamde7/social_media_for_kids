import classes from "./Post.module.css";
import { useState, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Post({ postID, author, body, ImageForPost }) {
  const [isVisible, setIsVisible] = useState(true);
  const [showMore, setShowMore] = useState(false);
  async function accept(event) {
    event.preventDefault();
    let data = {};
    data["id"]=postID;
    await fetch('http://127.0.0.1:8000/api/post/accept',{
            method : "post",
            headers : {'content-type' : 'appliction/json'},
            body : JSON.stringify(data)
        }).then(res => res.json())
        .then(dataRes => {
            console.log("data from viewer ")
            console.log(dataRes)
            if(dataRes.status === "true"){
                console.log("in true state in login")
                console.log(dataRes) 
            }else{
                console.log("error")
            }
        })
        .then(error => console.log(error))
    setIsVisible(false);
  }
  async function reject(event) {
    event.preventDefault();
    let data = {};
    data["id"]=postID;
    await fetch('http://127.0.0.1:8000/api/post/delete',{
            method : "post",
            headers : {'content-type' : 'appliction/json'},
            body : JSON.stringify(data)
        }).then(res => res.json())
        .then(dataRes => {
            console.log("data from viewer ")
            console.log(dataRes)
            if(dataRes.status === "true"){
                console.log("in true state in login")
                console.log(dataRes) 
            }else{
                console.log("error")
            }
        })
        .then(error => console.log(error))
    setIsVisible(false);
  }
  return (
    <>
      {isVisible && (
        <div className={classes.Post}>
          <img src={ImageForPost} />

          <p> Author : {author} </p>
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
            <button className={classes.button1} onClick={accept}>
              Accepted <AiFillCheckCircle />
            </button>
            <button className={classes.button2} onClick={reject}>
              Rejected <AiFillCloseCircle />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
