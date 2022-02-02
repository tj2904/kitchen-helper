import React, { useState, useEffect } from "react";

function RecipeConversion(props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    fetch("/getRecipe")
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setImage(data.image);
        setWebsite(data.sourceurl);
      });
  }, []);

  return (
    <div class="card" Style="width: 30rem;">
        <img class="card-img-top" source={image} alt="Recipe Image"></img>
        <div class="card-header">
         <h4>Converted recipe: </h4>
        </div>
        <div class="card-body">
          The recipe <strong>{title}</strong> has been converted from <a href={website}>{website}</a>. 
        </div>
    </div>
  );
}

export default RecipeConversion;
