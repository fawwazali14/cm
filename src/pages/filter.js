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
      <div className="button-right">
            
            <button className="button2" onClick={handleSignInClick}>Post A Job</button>

            
        </div>
   
    )
  };
  
  