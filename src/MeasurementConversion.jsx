import React, { useState } from "react";
import "./MeasurementConversion.css";

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
    //this will pull it in from the Config Vars in Heroku & the local .env file
    let ApiKey = process.env.REACT_APP_API_KEY;
    fetch(
      `https://api.spoonacular.com/recipes/convert?apiKey=${ApiKey}&ingredientName=${Ing}&sourceAmount=${OVal}&sourceUnit=${OMeas}&targetUnit=${NUnit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setConvertedIng(data.answer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      class="card d-flex justify-content-center"
      Style="Max-width: 25em; Min-width: 18em;"
    >
      <div class="card-header">
        <h4>Ingredient Measurement Conversion:</h4>
      </div>
      <div class="card-body">
        <div class="input-group-prepend">
          <span class="input-group-text tj-span" id="inputGroup">
            Ingredient:{" "}
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup"
            onChange={(event) => setIngredient(event.target.value)}
            placeholder="flour"
          />
        </div>
        <div class="input-group-prepend">
          <span
            class="input-group-text inputGroup tj-span"
            id="inputGroup"
          >
            Measure:{" "}
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup"
            onChange={(event) => setOriginalMeasure(event.target.value)}
            placeholder="cups"
          />
        </div>
        <div class="input-group-prepend">
          <span
            class="input-group-text inputGroup-sizing-sm tj-span"
            id="inputGroup-sizing-sm"
          >
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
          <span
            class="input-group-text inputGroup-sizing-sm tj-span"
            id="inputGroup-sizing-sm"
          >
            Preferred Measure:{" "}
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
          <button
            type="button"
            class="btn btn-sm btn-block btn-info"
            onClick={update}
          >
            Convert Ingredient
          </button>
          <small id="measurementHelpBlock" class="form-text text-muted">
            Hit convert when you have added your values above.
          </small>
        </div>

        {/* Conditional rendering: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator */}
        {convertedIng !== "Your converted values will appear here..." && (
          <div class="alert alert-secondary">
            <strong>{convertedIng}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
export default MeasurementConversion;
