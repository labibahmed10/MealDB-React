import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meals from "../Meals/Meals";
import "./Products.css";

const Products = () => {
  const [meals, setmeals] = useState([]);

  useEffect(() => {
    fetch("Product.json")
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
        <Cart></Cart>
      </div>
    </section>
  );
};

export default Products;
