
export default async function fetchFromServerForHome(){
    let finaldata ={};
    let profileData ={};
    let token1=localStorage["token"];
    let obForPost  = {};
    if(token1!==undefined){
    let data={};
    let date = new Date();

    data["token"]=token1;
    data["day"] = date.getDate()
    await fetch('http://127.0.0.1:8000/api/getProfile',{
        method : "post",
        headers : {'content-type' : 'appliction/json'},
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(dataRes => {
        if(dataRes.status === "true"){
        }else{
        }
        profileData = dataRes;
    })
    .then()
    console.log("profile data")
    console.log(profileData)
    if(profileData.status==="true"){
    await fetch('http://127.0.0.1:8000/api/post/cheked',{
        method : "post",
        headers : {'content-type' : 'appliction/json'},
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(dataRes => {
        if(dataRes.status === "true"){

            finaldata = dataRes;
        }else{
            finaldata = dataRes;

        }
        console.log("posts  data")
        console.log(finaldata)
    })
    .then(error => console.log("ther is error"))
}
finaldata["details"]=profileData;
    }else{
        finaldata={status : "false"}
        finaldata["details"]={status : "false"}
    }
    // let details = {
    //     status : "true" ,
    //     key : "checked postes",
    //     value : 
    //         {
    //             id:1,
    //             name:"judy",
    //             profile : './FG.jpg',
    //             minute : 100 ,
    //             email : "judy@online.com",
    //             gender : "femele",
    //             user_id : 1
    //         }
    // }
    // let obForPost = {
    //     status : "true" ,
    //     key : "checked postes",
    //     value : [
    //         {
    //             id : 37 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "sport", 
    //             writer_name : "baraa",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         },
    //         {
    //             id : 38 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "learn", 
    //             writer_name : "hamdi",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : './FG.jpg'
    //         },
    //         {
    //             id : 40 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 41 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 42 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 43 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 44 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 45 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 46 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 47 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 48 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 49 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 50 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 51 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 52,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 53 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 54 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 55 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 56 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 57 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //         ,
    //         {
    //             id : 58 ,
    //             caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iste minus, aliquam porro eaque laudantium quis cum amet nemo pariatur quia optio est aut ipsum, veniam ea voluptate ad autem?",
    //             date : "2023-06-01 18:35:27",
    //             category_name : "fun", 
    //             writer_name : "bisher",
    //             numberoLikereaction : 38 , 
    //             numberoDeslikereaction: 50 ,
    //             numberoLovefreaction : 20 ,
    //             img : "./FG.jpg"
    //         }
    //     ]
    // }
    // obForPost["details"]=details;
    return finaldata;
}


export async function fetchComments({params}){
    const respons = await fetch('http://127.0.0.1:8000/api/post/comment/' + params.post_id);
    const resdata = await respons.json();
    console.log("data when fetch comments ")
    console.log(resdata)
    resdata["post_id"]=params.post_id;
    return resdata;
    // let ob = {
    //     value : [
    //         {
    //             id:11,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:12,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:13,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:14,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:15,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:16,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:17,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:18,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:19,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:20,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:21,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:22,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:23,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //         {
    //             id:24,
    //             name:"ahmad",
    //             comment:"your life very nice"
    //         },
    //     ]
    // }
    // return ob;
}