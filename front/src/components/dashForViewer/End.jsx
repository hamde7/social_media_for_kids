// import clasese from "/src/Pos    t/End.module.css";
import classes from './end1.module.css'
import { useLoaderData, useNavigate } from "react-router-dom";
import PostsList from "./PostsList";
import { useEffect } from "react";
function End()
{
    const data = useLoaderData();
    const nav = useNavigate();
    console.log(data)
    useEffect(()=>{
        if(data.status==="false" && data.msg!=="posts not found")
        {
            nav('/');
        }
    },[])
    return(<>
                {data.status==="true"  && <PostsList />}
                {data.status==="false" && data.msg==="posts not found" && <div className={classes.noPosts}>ther are no posts...</div>}
            </>
    );
}
export default End ; 