import { useState, useEffect, useRef } from "react";
// import "./AddPost.jsx";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LogOut from "../logOut";
function PostsList() {  
  const [posts, setPosts] = useState([]) ;
  const dataFromServer = useLoaderData()
  console.log("inside post List ")
  console.log(dataFromServer)
  const [isFetching, setIsFetching] = useState(false);
  const [isActive, setActive] = useState(true) ;
  const refForText  = useRef()
  const refForImage  = useRef()
  const [valForImage , setValForImage] = useState()
  // const [] = useState();
  const nav = useNavigate();
  const {register , handleSubmit , formState:{errors}} = useForm({

});
  useEffect(()=>{
    setPosts([...dataFromServer, ...posts]);
  },[])
  // useEffect(() => {

  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch("../../data.json");
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();

  // }, []);
  function showFrom() {
    //   setActive(!isActive);
    }
    function addPost(caption) {
        console.log("caption")
      console.log(caption); 
      const submittedPost =[ {
        id: posts[posts.length - 1].id + 1,
        caption: caption ,
        attachment: URL.createObjectURL(valForImage),
      }];
      console.log("submittedPost")
      console.log(submittedPost)
      setPosts([...submittedPost, ...posts]);
    }
    function onChangeHundler(e){
      setValForImage(e.target.files[0])
    }
    async function hundleSubmit(data){
        // addPost(data["caption"])
        console.log(localStorage["token"])
        data["token"] =  localStorage["token"]
        const formData = new FormData();
        formData.append('caption', data['caption']);
        formData.append('category_id', data['category_id']);
        formData.append('token', data['token']);
        formData.append('attachment', valForImage);
        console.log("when click button")
        console.log(formData);
        try {
            const response = await fetch('http://127.0.0.1:8000/api/post/add', {
              method: 'POST',
              body: formData,
              headers: {
                // Omit 'Content-Type' header to let browser set it automatically for FormData
              },
            });
      
            const data = await response.json();
            location.replace('/Dash-board-writer')
            // nav('/Dash-board-writer')
          } catch (error) {
            console.error('Error uploading image:', error);
          }
          
    }
    function hundleClickLogOut(){
        LogOut()
      }
  return (
    <>
     
      {/* {!isFetching && posts.length > 0 && ( */}
        <div className={classes.Posts}>
         {      
               <div className={`${classes.MainAreaForPosts}`}>
                <h2 className={classes.LogOut} onClick={hundleClickLogOut}>LogOut</h2>
               <div className={classes.addPostSection}>
                 <button onClick={showFrom} className={classes.addPostBtn}>
                   Write Post
                 </button> 
                 <form onSubmit={handleSubmit(hundleSubmit)}>
                 <div className={`${classes.form} ${isActive ? classes.active : ""}`}>
                   <textarea
                     ref={refForText}
                     {...register("caption")}
                   ></textarea>


        <fieldset className={classes.field}>
          <legend>choose sections</legend>
          {/* <br /> */}
          <div>
            <input
              type="radio"
              name="categories"
              value={8}
              {...register("category_id")}
            />
            <p className={classes.chkitem}>video</p>
            <input
              type="radio"
              name="categories"
              value={9}
              {...register("category_id")}
            />
            <p className={classes.chkitem}>music</p>
            <input
              type="radio"
              name="categories"
              value={3}
              {...register("category_id")}
            />
            <p className={classes.chkitem}>fun</p>
            <input
              type="radio"
              name="categories"
              value={2}
              {...register("category_id")}
            />
            <p className={classes.chkitem}>sport</p>
            <input
              type="radio"
              name="categories"
              value={1}
              {...register("category_id")}
            />
            <p className={classes.chkitem}>chess</p>
            <input
              type="radio"
              name="categories"
              value={4}
              {...register("category_id")}
            />
            <p className={classes.chkitem}>math</p>
            {errors.categories && (
              <p className={classes.errmsg} style={{ color: "red" }}>
                {errors.categories.message}
              </p>
            )}
          </div>
        </fieldset>


                   <span>Upload Image</span>
                   <input type="file" ref={refForImage}  onChange={onChangeHundler} />
                   <button  className={classes.addPostBtn}>
                     Add Post
                   </button>
                 </div>

                 </form>
               </div>
               </div>       
         }
          {posts.map((post) => (
            <Post
              postID={post.id}
              body={post.caption}  
              ImageForPost={post.attachment}
            />
          ))}
        </div>
      {/* )} */}
      {/* {!isFetching && posts.length === 0 && (
         <div style={{ textAlign: "center", color: "red" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )} */}
      {/* {isFetching && (
          <p style = {{ textAlign: "center", color: "red" }}>Loading posts...</p>
      )} */}
    </>
  );
}

export default PostsList;
