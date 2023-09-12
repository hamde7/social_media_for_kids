import Modal from "./Modal"
import { useEffect, useRef, useState } from "react";
import { useLoaderData, Link } from 'react-router-dom';
import classes from './comments.module.css';
import { BsFillSendFill } from "react-icons/bs";
export default function Comments(){
    const data = useLoaderData();
    console.log("data insid comment router")
    console.log(data)
    const [thereIsData , setTherIsData] = useState(false);
    useEffect(()=>{ if(data.status === "true"){ 
        setTherIsData(true)
    }},[])
//     const post = useLoaderData();

//   if (!post) {
//     return (
//       <Modal>
//         <main className={classes.details}>
//           <h1>Could not find post</h1>
//           <p>Unfortunately, the requested post could not be found.</p>
//           <p>
//             <Link to="/Home" className={classes.btn}>
//               Okay
//             </Link>
//           </p>
//         </main>
//       </Modal>
//     );
//   }
  const [msg , setmsg] = useState("");
  const [newData , setNewData ] = useState(data.value);

  async function commentHundle(){

        if(msg.trim()===""){
        return 0;
        }
        let token = localStorage["token"]
        let dataToSend = {token : token , 
            post_id: data.post_id,
            comment : msg
                }
        
        
        await fetch('http://127.0.0.1:8000/api/post/add_comment',{
        method : "post",
        headers : {'content-type' : 'appliction/json'},
        body : JSON.stringify(dataToSend)
    }).then(res => res.json())
    .then(dataRes => {
        if(dataRes.status === "true"){
            if(thereIsData === true){
                setNewData([...newData , {child:dataRes.name,comments:msg}]);
                
            }else{
                setTherIsData(true)
                setNewData([{child:dataRes.name,comments:msg}]);
            }
            setmsg("");
        }else{
            console.log("error")
        }
    })
    .then(error => console.log(error))
  
  }
  return (
    <Modal>{thereIsData &&
        <main className={classes.details}>
            {newData.map((i) =>{
            return  <div >
                <p>{i.child}</p>
                <p>{i.comments}</p>
            </div>
            })}
        <div>
            <input type="text" value={msg} onChange={(e)=>{setmsg(e.target.value)}} />
            <span onClick={commentHundle} >
            <BsFillSendFill color="#20DF7F" fontSize="25px" style={{ marginBottom:"-10px"}}/>
            </span>
        </div>
      </main>}
      {!thereIsData && 
        <main className={classes.details}>
        <h4  className={classes.nocomment}>there is no comments</h4>
    <div>
        <input type="text" value={msg} onChange={(e)=>{setmsg(e.target.value)}} />
        <span onClick={commentHundle} >
        <BsFillSendFill color="#20DF7F" fontSize="25px" style={{ marginBottom:"-10px"}}/>
        </span>
    </div>
  </main>
      }
    </Modal>
  );
}