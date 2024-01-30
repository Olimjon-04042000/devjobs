import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const Job = () => {
  const {id}=useParams();
  const [job, setJob]=useState([]);


  const getJob=async ()=>{
    const res=await fetch(`https://frontend-mentor-apis-6efy.onrender.com/devjobs/${id}`)
    const data=await res.json();
    setJob(data);
  };

  useEffect(()=>{
    getJob();
  },[]);

  return (
    <div>
      <div className="container">
        <h1 className=" text-center text-4xl mt-10 font-semibold">Excuse me, there is not more information.</h1>
      </div>
    </div>
  )
}

export default Job