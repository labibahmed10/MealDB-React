import React from "react";
import "./Meals.css";

const Meals = ({ meal }) => {
  console.log(meal);
  const { strMealThumb, strArea, strCategory, strMeal, strInstructions } = meal;
  return (
    <div className="food-info">
      <img src={strMealThumb} alt="" />
      <h1>{strArea}</h1>
      <h2>{strCategory}</h2>
      <p>{strMeal}</p>
      <p>{strInstructions.length > 30 ? strInstructions.slice(0, 150) : strInstructions}</p>

      <button>Add to Cart</button>
    </div>
  );
};

export default Meals;
