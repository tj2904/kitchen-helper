import React, { useState, useEffect } from "react";
import "./RecipeConversion.css";

function RecipeConversion(props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [website, setWebsite] = useState("");
  const [isLoaded, setIsLoaded] = useState("False");

  useEffect(() => {
    fetch("/api/getRecipe")
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setImage(data.image);
        setWebsite(data.sourceurl);
        setIsLoaded("True");
      });
  }, []);

  if (!isLoaded)
    return (
      <div>
        <h1> Please wait some time.... </h1>{" "}
      </div>
    );

  return (
    <div class="card" Style="width: 30rem;">
      <img class="card-img-top card-recipe-top" src={image} alt="Recipe"></img>
      <div class="card-header">
        <h4>Converted recipe: </h4>
      </div>
      <div class="card-body">
        The recipe <strong>{title}</strong> has been converted from:{" "}
        <a href={website}>{website}</a>.
      </div>
    </div>
  );
}

export default RecipeConversion;
