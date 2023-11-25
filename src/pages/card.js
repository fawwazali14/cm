import "../css/card.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();


  const fetchData = () => {
    fetch("http://127.0.0.1:5000/fetch_data?table=Job_Listings")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.jobs); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleSignInClick = () => {
    navigate("/jobsp"); // Navigate to '/jobsview' when sign-in is successful
  };
  const handleReadMoreClick = (p) => {
    console.log(p)
    console.log(p.job_ID)
    navigate(`/jobsp/${p.job_ID}`, { state: { jobData: p } }); 
  };


  return (
    <div className="Card">
      <button className="button2" onClick={handleSignInClick}>
        Post A Job
      </button>
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
