import "../css/card.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../functions/getapi";
import { getUID } from "../firebase";

function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUID().then((data)=> {
      const x = {
        table: "Job_Listings",
        ID : data
      }
      fetchData(x)
      .then((data)=>{
        console.log(data)
        setData(data.jobs)
  
      })

    })



    
    
  }, []);

  const navigate = useNavigate();




  
  const handleReadMoreClick = (p) => {
    console.log(p)
    console.log(p.job_ID)
    navigate(`/jobsdetails/${p.job_ID}`, { state: { jobData: p } }); 
  };


  return (
    <div className="Card">
      
      <div id="container">
        {data && data.length > 0 ? (
          data.map((job) => (
            <div key={job.job_ID} className="card">
              <img className="jobimage" src="./assets/image.jpeg" alt="Job" />
              <div className="card__details">
                <div className="name">{job.job_title}</div>
                <p>{job.description}</p>
                

                <button className="button1"  onClick={() => handleReadMoreClick(job)}>Read more</button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Card;
