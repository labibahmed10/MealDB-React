import React, { useEffect, useState } from "react";
import "./Header.css";
import image from "../../images/ecommerce-logo-png-11.jpg";
import Meals from "../Meals/Meals";
import { Outlet } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  return (
    <header>
      <nav className="navbar ">
        <img className="w-32" src={image} alt="" />

        <div>
          <input onChange={searchHandler} className="ml-12 py-2 px-3 rounded-sm mr-3" type="search" />
          <button className="p-2 rounded-md bg-indigo-400 text-white hover:text-slate-500">Search</button>
        </div>
        <ul>
          <li>
            <a href="#?">Home</a>
          </li>
          <li>
            <a href="#/">Recipes</a>
          </li>
          <li>
            <a href="#/">About Us</a>
          </li>
          <li>
            <a href="#/">Contact</a>
          </li>
        </ul>
      </nav>

      <section className="grid md:grid-cols-5 grid-cols-1 gap-2 p-3">
        {meals.map((meal) => (
          <Meals key={meal.idMeal} meal={meal}></Meals>
        ))}
        {/* <Outlet></Outlet> */}
      </section>
    </header>
  );
};

export default Header;
