import '../css/jobp.css';
import React, { useState,useEffect } from "react";
import { getUID } from "../firebase";
import { sendDataToAPI } from '../functions/sendapi';
import { useNavigate } from 'react-router-dom';


function Jobp() {
  const [uid, setUid] = useState(null);
  const job_post_struct = {
    table : "Job_Listings",
    job_title: "",
    description: "",
    duration: "",
    pay_per_hr: "",
    location: "",
    time_posted : "",
    ID : ""

  };
  useEffect(() => {
      getUID()
        .then(uid => {
          job_post_struct.ID = uid
          console.log(uid)
          setUid(uid);
        })
        .catch(error => {
          console.error('Error fetching UID:', error);
        });
    }, []);
  const [formData, setFormData] = useState({
    jobTitle: '',
    description: '',
    duration: '',
    payPerHr: '',
    location: '',
  });

  const navigate = useNavigate();
  const handleclick = (event) => {
    console.log("haha")

    console.log(uid)
    console.log("papa")
  
      job_post_struct.table = "Job_Listings";
      job_post_struct.job_title=formData.jobTitle;
      job_post_struct.description= formData.description;
      job_post_struct.duration= formData.duration;
      job_post_struct.pay_per_hr= formData.payPerHr;
      job_post_struct.location=formData.location;
      job_post_struct.time_posted =new Date().toISOString();
      job_post_struct.ID = uid

    
    sendDataToAPI(job_post_struct)
    .then(()=>{
        navigate("/")
    })


  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="Registration-form">
      <div className='Title'>
        <p className='head'>Post a JOB...</p>
        <p>Fill this form to find your caretaker!</p>
      </div>

      <form id="UserDetails">
 

        <div className='row'>
          <div>
            <fieldset>
              <legend>Title of Job</legend>
              <input
                className='jobTitle'
                type='text'
                placeholder='Title'
                required
                name="jobTitle"
                onChange={handleChange}
              />
            </fieldset>
          </div>
        </div>

        <div className='row'>
          <div>
            <fieldset>
              <legend>Description of Job</legend>
              <textarea
                className='description'
                rows="3"
                cols="30"
                placeholder='Describe the job in brief'
                required
                name="description"
                onChange={handleChange}
              />
            </fieldset>
          </div>
        </div>

        <div className='row'>
          <div>
            <fieldset>
              <legend>Duration of Job</legend>
              <input
                className='duration'
                type='text'
                placeholder='Number of Hours'
                required
                name="duration"
                onChange={handleChange}
              />
            </fieldset>
          </div>
        </div>

        <div className='row'>
          <div>
            <fieldset>
              <legend>Pay per Hour</legend>
              <input
                className='payPerHr'
                type='number'
                placeholder='(in USD)'
                required
                name="payPerHr"
                onChange={handleChange}
              />
            </fieldset>
          </div>
        </div>

        <div className='row'>
          <div>
            <fieldset>
              <legend>Location of Job</legend>
              <input
                className='location'
                type='text'
                placeholder='Address'
                required
                name="location"
                onChange={handleChange}
              />
            </fieldset>
          </div>
        </div>


      </form>
      <button className='export-btn' onClick={handleclick}>
          Submit
        </button>
    </div>
  );
}

export default Jobp;
