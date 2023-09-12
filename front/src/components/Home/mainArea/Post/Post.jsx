import classes from './Post.module.css'
import  ImageForPost from '../../../../assets/3a84c0f9d9092ba9ef09cca54a1ed93b.jpg'
import { BiHeart  } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
export default function Post(props){
    const [classesForP , setCalssesForP] = useState(false);
    const [reaction , setreaction ] = useState("");
    const data = useLoaderData();
    function handleCheck(){
        setCalssesForP(true);
        let dataToSend={child_id : data.details.value.id , 
            post_id : props.data.id
        }
        fetch('http://127.0.0.1:8000/api/post/show' , {
        method :'POST',
        body: JSON.stringify(dataToSend),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}
    async function HeartHundle(){
        if(reaction=="Heart" )
        {
            setreaction("");
            fetch('http://127.0.0.1:8000/api/post/add_reaction',{
                method : "post",
                headers : {'content-type' : 'appliction/json'},
                body : JSON.stringify(data)
            }).then(res => res.json())
            .then(dataRes => {
                if(dataRes.status === true){
                    setreaction("");
                }
            })
            .then(error => console.log(error))
        }else{
            setreaction("Heart");
            fetch('',{
                method : "post",
                headers : {'content-type' : 'appliction/json'},
                body : JSON.stringify(data)
            }).then(res => res.json())
            .then(dataRes => {
                if(dataRes.status === true){
                    setreaction("Heart")
                }
            })
            .then(error => console.log(error))
        }
    }
    async function LikeHundle(){
        if(reaction=="Like" )
        {
            setreaction("");
            fetch('',{
                method : "post",
                headers : {'content-type' : 'appliction/json'},
                body : JSON.stringify(data)
            }).then(res => res.json())
            .then(dataRes => {
                if(dataRes.status === true){
                    setreaction("")
                }
            })
            .then(error => console.log(error))
            
        }else{
            setreaction("Like");
            fetch('',{
                method : "post",
                headers : {'content-type' : 'appliction/json'},
                body : JSON.stringify(data)
            }).then(res => res.json())
            .then(dataRes => {
                if(dataRes.status === true){
                    setreaction("Like")
                }
            })
            .then(error => console.log(error))
        }
    }
    async function DisLikeHundle(){
        if(reaction=="DisLike" )
        {
            setreaction("");
            await fetch('',{
                method : "post",
                headers : {'content-type' : 'appliction/json'},
                body : JSON.stringify(data)
            }).then(res => res.json())
            .then(dataRes => {
                if(dataRes.status === true){
                    setreaction("")
                }
            })
            .then(error => console.log(error))
        }else{
            setreaction("DisLike");
            await fetch('http://127.0.0.1:8000/api/post/add_reaction',{
                method : "post",
                headers : {'content-type' : 'appliction/json'},
                body : JSON.stringify(data)
            }).then(res => res.json())
            .then(dataRes => {
                if(dataRes.status === true){
                    setreaction("DisLike");
                }
            })
            .then(error => console.log(error))
        }
    }
    return(
        <div className={classes.Post}>
            <p className={`${classesForP ? classes.Active : classes.notActive}`}>
                {props.data.caption}
            </p>
            <input type="checkbox" onClick={handleCheck} />
            <img className={`${classesForP ? classes.Active : classes.notActive}`} alt={props.data.attachment} src={props.data.attachment}/>
            <div   className={`${classes.reactionAndComment} ${classesForP ? classes.Active : classes.notActive} `}>
                <span onClick={HeartHundle}> {reaction=="Heart"?props.data.numberoLovefreaction+1:props.data.numberoLovefreaction} <BiHeart style={reaction=="Heart" ? {color:"red"} : {color:"black"}} /></span>
                <span onClick={DisLikeHundle}>{reaction=="DisLike"?props.data.numberoDeslikereaction+1:props.data.numberoDeslikereaction} <BiDislike style={reaction=="DisLike" ? {color:"blue"} : {color:"black"}}/></span>
                <span onClick={LikeHundle}> {reaction=="Like"?props.data.numberoLikereaction+1:props.data.numberoLikereaction}<BiLike  style={reaction=="Like" ? {color:"blue"} : {color:"black"}}/></span>
                <Link to={`/Home/${props.data.id}`}>
                <span > {props.data.numberofcommetns}<BiPencil /></span>
                </Link>
            </div>
        </div>
    )
}