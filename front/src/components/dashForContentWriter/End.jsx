// import clasese from "./End.module.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import PostsList from "./PostsList";
import { useState , useEffect } from "react";
function EndForContentWriter(){
const [showing , setshowing  ] = useState(false)
const da = useLoaderData();
const nav = useNavigate();
useEffect(()=>{
    if(da.status=="false" ){
        nav('/')
    }else{
        setshowing(true)
    }
},[])

    return(<>
    
    {showing &&
        <PostsList />}
    </>
    );
}
export default EndForContentWriter ; 