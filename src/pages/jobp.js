import '../css/jobp.css';
import React, { useState } from "react";

function Jobp() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    description: '',
    duration: '',
    payPerHr: '',
    location: '',
  });

  const sendDataToAPI = async (dataToSend) => {
    const url = 'http://127.0.0.1:5000/insert_data';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log('Data sent successfully!');
        // Handle success
      } else {
        console.error('Failed to send data:', response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const handleclick = (event) => {

    const job_post_struct = {
      table : "Job_Listings",
      job_title: formData.jobTitle,
      description: formData.description,
      duration: formData.duration,
      pay_per_hr: formData.payPerHr,
      location: formData.location,
      time_posted : new Date().toISOString(),

    };
    sendDataToAPI(job_post_struct)


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
