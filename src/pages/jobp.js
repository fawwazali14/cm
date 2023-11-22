import '../css/jobp.css';
import React, { useState, useEffect } from "react";


import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Jobp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    ssn: '',
    jobTitle: '',
    description: '',
    duration: '',
    payPerHr: '',
    location: '',
  });


  const handleclick = () =>{

  } 


  return (
    <div className="Registration-form">

      <div className='Title'>
        <p className='head'>Post a JOB...</p>
        <p>Fill this form to find your caretaker!</p>
      </div>

      <form id="UserDetails">
          <div className='row'>

            <div className='nameFields'>
              <fieldset>
              <legend>Name</legend>
              <input className='firstName' type='text' placeholder='First Name' required />
              <input className='lastName' type='text' placeholder='Last Name' required />
              </fieldset>
            </div>

          </div>

          
          <div className='row'>

            <div>
              <fieldset>
                <legend>Email</legend>
                <input className='email' type='text' placeholder='Email' required />
              </fieldset>
            </div>

          </div>  

          
          <div className='row'>

            <div>
              <fieldset>
                <legend>SSN</legend>
                <input className='ssn' type='text' placeholder='SSN' required />

              </fieldset>
            </div>

          </div> 
          
          <div className='row'>

            <div>
              <fieldset>
                <legend>Title of Job</legend>
                <input className='jobTitle' type='text' placeholder='Title' required />

              </fieldset>
            </div>

          </div> 
          
          <div className='row'>

            <div>
              <fieldset>
                <legend>
                  Description of Job
                </legend>
                <textarea className='description' rows="3" cols="30" placeholder='Describe the job in brief' required />

              </fieldset>
            </div>

          </div> 
        
          <div className='row'>

            <div>
              <fieldset>
                <legend>Duration of Job</legend>
                <input className='duration' type='text' placeholder='Number of Hours' required />
              </fieldset>
            </div>

          </div> 
          
          <div className='row'>

            <div>
              <fieldset>
                <legend>Pay per Hour</legend>
                <input className='payPerHr' type='number' placeholder='(in USD)' required />

              </fieldset>
            </div>

          </div> 
          
          <div className='row'>

            <div>
              <fieldset>
                <legend>Location of Job</legend>
                <input className='location' type='text' placeholder='Address' required />

              </fieldset>
            </div>

          </div>
        
        <button className='export-btn'  onClick={handleclick()}>
          Submit
        </button>


        </form>
    </div>
  );
}

export default Jobp;
