// import { useState } from "react";
import React, { useEffect, useState } from "react";
import Maincontent from "../components/dashboardForFather/Maincontent/Maincontent";
import Sidebar from "../components/dashboardForFather/sidebar/Sidebar";
import { useLoaderData, useNavigate } from "react-router-dom";
function DashFather() {
  const da = useLoaderData();
  const nav = useNavigate();
  const [talk, setTalk] = useState("");
  const [info , setInfo ] = useState({});
  const [showing , setshowing  ] = useState(false)
//   const [KidsInfo , setKidsInfo ] = useState({});
//   async function Clickhandle(e) {
    // let finalData;
    // await fetch("./utils/slider.json", {
    //   method: "post",
    //   headers: { "content-type": "appliction/json" },
    //   body: JSON.stringify(e.target.id),
    // })
    //   .then((res) => res.json())
    //   .then((dataRes) => {
    //     if (dataRes.sucsses === true) {
    //       finalData = dataRes;
    //     } else {
    //       console.log("error");
    //     }
    //   })
    //   .then((error) => console.log(error));
    // // return resData;
    // console.log("ananaaaa");
    // console.log(finalData);
//     return setTalk(<Maincontent></Maincontent>);
//   }\
    useEffect(()=>{
        if(da.status=="false"){
            nav('/')
        }else{
            setshowing(true)
        }
    },[])
    async function getChildPost(){
        let data = {}
        data["id"]=info.id
        let finaldataFrom ={};
        await fetch("http://127.0.0.1:8000/api/getChildPosts", {
          method: "post",
          headers: { "content-type": "appliction/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((dataRes) => {
            if (dataRes.status === "true") {
                finaldataFrom = dataRes;
            } else {
             
            }
          })
          .then((error) => console.log(error));
          //   console.log(finaldataFrom)
          //   console.log(info)
          let readayData = {...finaldataFrom , ...info}
          return setTalk(<Maincontent details={readayData}></Maincontent>);
    }
  useEffect(function(){

    getChildPost()
  },[info])
  return (<>
  {showing &&
    <div style={{ position: "relative" }}>
      <Sidebar  setInfo={setInfo} />
      {/* <Maincontent /> */}
      {talk}
    </div>}
  </>
  );
}

export default DashFather;
