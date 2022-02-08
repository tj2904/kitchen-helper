import React, { useState, useEffect } from "react";
import logo from "./KH-logo.png";
import "./App.css";

import RecipeConversion from "./RecipeConversion.jsx";
import RecipeInput from "./RecipeInput.jsx";
import TemperatureConversion from "./TemperatureConversion";
import Navbar from "./Navbar";
import MeasurementConversion from "./MeasurementConversion";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  // const [convertedIng, setConvertedIng] = useState("");

  // useEffect(() => {
  //   fetch("https://api.spoonacular.com/recipes/convert?apiKey=1ac75ed278cd4cb9abd35611d609c3cd&ingredientName=flour&sourceAmount=800&sourceUnit=grams&targetUnit=cups")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setConvertedIng(data.answer);
  //     });
  // }, []);



  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Kitchen Helper */}
      {/* <p>The current Unix time is {currentTime} (as supplied by the api).</p> */}
      {/* </header> */}
      <div class="m-2" id="container">
        <div class="card-deck">
        {/* <h4>Oven temperature Conversion:</h4>
        Enter a temperature to convert from Celcius:{" "}
        <input onChange={(event) => setOrginalTemp(event.target.value)} />
        <div>
          <FromCelcius orginal={orginalTemp} />
        </div> */}

        <TemperatureConversion />

          <MeasurementConversion />
       </div>
      </div>{" "}

      {/* <div>
      <p class="small">The current Unix time is {currentTime} (as supplied by the internal api).</p>
      </div> */}
      
      {/* <div>
      <p class="small">The converted ingredient is <strong>{convertedIng}</strong> (supplied by the external api).</p>
      </div> */}

      {/*end of container */}
    </div> //end of app
  );
}

export default App;
