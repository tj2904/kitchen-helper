import React, { useState, useEffect } from "react";

function RecipeConversion(props) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("/getRecipe")
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
      });
  }, []);

  return (
    <div class="card" Style="width: 30rem;">
      <div class="card-header">
        <h4>Convert a recipe: </h4></div>
        <div class="card-body">
          The recipe <strong>{title}</strong> has been converted.
        
      </div>
    </div>
  );
}

export default RecipeConversion;
