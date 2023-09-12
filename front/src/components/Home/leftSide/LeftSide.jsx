// import "/src/App.css";
import classes from './LeftSide.module.css'
import Xo from "./Xo/Xo";
import Profile from "./Profile/Profile" ;
import { useLoaderData } from 'react-router-dom';
const LeftSide = () => {
  const data = useLoaderData().details;
  
  return (
    <div style={{backgroundColor:"#F5F5F5"}} className={classes.main}>
      <Profile name = {data.value.name} 
        id = {data.value.id}
       imageUrl = {data.value.profile} 
       hobbies = {data.category} 
       minute = {data.value.current}
      />
      <hr
          style={{
            position: "relative",
            width: '98%', 
            height: '0px',
            top: '20px',
            outline:"none",
            border: '3px solid rgb(255, 168, 0)',
            fontSize:"0px",
          }}
        />   
      <Xo />
    </div>
  );
};
export default LeftSide;