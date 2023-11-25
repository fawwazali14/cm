import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/nav';
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Events from "./pages/events";
import Teams from "./pages/team";
import Blogs from "./pages/b";
import Main from './pages/b';
import Register_care_taker from './pages/register_taker';
import Jobp from "./pages/jobp"
import Card from "./pages/card"
import Job_details from "./pages/Job_details";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register_taker" element={<Register_care_taker />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/main" element={<Main />} />
        <Route path="/jobsp" element={<Jobp />} />
        <Route path="/jobsview" element={<Card />} />
        <Route path="/jobsp/:jobId" element={<Job_details />} />

      </Routes>
    </Router>
  );
}

export default App;

