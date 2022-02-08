import React, { useState } from "react";
import "./MeasurementConversion.css"
require('dotenv').config()

function MeasurementConversion(props) {
  const [Ingredient, setIngredient] = useState("flour");
  const [OriginalMeasure, setOriginalMeasure] = useState("cups");
  const [OriginalValue, setOriginalValue] = useState(3);
  const [NewUnit, setNewUnit] = useState("grams");

  const [convertedIng, setConvertedIng] = useState(
    "Your converted values will appear here..."
  );

  const update = () => {
    let Ing = Ingredient;
    let OMeas = OriginalMeasure;
    let OVal = OriginalValue;
    let NUnit = NewUnit;
    //this will pull it in from the Config Vars in Heroku
    let Api = process.env.REACT_APP_API_KEY;
    fetch(
      `https://api.spoonacular.com/recipes/convert?apiKey=${Api}&ingredientName=${Ing}&sourceAmount=${OVal}&sourceUnit=${OMeas}&targetUnit=${NUnit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setConvertedIng(data.answer);
      });
  };

  return (
    <div>
      <div class="card">
        <div class="card-header">
          <h4>Ingredient Measurement Conversion:</h4>
        </div>
        <div class="card-body">
          <div class="input-group-prepend">
            <span
              class="input-group-text inputGroup-sizing-sm"
              id="inputGroup-sizing-default"
            >
              Ingredient:{" "}
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(event) => setIngredient(event.target.value)}
              placeholder="flour"
            />
          </div>
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Measure:{" "}
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(event) => setOriginalMeasure(event.target.value)}
              placeholder="cups"
            />
          </div>
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Value:{}
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(event) => setOriginalValue(event.target.value)}
              placeholder="3"
            />
          </div>
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Prefered Measure:{" "}
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(event) => setNewUnit(event.target.value)}
              placeholder="grams"
            />
          </div>

          <div class="pt-4 pb-4">
            <button type="button" class="btn btn-sm btn-block btn-info" onClick={update}>
              Convert Ingredient
            </button>
            <small id="measurementHelpBlock" class="form-text text-muted">
              Hit convert when you have added your values above.
            </small>
          </div>
          <div class="alert alert-secondary">{convertedIng}</div>
        </div>
      </div>
    </div>
  );
}
export default MeasurementConversion;