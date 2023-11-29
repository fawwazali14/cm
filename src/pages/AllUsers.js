import { useEffect,useState } from "react"
import { fetchData } from "../functions/getapi"

import cardUserImage from "../assets/carduser.jpeg";

export default function AllUsers()  {
  const [data, setData] = useState([]);
    useEffect(()=>{
        const x = {
            table : "all"
        }
        fetchData(x)
        .then((z)=>{
            console.log(z.data)
            setData(z.data)

        })

    },[])



    return(
        <div>
      {data.length > 0 ? (
        <div>
          {data.map((candidate, index) => (
            <div key={index} className="homecard-container">
              <div className="profile-pic">
                {/* Render candidate profile picture or default image */}
                <img className="user-pic" src={cardUserImage} alt="Card User" />
              </div>
              <div className="home-content">
                {/* Render candidate name */}
                <h3 className="home-username">{candidate.name}</h3>
                {/* Render candidate bio */}
                <p className="home-bio">{candidate.bio}</p>

              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No candidates applied for this job.</p>
      )}
    </div>
   
    )
  };
  