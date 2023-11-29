export const fetchData = async (x) => {
    console.log("0")
    try {
        console.log("1")
        let finalUrl = "https://carematch-c65bdfe79e59.herokuapp.com/fetch_data?table=" + x.table;
        if (x.table == "Notifications"){
          finalUrl = "https://carematch-c65bdfe79e59.herokuapp.com/fetch_data?table=" + x.table + "&ID=" + x.ID;
        }
        if (x.table == "Job_Listings"){
          finalUrl = "https://carematch-c65bdfe79e59.herokuapp.com/fetch_data?table=" + x.table + "&ID=" + x.ID;
        }
        if (x.table == "myprofile"){
          finalUrl = "https://carematch-c65bdfe79e59.herokuapp.com/fetch_data?table=" + x.table + "&ID=" + x.ID;
        }
        if (x.table == "jobs_myprofile"){
          finalUrl = "https://carematch-c65bdfe79e59.herokuapp.com/fetch_data?table=" + x.table + "&ID=" + x.ID;
        }
        if (x.table == "Applies"){
          console.log(x)
          finalUrl = "https://carematch-c65bdfe79e59.herokuapp.com/fetch_data?table=" + x.table + "&job_ID=" + x.job_ID;
        }

    ;
    console.log(finalUrl)
      const response = await fetch(finalUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
       return data; 
    } catch (error) {
        console.log("2")
      console.error("Error fetching data: ", error);
      return []; // Return an empty array or handle the error as needed
    }
  };