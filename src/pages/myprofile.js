import { useState,useEffect } from "react";
import "../css/myprofile.css"
import { getUID } from "../firebase";
import { fetchData } from "../functions/getapi";
import { sendDataToAPI } from "../functions/sendapi";
import { auth } from "../firebase";
import 'firebase/auth';
import { useNavigate } from "react-router-dom";

export default function Myprofile() {
    const [uid,setUid] = useState("")
    const [myjobs,setMyjobs] = useState([])
    const [data,setData] = useState([
        {
          name: '',
          email: '',
          dob: '',
          pno: '',
          crr : '',
          travel : '',
          bio : ''
        },
      ]);
      const navigate = useNavigate();
    useEffect(()=>{
        getUID()
        .then((uid)=>{
            
            setData(uid)
            const x = {
                "table":"myprofile",
                "ID":uid
            }
            
            
            
            setProfileData(prevProfileData => ({
                ...prevProfileData,
                ID: uid
              }));
            fetchData(x)
            .then((data)=>{
                console.log(data.data)
                const { name, email, phone_number, dob, willing_to_travel, curr_job, bio, location,Rating } = data.data[0];
                

                // Update the profileData state, keeping 'table' and 'ID' unchanged
                setProfileData(prevState => ({
                    ...prevState,
                    name: name || "", // Use empty string as default if name is null or undefined
                    email: email || "",
                    phone_number: phone_number || "",
                    dob: dob || "",
                    willing_to_travel: willing_to_travel || "",
                    curr_job: curr_job || "",
                    bio: bio || "",
                    location: location || "",
                    Rating : Rating || ""
                }));
                

            })
            const y = {
                "table":"jobs_myprofile",
                "ID":uid
            }
           
            fetchData(y)
            .then((data)=>{
                console.log(data)
                setMyjobs(data)
                console.log("121")
                console.log(myjobs)
                

            })
        })

    },[])


    const [profileData, setProfileData] = useState({
        table : 'Usersupdate',
        ID:uid,
        name: "",
        email: "",
        phone_number : "",
        dob : "",
        willing_to_travel : "",
        curr_job : "",
        bio : "",
        location : ""

        

    });

    const handleInputChange = (e) => {
        
        const { name, value } = e.target;
        setProfileData((prevData) => ({
          ...prevData,
          [name]: value,
        }));

    };


      const [showButton, setShowButton] = useState(false);

    const enableInputFields = () => {
        const inputFields = document.querySelectorAll('input');
        const textArea = document.getElementById('textArea');
        for (const inputField of inputFields) {
            inputField.disabled = false;
        }
        textArea.disabled = false;
        setShowButton(true);

    }

    const saveAndDisableFields = () => {
        const inputFields = document.querySelectorAll('input');
        const textArea = document.getElementById('textArea');
        setShowButton(false)

        
        setData(profileData)
        console.log(profileData)
        sendDataToAPI(profileData)

        for (const inputField of inputFields) {
            inputField.disabled = true;
        }
        textArea.disabled = true;
    
    }

    const deleteAccount = () => {

        const x = {
            table : "Delete",
            ID : profileData.ID
        }
        

          
        sendDataToAPI(x)
        .then(()=>{
            (async () => {
                try {
                    const user = auth.currentUser;
              
                  if (user) {
                    // Delete the user's account
                    await user.delete();
                    console.log('User account deleted successfully.');
                    navigate("/")
                  } else {
                    console.log('No user is currently signed in.');
                  }
                } catch (error) {
                  console.error('Error deleting user account:', error.message);
                }
              })();
            
        })

        
    }

    const handleClick =(job_ID)=>{
        navigate(`/jobstatus/${job_ID}`, { state: { jobid: job_ID } }); 
    }
    return (
        <div>
            <div className="container bootstrap snippets bootdeys">
            <div className="row">
            <div className="col-xs-12 col-sm-9">
                <form className="form-horizontal">
                    <div className="panel panel-default">
                    <div className="panel-body text-center">
                    </div>
                    </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h4 className="panel-title">Personal Information</h4>
                    </div>
                    <div className="panel-body">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                        <input   type="text" required disabled={true} value={profileData.name} onChange={handleInputChange} name="name" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">City of Residence</label>
                        <div className="col-sm-10">
                        <input required disabled={true} type="text" value={data.location} onChange={handleInputChange} name="location" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Date of Birth</label>
                        <div className="col-sm-10">
                        <input required disabled={true} type="date"  value={data.dob} onChange={handleInputChange} name="dob" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Current Job (optional)</label>
                        <div className="col-sm-10">
                        <input required disabled={true} type="text" value={data.curr_job}  onChange={handleInputChange} name="curr_job" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Something About Yourself</label>
                        <div className="col-sm-10">
                        <textarea required id="textArea" disabled={true} value={data.bio} rows="5" onChange={handleInputChange} name="bio" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10 col-sm-offset-2">
                        <div className="checkbox">
                            <input required onChange={handleInputChange} value={data.travel} name="travel" disabled={true} type="checkbox" id="checkbox_1"/>
                            <label for="checkbox_1">Are you willing to travel for a job?</label>
                        </div>
                        </div>
                    </div>


                    {/* <div className="form-group">
                        <label className="col-sm-2 control-label">Company name</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control"/>
                        </div>
                    </div> */}
                    {/* <div className="form-group">
                        <label className="col-sm-2 control-label">Position</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control"/>
                        </div>
                    </div> */}
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h4 className="panel-title">Contact Information</h4>
                    </div>
                    <div className="panel-body">
                    {/* <div className="form-group">
                        <label className="col-sm-2 control-label">Work number</label>
                        <div className="col-sm-10">
                        <input type="tel" className="form-control"/>
                        </div>
                    </div> */}
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Mobile number</label>
                        <div className="col-sm-10">
                        <input required disabled={true} type="tel" value={data.pno} onChange={handleInputChange} name="phone_number" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">E-mail address</label>
                        <div className="col-sm-10">
                        <input required disabled={true} type="email" value={data.email}  onChange={handleInputChange} name="email" className="form-control"/>
                        </div>
                    </div>
                    
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h4 className="panel-title">Your Qualities</h4>
                    </div>
                    <div className="panel-body">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Quality 1</label>
                        <div className="col-sm-10">
                        <input required disabled={true} type="text" onChange={handleInputChange} name="quality1" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Quality 2</label>
                        <div className="col-sm-10">
                        <input required disabled={true} type="text" onChange={handleInputChange} name="quality2" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Quality 3</label>
                        <div className="col-sm-10">
                        <input required disabled={true} type="text" onChange={handleInputChange}name="quality3" className="form-control"/>
                        </div>
                    </div>                   
                    </div>
                </div>
                </form>

                {/* <DynamicInput /> */}

                <div className="button-group">
                        <div className="col-sm-10 col-sm-offset-2">
                            <div>
                                {showButton && 
                                <button onClick={saveAndDisableFields} 
                                className="btn btn-primary applyBtn">Save
                                </button>
                                }
                            </div>
                            {showButton && <button style={{display:'none'}} onClick={saveAndDisableFields} className="btn btn-primary applyBtn">Save</button>}
                            <button onClick={enableInputFields} className="btn btn-default applyBtn"> Edit </button>
                            <button onClick={deleteAccount} className="btn btn-default deleteBtn"> Delete Account</button>
                        </div>
                    </div>

            </div>
            </div>
            </div>
            <div className="panel-heading2">
                    <h4 className="panel-title">Your Jobs</h4>
            </div>

            <div id="container">
            {myjobs.map((dataItem, index) => (
                <div className="card" key={index}>
                    <img src="./assets/image.jpeg" className="job_img" alt="Lago di Braies" />
                    <div className="card__details">
                        <div className="name">{dataItem.job_title}</div>
                        <p>{dataItem.description}</p>
                        <button onClick={() => handleClick(dataItem.job_ID)}>Check Applied Candidates</button>

                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}