import React from "react";

export default function ParseRecipe({ mealData }) {
  const data = mealData;
  return (
    <div>
      <div class="">
        <img src={data.image} class="card-img-top w-50 p-2" alt="recipe"></img>
        <h1>{data.title} </h1>
      </div>

      <p class="">
        <a href={data.sourceUrl}>{data.sourceUrl}</a>
      </p>

      <h5>Original Ingredient List:</h5>
      <div class="text-capitalize">
        {mealData.extendedIngredients.map((ingredient) => {
          return (
            //   occasionally ingredients appear more than oncuechange, maybe in two forms so using id for a key isn't possible
            <div key={ingredient.index}>
              {ingredient.original}
              <br />
            </div>
          );
        })}{" "}
      </div>

      <hr class="my-4" />
      <p>
        WW SmartPoints: {data.weightWatcherSmartPoints} | Servings:{" "}
        {data.servings}
      </p>
      <p>Total Prep & Cooking time: {data.readyInMinutes} (minutes)</p>
      <hr class="my-4" />
      <section>
        <table class="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Ingredient</th>
              <th scope="col">Imperial</th>
              <th scope="col">Metric</th>
            </tr>
          </thead>
          <tbody>
            {mealData.extendedIngredients.map((ingredient) => {
              return (
                <tr>
                  <td class="text-capitalize">{ingredient.name}</td>
                  <td>
                    {ingredient.measures.metric.amount}{" "}
                    {ingredient.measures.metric.unitLong}
                  </td>
                  <td>
                    {ingredient.measures.us.amount}{" "}
                    {ingredient.measures.us.unitLong}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
