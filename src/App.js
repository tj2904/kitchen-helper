import React, { useState, useEffect } from "react";
import "./App.css";

import TemperatureConversion from "./TemperatureConversion";
import Navbar from "./Navbar";
import MeasurementConversion from "./MeasurementConversion";

import GetRecipe from "./GetRecipe";
import Footer from "./Footer";

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
      <div className="m-2" id="container">
        <div className="card-deck d-flex justify-content-center">
          <MeasurementConversion />
          <TemperatureConversion />
        </div>
        <div className="m-2  d-flex justify-content-center">
          <GetRecipe />
        </div>
      </div>{" "}
      {/*end of container */}
      <Footer />
    </div> //end of app
  );
}

export default App;
