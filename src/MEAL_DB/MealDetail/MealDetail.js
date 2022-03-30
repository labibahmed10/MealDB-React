import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MealDetail() {
  const MealID = useParams();
  console.log(MealID.MealID);

  const [detailMeal, setDetailMeal] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealID.MealID}`)
      .then((res) => res.json())
      .then((data) => setDetailMeal(data.meals));
  }, [MealID]);

  console.log(detailMeal);

  return (
    <div>
      {detailMeal.map((meal) => (
        <Detail meal={meal}></Detail>
      ))}
    </div>
  );
}

const Detail = ({ meal }) => {
  const { strMealThumb, strInstructions, strArea, strCategory, strYoutube } = meal;
  return (
    <div className="mx-auto w-1/2 p-3 mt-10">
      <img className="p-3" src={strMealThumb} alt="" />
      <h1 className="text-5xl text-center font-semibold">{strArea}</h1>
      <h2 className="text-4xl font-semibold">type: {strCategory}</h2>
      <h3 className="my-2 text-xl">{strInstructions}</h3>
    </div>
  );
};

export default MealDetail;
