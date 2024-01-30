import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    const res = await fetch(
      "https://frontend-mentor-apis-6efy.onrender.com/devjobs"
    );
    const data = await res.json();
    setJobs(data.data);
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="mt-[105px] ">
      <div className="container flex flex-wrap gap-[30px] gap-y-[65px] pb-[100px]">
        {jobs.map((job) => (
          <Link to={`/${job.id}`} key={job.id}>
            <div
              
              className="job cursor-pointer relative flex flex-col justify-between bg-white w-[350px] h-[228px] pt-[49px] rounded-md px-8 pb-9"
            >
              <div className="absolute -top-[26px] w-[50px] h-[50px] rounded-[15px] bg-[#938e8e7c] flex items-center justify-center">
                <img
                  src={`https://frontend-mentor-apis-6efy.onrender.com${job.logo}`}
                  alt=""
                />
              </div>
              <div>
                <div className=" text-[#6E8098] flex gap-[3px] mb-[3px] ">
                  <p>{job.postedAt}</p>
                  <p>. {job.contract}</p>
                </div>
                <h3 className="text-[#19202D] text-xl font-bold mb-3">
                  {job.position}
                </h3>
                <p className="text-[#6E8098]">{job.company}</p>
              </div>
              <div className="text-[#5964E0] font-bold">{job.location}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
