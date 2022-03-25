import React, { useEffect, useState } from "react";
import Meals from "../Meals/Meals";
import "./Products.css";

const Products = () => {
  const [meals, setmeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => setmeals(data.meals));
  }, []);

  return (
    <section className="main-container">
      <div className="food-display">
        {meals.map((meal) => (
          <Meals meal={meal}></Meals>
        ))}
      </div>

      <div className="cart-site">
        
      </div>
    </section>
  );
};

export default Products;
