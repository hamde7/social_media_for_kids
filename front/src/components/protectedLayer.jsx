import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Loading from "./Loading/Loading";
export default function ProtectedLayer({children}){
    const [LoadingState , setLoadingState] = useState(true);
    const token = localStorage["token"];
    const nav = useNavigate();
    async function testToken(){
        console.log("loadin should finish")
        let data ={token : token}
        setLoadingState(false);
        await fetch('http://127.0.0.1:8000/api/check',{
        method : "post",
        headers : {'content-type' : 'appliction/json'},
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(dataRes => {
        if(dataRes.status === "true"){
            console.log("dataRes from fetch true")
            console.log(dataRes)
            switch (dataRes.key) {
                case 'parent' : nav('/DashFather') ; break;
                case 'child' : nav('/Home') ; break ; 
                case 'chacker' : nav('/Dash-board-viewer') ; break ; 
                case 'writer' : nav('/Dash-board-writer') ; break ; 
            }
        }else{
            localStorage.clear();
        }
    })
    .then(error => console.log(error))
    // setLoadingState(true);
}
    useEffect(()=>{
        if(token){
            testToken();
        // console.log('hhhhhh')
        // nav('/Dash-board');
        }
    },[])
    return(<>
    
        {LoadingState && 
            <div>
                <div>{children}</div>
            </div>
        }
        {!LoadingState && <Loading></Loading>}
    </>
    )
}