import React, { useState, useEffect } from "react";
import FromCelcius from "./FromCelcius.jsx";

function CelciusConversion(props) {
  const [orginalTemp, setOrginalTemp] = useState(200);
  const [orginalMeasure, setOrginalMeasure] = useState("Celsius");

  return (
    <div className="card" Style="width: 25rem;">
      <div className="card-header">
        <h4>Oven temperature Conversion:</h4>
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
            Input the temperature from the recipe above, and select the value
            below to update the table.
          </small>
        </div>
        <div className="form-group">
          <select class="form-control">
            <option onChange={(event) => setOrginalMeasure(event.target.value)}>
              Celsius (Fan)
            </option>
            <option onChange={(event) => setOrginalMeasure(event.target.value)}>
              Celsius (Non-Fan)
            </option>
            <option onChange={(event) => setOrginalMeasure(event.target.value)}>
              Farenheit
            </option>
            <option onChange={(event) => setOrginalMeasure(event.target.value)}>
              Gas Mark
            </option>
          </select>
        </div>

        <div>
          <FromCelcius orginal={orginalTemp} measure={orginalMeasure} />
        </div>
      </div>
    </div>
  );
}

export default CelciusConversion;
