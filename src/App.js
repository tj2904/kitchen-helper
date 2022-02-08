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

  return (
    <div className="App">
      <Navbar />
      <div class="m-2" id="container">
        <div class="card-deck d-flex justify-content-center">
          <MeasurementConversion />
          <TemperatureConversion />
        </div>
      </div>{" "}
      {/*end of container */}
    </div> //end of app
  );
}

export default App;
