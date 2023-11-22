
import '../css/nav.css'
import '../css/Main.css'

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbarelements";
import {auth,provider} from "../firebase.js"
import { signInWithPopup } from "firebase/auth";


 
const Navbar = () => {
    const [user, setUser] = React.useState(null); 
    const [value, setValue] = React.useState("");
    const [userid, setUserid] = React.useState("");

    React.useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setUser(user)
            setValue(user.displayName)
            console.log(user.displayName)
            setUserid(user.uid)
            console.log(user.uid)
          } 
        });
       
    
      })

    const handleSignInClick = () => {
        signInWithPopup(auth, provider).then((data) =>{
            console.log(data)
            setUser(data);
        });
    };
    return (
        <>
            <Nav>
                <Bars />
                <img src={"./assets/i1.jpeg"} className="logo" />
 
                <NavMenu>
                    <NavLink to="/jobs" >
                        Jobs
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Events
                    </NavLink>
                    <NavLink to="/annual" activeStyle>
                        Annual Report
                    </NavLink>
                    <NavLink to="/team" activeStyle>
                        Teams
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        Blogs
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                {user ? (
                    <span>{value}</span>
                ) : (
                    <button className='join1' onClick={handleSignInClick}>
                        Sign In
                    </button>
                )}
            </NavBtn>
                
            </Nav>
        </>
    );
};
 
export default Navbar;
