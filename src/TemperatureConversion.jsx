import React, { useState, useEffect } from "react";
import FromCelsius from "./FromCelsius.jsx";
import FromCelsiusFan from "./FromCelsiusFan.jsx";
import FromFahrenheit from "./FromFahrenheit.jsx";

function TemperatureConversion(props) {
  const [orginalTemp, setOrginalTemp] = useState(200);
  const [orginalMeasure, setOrginalMeasure] = useState("Celsius");

  return (
    <div>
      <div className="card d-flex justify-content-center" Style="Max-width: 25em;">
        <div className="card-header">
          <h4>Oven Temperature Conversion:</h4>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Temperature:{" "}
              </span>
            </div>

            <input
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(event) => setOrginalTemp(event.target.value)}
              placeholder="200"
            />
            <small id="temperatureHelpBlock" class="form-text text-muted">
              Input the temperature above, and select the tab that matches the
              measure you know.
            </small>
          </div>

          {/* switching tabs: https://www.codeply.com/go/p5Zm4JA5jb */}
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link disabled">From:</a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link active" data-toggle="tab" href="#celsius">
                Celsius
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link" data-toggle="tab" href="#fan">
                Fan
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link" data-toggle="tab" href="#fahrenheit">
                Fahrenheit
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="celsius" class="tab-pane active">
              {" "}
              <FromCelsius orginal={orginalTemp} measure={orginalMeasure} />
            </div>
            <div id="fan" class="tab-pane">
              {" "}
              <FromCelsiusFan orginal={orginalTemp} measure={orginalMeasure} />
              <div></div>
            </div>
            <div id="fahrenheit" class="tab-pane">
              <FromFahrenheit orginal={orginalTemp} measure={orginalMeasure} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureConversion;
