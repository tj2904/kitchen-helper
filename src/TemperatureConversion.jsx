import React, { useState, useEffect } from "react";
import FromCelcius from "./FromCelcius.jsx";
import FromCelciusFan from "./FromCelciusFan.jsx";
import FromFarenheit from "./FromFarenheit.jsx";

function TemperatureConversion(props) {
  const [orginalTemp, setOrginalTemp] = useState(200);
  const [orginalMeasure, setOrginalMeasure] = useState("Celsius");

  return (
    <div>
      <div class="card d-flex justify-content-center" Style="Max-width: 25em;">
        <div class="card-header">
          <h4>Oven Temperature Conversion:</h4>
        </div>
        <div class="card-body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
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
          <ul class="nav nav-tabs card-tabs">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#celsius">
                Celsius
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#fan">
                Fan
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#farenheit">
                Farenheit
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div id="celsius" class="tab-pane active">
              {" "}
              <FromCelcius orginal={orginalTemp} measure={orginalMeasure} />
            </div>
            <div id="fan" class="tab-pane">
              {" "}
              <FromCelciusFan orginal={orginalTemp} measure={orginalMeasure} />
              <div></div>
            </div>
            <div id="farenheit" class="tab-pane">
              <FromFarenheit orginal={orginalTemp} measure={orginalMeasure} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureConversion;
