import React, { useState } from "react";
import ParseRecipe from "./ParseRecipe";

function GetRecipe() {
  const [mealData, setMealData] = useState("");
  const [url, setUrl] = useState(
    "https://www.bbcgoodfood.com/recipes/beef-guinness-stew-bacon-dumplings"
  );

  function GetRecipeData() {
    let ApiKey = process.env.REACT_APP_API_KEY;
    fetch(
      `https://api.spoonacular.com/recipes/extract?apiKey=${ApiKey}&url=${url}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange(e) {
    setUrl(e.target.value);
  }

  return (
    <div className="Recipe card" Style="width: 51.9rem;">
      <div className="card-header">
        <h4>Recipe Conversion:</h4>
      </div>
      {mealData && <ParseRecipe mealData={mealData} />}
      <div className="card-body">
        <section className="controls">
          <div className="input-group">
            {" "}
            <input
              type="text"
              class="form-control"
              placeholder="e.g. https://www.bbcgoodfood.com/recipes/beef-guinness-stew-bacon-dumplings"
              onChange={handleChange}
            />
            <button onClick={GetRecipeData} class="btn btn-info">
              Convert Recipe
            </button>
          </div>{" "}
          <small id="RecipeConversionHelpBlock" class="form-text text-muted">
            Paste or type the URL of an online recipe to convert all measures in
            one go!
          </small>
        </section>
      </div>
    </div>
  );
}

export default GetRecipe;
