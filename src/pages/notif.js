import "../css/notif.css"
import { useEffect,useState } from "react"
import { getUID } from "../firebase";
import { Auth } from "firebase/auth";
import { fetchData } from "../functions/getapi";

export default function Notif()  {
  const [uid, setUid] = useState(null);
  useEffect(() => {
      getUID()
        .then(uid => {
          console.log(uid)
          setUid(uid);
          const x = {
            ID : uid,
            table : "Notifications"
          }
          const a = fetchData(x);
          console(a)

        })
        .catch(error => {
          console.error('Error fetching UID:', error);
        });
    }, []);

    

    return(
      <div className="notif-container">
      <div className="wrapper">
        <div className="account">
          <div className="notification">
            <h3>Notification Title</h3>
          </div>
        </div>
        <div className="notif-description">
          <h4>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            quaerat quibusdam tempore temporibus atque dolor nihil veniam quae
            est officiis molestias, doloribus accusantium laborum culpa nobis
            numquam magnam in. 
          </h4>
        </div>
      </div>
    </div>
   
    )
  };
  
  