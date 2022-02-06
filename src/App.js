import React, { useState, useEffect } from "react";
import logo from "./KH-logo.png";
import "./App.css";

import RecipeConversion from "./RecipeConversion.jsx";
import RecipeInput from "./RecipeInput.jsx";
import CelciusConversion from "./CelciusConversion";
import Navbar from "./Navbar";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Kitchen Helper */}
      {/* <p>The current Unix time is {currentTime} (as supplied by the api).</p> */}
      {/* </header> */}
      <div class="m-2" id="container">
        {/* <h4>Oven temperature Conversion:</h4>
        Enter a temperature to convert from Celcius:{" "}
        <input onChange={(event) => setOrginalTemp(event.target.value)} />
        <div>
          <FromCelcius orginal={orginalTemp} />
        </div> */}

        <CelciusConversion />

        {/* <div class="card-deck mt-2">
          <RecipeInput />
          <RecipeConversion />
        </div> */}
      </div>{" "}
      {/*end of container */}
    </div> //end of app
  );
}

export default App;
