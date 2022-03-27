import React from "react";
import "./Meals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Meals = ({ meal }) => {
  console.log(meal);
  const { strMealThumb, strArea, strMeal, strInstructions } = meal;
  return (
    <div className="food-info">
      <img src={strMealThumb} alt="" />
      <h1>{strArea}</h1>
      <h2>{strMeal}</h2>
      <p>{strInstructions.length > 30 ? strInstructions.slice(0, 130) : strInstructions}</p>

      <button>
        Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Meals;
