  export const sendDataToAPI = async (dataToSend) => {
    console.log("start")
    console.log(dataToSend)
    const url = 'https://cmrtest-cc379c7d6d50.herokuapp.com/insert_data';

    try {
      console.log("new2")
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log('Data sent successfully!');
        // Handle success
      } else {
        console.error('Failed to send data:', response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };