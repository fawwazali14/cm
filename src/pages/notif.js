import "../css/notif.css";
import { useEffect, useState } from "react";
import { getUID } from "../firebase";
import { fetchData } from "../functions/getapi";

export default function Notif() {
  const [uid, setUid] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    getUID()
      .then((uid) => {
        console.log(uid);
        setUid(uid);
        const x = {
          ID: uid,
          table: "Notifications",
        };
        fetchData(x)
          .then((d) => {
            console.log(d);
            setData(d.notification);
            console.log(data)
          })
          .catch((error) => {
            console.error('Error fetching notifications:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching UID:', error);
      });
  }, []);

  return (
    <div className="notif-container">
        {data.map((notification, index) => (
          <div className="wrapper">
          <div className="account" key={index}>
            <div className="notification">
              <h3>{notification[4]}</h3>
            </div>
            <div className="notif-description">
              <h4>{notification[3]}</h4>
            </div>
          </div>
          </div>
        ))}
      
    </div>
  );
}

  