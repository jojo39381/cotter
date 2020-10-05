import React, { useEffect} from 'react';
import Dashboard from "./Dashboard"
import "./styles.css";
import "./normalize.css"
import axios from "axios"
// import Cotter from "cotter"; //  1️⃣  Import Cotter

function App() {
  // const [payload, setpayload] = useState(null);

  // //  2️⃣ Initialize and show the form
  // useEffect(() => {
  //   var cotter = new Cotter("880f07d0-d3f2-42ce-a2d3-13cc5f7d4c36"); // 👈 Specify your API KEY ID here
  //   cotter
  //     .signInWithLink() // use .signInWithOTP() to send an OTP
  //     .showEmailForm()  // use .showPhoneForm() to send magic link to a phone number 
  //     .then(response => {
  //       setpayload(response); // show the response in our state
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  function getInfo() {
    token = "AAAAAAAAAAAAAAAAAAAAAKU0HgEAAAAASx%2FCtC66RwEi0n4QATdtLlDI%2Fuk%3DLyes4PSfjWzb7oIx0kVAYVTQhHnczzFsiDZ3fj3PmwTKsKSKiV"
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
  
    // const queryParameters = {
    //   "user.field":"description,name,profile_image_url,username,verified"
    // };
  
    axios.get("https://api.twitter.com/2/users/by/username/Jojo39381", null, config )
    .then(response => console.log(response.data))
  }

  useEffect(() => {
    getInfo()
  }, []);

  return (
    <div>
       {/* 3️⃣  Put a <div> that will contain the form
      <div id="cotter-form-container" style={{ width: 300, height: 300 }} />
    
      <pre>{JSON.stringify(payload, null, 4)}</pre> */}

      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
