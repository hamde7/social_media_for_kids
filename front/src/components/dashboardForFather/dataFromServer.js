import { Container } from "reactstrap";

export default async function data() {

    let resData;
    let token1=localStorage["token"];
    if(token1!==undefined){
    let data={};
    data["token"]=token1;
    await fetch('http://127.0.0.1:8000/api/getChild',{
        method : "post",
        headers : {'content-type' : 'appliction/json'},
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(dataRes => {
        if(dataRes.status === "true"){
        }else{
        }
        resData=dataRes;
    })
    .then(error => {

        console.log(error)})
    }else{
        resData={status:"false"}
    }

return resData;
//   let ob = {
//     kids: [
//       {
//         id: "2",
//         name: "Farhan",
//         profile: "../../public/avatar-g21b14a270_1280.png",
//         minute: 170,
//         email: "aborahan@online.com",
//         gender: "male",
//         user_id: 2,
//       },
//       {
//         id: "5",
//         name: "farima",
//         profile: "../../public/avatar-g21b14a270_1280.png",
//         minute: 140,
//         email: "aborahan@online.com",
//         gender: "female",
//         user_id: 2,
//       },
//       {
//         id: "6",
//         name: "ahmad",
//         profile: "../../public/avatar-g21b14a270_1280.png",
//         minute: 125,
//         email: "aborahan@online.com",
//         gender: "male",
//         user_id: 2,
//       },
//     ],
    // number of kids etc.....
  };
//   console.log(ob);
//   return ob;

