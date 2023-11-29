import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css"
import Navbar from './components/nav';
import Home from "./pages/home";
import JobsSatus from "./pages/jobsStatus";
import Filter from "./pages/filter";
import Candidate from "./pages/candidateprofile";
import Notif from "./pages/notif";
import Main from './pages/b';
import AllUsers from "./pages/AllUsers";
import Jobp from "./pages/jobp"
import Card from "./pages/card"
import Jobdetails from "./pages/jobdetails";
import Myprofile from "./pages/myprofile";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path= "/myprofile" element = {<Myprofile /> } />
        <Route path="/jobstatus/:jobId" element={<JobsSatus />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/profile/:ID" element={<Candidate />} />
        <Route path="/notif" element={<Notif />} />
        <Route path="/main" element={<Main />} />
        <Route path="/jobsp" element={<Jobp />} />
        <Route path="/jobsview" element={
        <div className="big-container">
          <Filter />
          <Card />
          </div>} />
        <Route path="/jobsdetails/:jobId" element={<Jobdetails />} />
        

      </Routes>
    </Router>
  );
}

export default App;

