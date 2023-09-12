export async function dataFromServer(){
    // let ob = {
    //     posts:[
    //         {
    //             postID: 1,
    //             author:"bisher",
    //             body :"Just had the best sushi of my life at this new restaurant in town! Highly recommend it to all my foodie friends 🍣👌 #sushi #foodie #yum",
    //             ImageForPost:"http://localhost:5173/src/assets/FG.jpg"
    //         },
    //         {
    //             postID: 2,
    //             author:"Hamdie",
    //             body :"Feeling grateful for my amazing friends who always know how to make me laugh and lift me up when I'm feeling down 💕 #friendshipgoals #grateful Can't believe it's already been a year since I graduated college! Time flies so fast 😱🎓 #throwbackthursday #collegegrad",
    //             ImageForPost:"http://localhost:5173/src/assets/FG.jpg"
    //         },
    //         {
    //             postID: 3,
    //             author:"Baraa",
    //             body :"Just finished reading the most incredible book - it's a must-read for anyone who loves mystery and suspense! 📚🔍 #bookworm #readinglist",
    //             ImageForPost:"http://localhost:5173/src/assets/FG.jpg"
    //         },
    //         {
    //             postID: 4,
    //             author:"Akram",
    //             body :"Had an amazing weekend exploring the great outdoors with my family - nothing beats fresh air and sunshine ☀️🌳 #familytime #naturelover",
    //             ImageForPost:"http://localhost:5173/src/assets/FG.jpg"
    //         }
    //     ]
    // }
    let ob ;
    let token1=localStorage["token"];
if(token1!==undefined){
    let data={};
    data["token"]=token1;
    await fetch('http://127.0.0.1:8000/api/post/get_posts_for_writer',{
        method : "post",
        headers : {'content-type' : 'appliction/json'},
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(dataRes => {
        if(dataRes.status === "true"){
            ob = dataRes;
        }else{
            ob = dataRes;
        }
    })
    .then(error => console.log(error))

}else{
    ob = {status:"false"}
}
    return ob;
}


export async function dataFromServerForVewer(){
    let ob ;
    let token1=localStorage["token"];
if(token1!==undefined){
    let data={};
    data["token"]=token1;
    await fetch('http://127.0.0.1:8000/api/post/pin',{
        method : "post",
        headers : {'content-type' : 'appliction/json'},
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(dataRes => {
        if(dataRes.status === "true"){
            ob = dataRes;
        }else{
            ob = dataRes;
        }
    })
    .then(error => console.log(error))

}else{
    ob = {status:"false"}
}
    return ob;
}