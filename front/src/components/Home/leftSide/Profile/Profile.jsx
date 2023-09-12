import { useEffect, useRef, useState } from 'react';
import classes from './Profile.module.css';
import { useNavigate } from 'react-router-dom';
import LogOut from '../../../logOut';
const Profile = (props) => {
  const [ShowTime , setShowTime ] = useState("");
  const [Time, setTime]  = useState(props.minute)
  let current = 0;
  const timeRef= useRef();
  const [allwo , setAllwo ] = useState(false);
  const nav = useNavigate();
  function hundleClickLogOut(){
    LogOut()
  }
  function minute(){
    let x = setInterval(async function(){
      current-=0.5;
      // timeRef.current.value = current;
      if(current <= 0 ){
        let date = new Date()
        clearInterval(x);
        let data = {
            id:props.id,
            current:0,
            day:date.getDate()
        }
        await fetch('http://127.0.0.1:8000/api/currentTime',{
        method : "post",
        headers : {'content-type' : 'appliction/json'},
        body : JSON.stringify(data)
        }).then(res => res.json())
        .then(dataRes => {
            if(dataRes.status === "true"){
            }else{
            }
        })
        .then(error => {
            
        console.log(error)})
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        location.replace("/Home")
        // nav('/Home')
        

    }else {
        setTime(Math.floor(current))
        setShowTime(convertMinutesToTime(Math.floor(current)))
      };
      
    },2000 )
    
  }
  useEffect(() => {

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);
  
  useEffect(()=>{
    current=props.minute;
    setTime(current)
    minute()
  } , [])
  
  const handleUnload =(event) => {
    // Your function logic here
    event.preventDefault();

    
    let date = new Date()
    let data = {
        id:props.id,
        current:current,
        day:date.getDate()
        }
        fetch('http://127.0.0.1:8000/api/currentTime',{
        method : "post",
        headers : {'content-type' : 'appliction/json'},
        body : JSON.stringify(data)
        }).then(res => res.json())
        .then(dataRes => {
            if(dataRes.status === "true"){

            }else{

            }
        })
        .then(error => {
        
        })
    return (event.returnValue = 'Are you sure you want to leave?');
  };


  function convertMinutesToTime(minutes) {
    if (typeof minutes !== 'number' || minutes < 0) {
      return 'Invalid input';
    }
  
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(remainingMinutes).padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes}`;
  }

  return (
    <div className={classes.profile}>
      <span>Profile</span>
      <div className={classes.profileImage}>
        <img src={props.imageUrl} alt={props.name} />
      </div>
      <div className={classes.name}>name : {props.name}</div>
      <div className={classes.hoppies}>
      <span style={{fontWeight:"bold"}}>category:</span>
        {props.hobbies.map((hobby, index) => (
          <span key={index}>
            {hobby["name"]} {props.hobbies.length == index + 1 ? "" : ","}
          </span>
        ))}
      </div>
      {/* <input type="text" ref={timeRef}/> */}
      <p>time left : {ShowTime}</p>
      <p className={classes.LogOut} onClick={hundleClickLogOut}>LogOut</p>
    </div>
  );
};

export default Profile;
