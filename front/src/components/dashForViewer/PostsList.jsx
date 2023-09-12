import { useState, useEffect } from "react";
import LogOut from "../logOut";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  function hundleClickLogOut(){
    LogOut()
  }
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch("./data.json");
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  // function addPostHandler(postData) {
  //   fetch("http://localhost:5173/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }

  return (
    <>
      {/* {!isFetching && posts.length > 0 && ( */}
      <h2 className={classes.LogOut} onClick={hundleClickLogOut}>LogOut</h2>
        <div className={classes.Posts}>
          {posts.value.map((post) => (
            <Post
              postID={post.id}
              author={post.writer_name}
              body={post.caption}
              ImageForPost={post.attachment }
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
