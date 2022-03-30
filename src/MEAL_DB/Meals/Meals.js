import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Meals = ({ meal }) => {
  const navigate = useNavigate();

  const niyeJao = (id) => {
    console.log(id);
    navigate(`/detail/${id}`);
  };

  const { strMeal, strMealThumb, strTags, strInstructions } = meal;
  return (
    <div className="border-gray-400 border rounded-md p-2 h-auto ">
      <img src={strMealThumb} alt="" />
      <h1 className="text-2xl font-semibold my-2">Name: {strMeal}</h1>
      <h3 className="text-xl font-medium ">Type: {strTags ? strTags.slice(0, 20) : "Unknown"}</h3>
      <p className="my-3">
        {strInstructions.length > 30 ? strInstructions.slice(0, 30) : strInstructions}..See More
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => niyeJao(meal.idMeal)}
          className=" w-full bg-slate-600 text-sm text-white py-2 rounded-lg"
        >
          SHOW MORE
        </button>
        <Link
          className="w-full bg-teal-700 text-white py-2 rounded-lg text-center"
          to={`/detail/${meal.idMeal}`}
        >
          See Deatails
        </Link>
      </div>
    </div>
  );
};

export default Meals;
