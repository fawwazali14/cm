import React, { useState, useEffect } from "react";
import "../css/jobs.css"

export default function Jobs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  
  const UserListItem = ({ uid, username, email }) => {
    const [imageUrl, setImageUrl] = useState('');
    const handleExportClick = () => {
      // Handle export button click event here
      console.log("Export button clicked!");
    };
  
    return (
      <div className="user-card">
        <div className="user-info">
          <p>User ID: {uid}</p>
          <p>Name: {username}</p>
          <p>Email: {email}</p>
        </div>
        <button className="export-btn" onClick={handleExportClick}>
          Apply
        </button>
      </div>
    );
  };
  

  const fetchData = () => {
    fetch("https://alrzu3u6lhbaiayeorxqenzama0vqpoe.lambda-url.us-east-1.on.aws/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="container">
      {data && data.length > 0 ? (
        data.map((user) => (
          <UserListItem
            key={user.user_id}
            uid={user.id}
            username={user.name}
            email={user.email}
          />
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
