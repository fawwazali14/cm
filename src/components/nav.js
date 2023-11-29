import "../css/nav.css";
import "../css/Main.css";
import img from "../assets/crr.jpeg";
import React from "react";
import { fetchData } from "../functions/getapi.js";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarelements";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { sendDataToAPI } from "../functions/sendapi.js";
import { useState, useEffect } from "react";
import imae from "../assets/notification.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = React.useState(null);
  const [value, setValue] = React.useState("");
  const [userid, setUserid] = React.useState("");
  const [datax, setData] = useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setValue(user.displayName);
        setUserid(user.uid);
      }
    });
  });

  const handleSignInClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      setUser(data);

      const check = {
        table: "check",
        ID: data.user.uid,
      };

      const fetchedData = await fetchData(check);
      setData(fetchedData);

      if (fetchedData.bool === "0") {
        const userdata = {
          table: "Users",
          name: data.user.displayName,
          email: data.user.email,
          ID: data.user.uid,
        };
        sendDataToAPI(userdata);
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleClick = () => {
    navigate("/myprofile");
  };

  return (
    <>
      <Nav>
      <Bars />
        <img src={img} className="logo" />

        <NavMenu>
          <NavLink to="/jobsview">Jobs</NavLink>

          <NavLink to="/users" >
            Users
          </NavLink>

          </NavMenu>
        <NavBtn>
          {user ? (
            <span onClick={handleClick}>{value}</span>
          ) : (
            <button className="join1" onClick={handleSignInClick}>
              Sign In
            </button>
          )}
        </NavBtn>
        <NavLink to="/notif" activeStyle>
          <img src={imae} className="notif" />
        </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
