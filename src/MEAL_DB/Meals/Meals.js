import React from "react";

const Meals = ({ meal }) => {
  console.log(meal);

  const { strMeal, strMealThumb, strTags, strInstructions } = meal;
  return (
    <div className="">
      <img src={strMealThumb} alt="" />
      <h1>Name: {strMeal}</h1>
      <h3>Type: {strTags ? strTags : "Unknown"}</h3>
      <p>{strInstructions.length > 30 ? strInstructions.slice(0, 30) : strInstructions}..See More</p>
    </div>
  );
};

export default Meals;
