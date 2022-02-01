import React, { useState, useEffect } from "react";
import logo from "./KH-logo.png";
import "./App.css";
import FromCelcius from "./FromCelcius.jsx";
import RecipeConversion from "./RecipeConversion.jsx";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [orginalTemp, setOrginalTemp] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  Kitchen Helper
        <p>The current Unix time is {currentTime} (as supplied by the api).</p>
      </header>


      <h4>Oven temperature Conversion:</h4>
      Enter a temperature to convert from Celcius: <input onChange={event => setOrginalTemp(event.target.value)} />
      <div>
        <FromCelcius orginal={orginalTemp} />
      </div>

    <div>
    <h4>Web Recipe Measurement Conversion:</h4>
    <div>
    Recipe URL that you would like converting: <input placeholder="https://www."/> <button  onSubmit={event => setUrl(event.target.value)}> Convert! </button>
</div>
      {/* <RecipeConversion /> */}
    </div>


    </div> //end of app
  );
}

export default App;
