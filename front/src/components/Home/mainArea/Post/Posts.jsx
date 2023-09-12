import classes from './Posts.module.css'
import Post from './Post'
import { useLoaderData } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Posts(){
    const [isLoading, setIsLoading] = useState(false);
  const [dataFromScroll , setData] = useState([]);
  const [isDataFromScroll , setIsDataFromScroll] = useState(false);
  const [thereIsPosts , setThereIsPosts ] = useState(false)
    const data = useLoaderData();
    useEffect(() => {
        if(data.status ==="true" ){
            setThereIsPosts(true)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


      useEffect(() => {
        if (isLoading) {
          fetchData();
        }
      }, [isLoading]);

      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight
        ) {
          setIsLoading(true);
        }
      };

      const fetchData = async () => {
        let obForPostv =[];
        let token1 = localStorage["token"]
        try {
          // Make your API request here
          let date = new Date();
          data["token"]=token1;
          data["day"]=date.getDate();
    await fetch('http://127.0.0.1:8000/api/post/cheked',{
        method : "post",
        headers : {'content-type' : 'appliction/json'},
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(dataRes => {
        if(dataRes.status === "true"){
            obForPostv = dataRes;
        }else{
        }
    })
    .then(error => console.log(error))

    
          setData(function(){
            return [...data.value, ...obForPostv.value]});
          
          setIsLoading(false);
        } catch (error) {
        }
        setIsDataFromScroll(true)
      };

      if(thereIsPosts===true){
    return (<>
            <div className={`${classes.MainAreaForPosts}`}>
                {data.value.map((e)=>{
                    return (<Post data={e} key={e.id}/>)
                })}

            </div>
            {isDataFromScroll && <div className={`${classes.MainAreaForPostsFromScroll}`}>
                {dataFromScroll.map((e)=>{
                    return (<Post data={e} key={e.id}/>)
                })}
            </div>}
        </>
    )}
    return(<div className={classes.noPosts}>there are no posts....</div>)
}