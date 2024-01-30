import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Blog = () => {

  const {id}=useParams();
  const [post,setpost]= useState(null);


  const getPost= async()=>{
    const res=await fetch(`https://dummyjson.com/products/${id}`)
    const data =await res.json();
    setpost(data);
  };

  useEffect(()=>{
    getPost();
  },[]);

  if(post){
    return (
      <div className="post1">
        <h3>
          {" "}
          { post.id}.Title {post.title}
        </h3>
        <p>{post.description}</p>
        <img src={post.images[0]} alt="" />
        <img src={post.images[1]} alt="" />
        <img src={post.images[2]} alt="" />

      </div>
    )
  }else{
    return "loading..."
  }
  

  
}

export default Blog