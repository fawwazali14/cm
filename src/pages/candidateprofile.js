import "../css/candidate.css"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { sendDataToAPI } from "../functions/sendapi";
export default function Candidate()  {
    const location = useLocation();
    const jobData = location.state?.jobData;
    console.log(jobData)
    
    const clickrate = () =>{
        // const r = document.getElementById('rate').value
        setShowInput(!showInput)

    }

    const handleRatingSubmit = () => {
        const r = document.getElementById('rate').value
        if(r<=5){
            const x = {
                table : "rating",
                rating : r,
                user_id : jobData.ID
            }
            sendDataToAPI(x)
            .then(()=>{
                console.log("done")
                
            })
        }

        
    }

    const [showInput, setShowInput] = useState(false);


    return(
   
        <div>
            <div className="user-container">
                <div className="top-container">
                    <div className="left-container">
                        <h3>Name of User : {jobData.username}</h3>
                    </div>
                    <div className="right-container">
                        <h4 className="user-rating">Rating: 
                            <p className="rating">{jobData.Rating}</p>
                        </h4>
                        <div style={{display:'flex', flexDirection:'row', marginBottom:'20px'}}>
                            { showInput && <input type="number" min={1} max={5} className="rate" id="rate" /> }
                            { showInput && <button className="submit-rating" onClick={handleRatingSubmit}>Submit</button> }
                        </div>
                        <button className=".reportBtn" onClick={clickrate}>Rate User</button> 
                    </div>
                </div>
                <div className="bottom-container">
                    <div className="personal-info">
                        <h3>Personal Information</h3>
                        <p className="fieldname">Name</p>
                        <p className="fieldvalue user-name">{jobData.username}</p>
                        <p className="fieldname">Bio</p>
                        <p className="fieldvalue user-bio">{jobData.bio}</p>
                    </div>
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p className="fieldname">E-mail</p>
                        <p className="fieldvalue">{jobData.email}</p>
                        <p className="fieldname">Phone Number</p>
                        <p className="fieldvalue">{jobData.pno}</p>
                    </div>
                    <button className=".reportBtn">Report User</button> 
                </div>
            </div>
        </div>
    
   
    )
  };
  
  