import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";

const Home = () => {
const [posts, setPosts]=useState([]);

const getPosts=async ()=>{
const res=await fetch("https://dummyjson.com/products")
const data= await res.json();
setPosts(data.products);
}

useEffect(()=>{
  getPosts();
},[]);

return (
    <div className="posts">
      {posts.map(post=>(
        <Link to={`/blog/${post.id}`} key={post.id}>
        <h1 className="post ">
          {post.id}.Title: {post.title}
        </h1>
        </Link>
      ))}
    </div>
  )
}

export default Home