import { useState } from "react";
import "../css/filter.css";
import { useNavigate } from "react-router-dom";

export default function Filter()  {
  const [filterData, setFilterData] = useState({
    minPay: '',
    maxPay: '',
    duration: '',
    jobTitle: '',
});

const handleInputChange = (e) => {

    const { name, value } = e.target;
    setFilterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getFilteredData(filterData);
  };

  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/jobsp"); // Navigate to '/jobsview' when sign-in is successful
  };

  const getFilteredData = (data) => {

    // switch()

    console.log('Filter Data:', data);
  };
    return(
      <div>
            <form className="filter-form">

                <div className="filter">
                <p className="filterText">Filter Your Preferences</p>

                    <div className="payPerHrFilter">
                        <fieldset className="filter-fieldset">Pay Per Hour:<br/>
                            <input name="minPay" className="minPay" value={filterData.minPay} min='1' max='50' type="number" onChange={handleInputChange} placeholder="$Min" />
                            <input name="maxPay" className="maxPay" value={filterData.maxPay} min='1' max='50' type="number" onChange={handleInputChange} placeholder="$Max" />
                        </fieldset>
                    </div>
                    <div className="durationFilter">
                        <fieldset className="filter-fieldset">Hours per Day:<br/>
                            <input name="duration" className="minPay" value={filterData.duration} min='1' max='7' type="number" onChange={handleInputChange} placeholder="Number of Hours" />
                            {/* <input className="endTime" value={filterData.endTime} onChange={handleInputChange} type="number" placeholder="End Time" /> */}
                        </fieldset>
                    </div>
                    <div className="titleFilter">
                        <fieldset className="filter-fieldset">Title of Job:<br/>
                            <input name="jobTitle" className="minPay" value={filterData.jobTitle} onChange={handleInputChange} type="text" placeholder="Title of Job"></input>
                        </fieldset>
                    </div>

                    <button className="applyBtn" onClick={handleSubmit}>Apply Filters</button>
                    <br />
                    <br />
                    <button className="button2" onClick={handleSignInClick}>Post A Job</button>

                </div>
                
            </form>

            
        </div>
   
    )
  };
  
  