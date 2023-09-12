import classes from '../components/Home/Home.module.css'
import RightSide from '../components/Home/rightSide/RightSide'
import MainArea from '../components/Home/mainArea/MainArea'
import LeftSide from '../components/Home/leftSide/leftSide'
import TimeFinish from '../components/Home/Timefinish/TimeFinish'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home(){
    const nav = useNavigate();
    const data = useLoaderData();
    const [status , setStatus ] = useState(false)
    const [timeAllow , setTimeAllwo] = useState(true);
    useEffect(
        ()=>{
            if(data.details.status==="false"){
                if(data.details.msg==="your allowed time is expired")
                {
                    setTimeAllwo(false);
                }else{
                    console.log("inside false")
                    console.log(data)
                    nav("/");

                }
            }else{
                setStatus(true);
            }


        }

    ,[])
    if(status==true){
        return (
            <>
                <div className={classes.mainPage}>
                    <div className={classes.maincontainar}>
                    <LeftSide />
                    <MainArea />
                    <RightSide />
                    </div>
                </div>
            </>
        )
    }
    return<>
        {!timeAllow && <TimeFinish>{data.details.msg}</TimeFinish>}
        <div></div>
    
    </>
    
}