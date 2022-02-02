import React, { useState, useEffect } from "react";
import FromCelcius from "./FromCelcius.jsx";

function CelciusConversion(props) {
  const [orginalTemp, setOrginalTemp] = useState(200);

  return (
    <div class="card" Style="width: 30rem;">
      <div class="card-header">
        <h4>Oven temperature Conversion:</h4>
      </div>
      <div class="card-body">
        Enter a temperature to convert from Celcius:{" "}
        <input onChange={(event) => setOrginalTemp(event.target.value)} placeholder="200"/>
        <div>
          <FromCelcius orginal={orginalTemp} />
        </div>
      </div>
    </div>
  );
}

export default CelciusConversion;
