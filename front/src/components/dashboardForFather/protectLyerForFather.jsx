import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
export default function ProtectedLayer({children}){
    const token = localStorage["token"];
    const [showing , setshowing] = useState(false)
    const nav = useNavigate();
    async function testToken(){
        let data ={token : token}
        console.log("token befor send")
        console.log(data);
        await fetch('http://127.0.0.1:8000/api/check',{
        method : "post",
        headers : {'content-type' : 'appliction/json'},
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(dataRes => {
        if(dataRes.status === "false" || dataRes.key!="parent"){
            nav('/')
        }else{
            setshowing(true);
        }
    })
    .then(error => console.log(error))
    }
    useEffect(()=>{
        if(token){
            testToken();
        console.log('hhhhhh')
        // nav('/Dash-board');
        }
    },[])
    return(<>
    
        {showing && <div>
                <div>{children}</div>
            </div>
        }
    </>
    )
}