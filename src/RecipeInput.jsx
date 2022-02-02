
import React, { useState, useEffect } from "react";

function RecipeInput(props) {
    const [url, setUrl] = useState("");
    return (

    <div class="card" Style="width: 30rem;">
        <div class="card-header">
        <h4>Web Recipe Measurement Conversion:</h4>
        </div>
            <div class="card-body">
                Recipe URL that you would like converting:{" "}
                <input placeholder="https://www." />{" "}
                <button onSubmit={(event) => setUrl(event.target.value)}>
                {" "}
                Convert!{" "}
                </button>
            </div>
        
    </div>

);
}

export default RecipeInput;
