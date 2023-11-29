import React from "react";
import "../css/jobdetails.css"
// import SampleImage from "."
import { useLocation } from 'react-router-dom';
import img from "../assets/crr.jpeg"
import { getUID } from "../firebase";
import { sendDataToAPI } from "../functions/sendapi";
import { useNavigate } from "react-router-dom";



import { useEffect,useState } from "react";

export default function Jobdetails() {
    const location = useLocation();
    const jobData = location.state?.jobData;
    const [uid, setUid] = useState(null);
    console.log(jobData)
    const navigate = useNavigate();

    const handleclick = () =>{
     
        
        const x = {
            table: "Applied",
            ID : uid,
            jid : jobData.job_ID
           
        }
        sendDataToAPI(x)
        

    }
    const handleuserClick = ()=>{
        navigate(`/profile/${jobData.ID}`, { state: { jobData: jobData } })
    }


    useEffect(() => {
        getUID()
          .then(uid => {
            setUid(uid);
          })
          .catch(error => {
            console.error('Error fetching UID:', error);
          });
      }, []);
    return (
        <div className="big-container">
            <div className="left-container">
            <div className="about-job">
                <h2>{jobData.job_title}</h2> {/* job title here */}
                

            </div>
            <div className="jobposted_user">
                <h3 onClick={handleuserClick}>{jobData.username}</h3>
            </div>
            <div className="job-details">
                <h3>Job Description</h3> 
                <p>{jobData.description}</p>
              

                <h3>Responsibilities</h3>
                <ul>
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    {/*responsibilities here */}
                </ul>

                <h3>Job Schedule</h3>
                <ul>
                    <li>Days of Work: </li>
                    <li>Duration per Day: </li>
                </ul>
            </div>

            </div>


            <div className="right-container">
                <button className="applyBtn" onClick={handleclick}>Apply Now</button>

                <div className="job-summary">
                    <fieldset className="summary-fieldset">
                        <legend className="legend-title">Job Summary</legend>
                        {/* <h3 className="summa">Job summary</h3> */}
                        <div className="summary-items">
                            <h4>Date Posted:{jobData.time_posted}</h4>
                            <h4>Job Location: {jobData.location}</h4>
                            <h4>Pay per Hour:{jobData.pay_per_hr} </h4>
                            <h4>Duration:{jobData.duration} </h4>
                        </div>
                    </fieldset>


                </div>
            </div>
        </div>
        
    );
}