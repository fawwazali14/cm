
import "../css/card.css";
import React, { useState, useEffect } from "react";


function Card() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);

    

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
    
    <div className="Card">
    <div id="container">

    <div class="card">
    <img className="jobimage" src="./assets/image.jpeg"/>

    <div class="card__details">


        <div class="name">Lago di Braies</div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam
        pharetra
        vitae ipsum odio.</p>

        <button>Read more</button>
    </div>


    </div>
    </div>
</div>
        
    )
}

export default Card;