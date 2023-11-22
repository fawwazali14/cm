import React from "react";
import "../css/Main.css";
import { Link, useNavigate } from "react-router-dom";
import Register_care_taker from "./register_taker";

export default function Main() {
  const navigate = useNavigate();

  const handleJoin1Click = () => {
  
    navigate("register_taker");
  };
  return (
    <div>
      <p className="head">
        Connecting Caregivers and Those in Need for a Better Tomorrow!
      </p>
      {/* <div className="button-container">
        <button className="join1" onClick={handleJoin1Click}>
          Join as Care Taker...
        </button>
        <button className="join2" onClick={handleJoin1Click}>
          Join as Care Recipent...
        </button>

      </div> */}
    </div>
  );
}
