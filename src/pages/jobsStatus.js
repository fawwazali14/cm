import React, { useState, useEffect } from "react";
import "../css/jobs.css"
import { fetchData } from "../functions/getapi";
import { useLocation } from "react-router-dom";
import "../css/jobstatus.css"
import cardUserImage from "../assets/carduser.jpeg";
import { useNavigate } from "react-router-dom";



export default function JobsSatus() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const jobData = location.state?.jobid;
  const navigate = useNavigate()

  useEffect(() => {
    const x = {
      table: "Applies",
      job_ID: jobData
    };
    fetchData(x)
      .then((data) => {
        setData(data.data);
      });
  }, [jobData]);
  const handleCheckCandidate = (candidate) => {

    navigate(`/profile/${candidate.user_ID}`, { state: { jobData: candidate } })

  }
  return (
    <div>
      {data.length > 0 ? (
        <div>
          {data.map((candidate, index) => (
            <div key={index} className="homecard-container">
              <div className="profile-pic">
                {/* Render candidate profile picture or default image */}
                <img className="user-pic" src={cardUserImage} alt="Card User" />
              </div>
              <div className="home-content">
                {/* Render candidate name */}
                <h3 className="home-username">{candidate.username}</h3>
                {/* Render candidate bio */}
                <p className="home-bio">{candidate.bio}</p>
                <button onClick={() => handleCheckCandidate(candidate)}>Check Candidate</button>

              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No candidates applied for this job.</p>
      )}
    </div>
  );
}
